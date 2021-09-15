import * as vscode from "vscode";
import tools from "./json/tools.json";

/**
 * CodelensProvider
 */
export class CodelensProvider implements vscode.CodeLensProvider {
    private codeLenses: vscode.CodeLens[] = [];
    private regex: RegExp;
    private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
    public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

    constructor() {
        this.regex = /(.+)/g;

        vscode.workspace.onDidChangeConfiguration((_) => {
            this._onDidChangeCodeLenses.fire();
        });

        vscode.commands.registerCommand("onevscode.codelensAction", (args: any, args2: any) => {
            const show_tool_name = vscode.workspace.getConfiguration("one-vscode").get("showInfo") as string[];

            const find_tool_idx = show_tool_name.findIndex((tool) => tool == args);
            if (find_tool_idx == -1) {
                console.log("push item : ", args);
                show_tool_name.push(args);
            } else {
                console.log("delete item : ", show_tool_name[find_tool_idx]);
                show_tool_name.splice(find_tool_idx, 1);
            }
            vscode.workspace.getConfiguration("one-vscode").update("showInfo", show_tool_name, true);
        });

        vscode.commands.registerCommand("onevscode.enableCodeLens", () => {
            vscode.workspace.getConfiguration("one-vscode").update("enableCodeLens", true, true);
        });

        vscode.commands.registerCommand("onevscode.disableCodeLens", () => {
            vscode.workspace.getConfiguration("one-vscode").update("enableCodeLens", false, true);
        });
    }

    public provideCodeLenses(
        document: vscode.TextDocument,
        token: vscode.CancellationToken
    ): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
        if (vscode.workspace.getConfiguration("one-vscode").get("enableCodeLens", true)) {
            this.codeLenses = [];

            const regex = new RegExp(this.regex);
            const text = document.getText();
            let matches;
            while ((matches = regex.exec(text)) !== null) {
                const line = document.lineAt(document.positionAt(matches.index).line);
                const indexOf = line.text.indexOf(matches[0]);
                const position = new vscode.Position(line.lineNumber, indexOf);
                const range = document.getWordRangeAtPosition(position, this.regex);

                tools.forEach((item) => {
                    if (item.name == line.text) {
                        if (range) {
                            this.codeLenses.push(new vscode.CodeLens(range));
                        }
                    }
                });
            }
            return this.codeLenses;
        }
        return [];
    }

    public resolveCodeLens(codeLens: vscode.CodeLens, token: vscode.CancellationToken) {
        if (vscode.workspace.getConfiguration("one-vscode").get("enableCodeLens", true)) {
            let line_str = vscode.window.activeTextEditor?.document.getText(codeLens.range);

            let start_pos = new vscode.Position(codeLens.range.start.line + 1, 0);
            let end_pos = new vscode.Position(codeLens.range.end.line + 1, 0);

            tools.forEach((item) => {
                if (item.name == line_str) {
                    codeLens.command = {
                        title: item.name,
                        tooltip: item.description,
                        command: "onevscode.codelensAction",
                        arguments: [line_str, new vscode.Range(start_pos, end_pos)],
                    };
                }
            });

            return codeLens;
        }
        return null;
    }
}
