import * as vscode from 'vscode';

export function createStatusBarItem(statusBarCommand: string, context: vscode.ExtensionContext) {
    let myStatusBarItem: vscode.StatusBarItem;
    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    myStatusBarItem.text =`$(file-add) ONE configuration Settings`;
    myStatusBarItem.command = statusBarCommand;
    context.subscriptions.push(myStatusBarItem);
    myStatusBarItem.show();
}
