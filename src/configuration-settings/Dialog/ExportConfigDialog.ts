import * as vscode from 'vscode';

export function exportConfig(oneToolList: any): void {
  const configPareser = require('configparser');
  const config = new configPareser();

  config.addSection('one-build');

  for (let i = 0; i < oneToolList.length; i++) {
    config.set('one-build', oneToolList[i].type, oneToolList[i].use ? 'True' : 'False');
    if (oneToolList[i].use === false) {
      continue;
    }
    config.addSection(oneToolList[i].type);
    for (let j = 0; j < oneToolList[i].options.length; j++) {
      let optionValue = oneToolList[i].options[j].optionValue;
      if (optionValue === false || optionValue === '') {
        continue;
      }
      if (typeof optionValue === 'boolean') {
        optionValue = 'True';
      }
      config.set(oneToolList[i].type, oneToolList[i].options[j].optionName, optionValue);
    }
  }

  const optionsForExportDialog: vscode.SaveDialogOptions = {
    defaultUri: vscode.Uri.file('one-build-template.cfg'),
    filters: {
      allFiles: ['*'],
    },
  };
  vscode.window.showSaveDialog(optionsForExportDialog).then((fileUri) => {
    if (fileUri) {
      const os = require('os');
      let path = fileUri.path;
      if (os.platform() === 'win32') {
        const pathTmp = path.split('/');
        pathTmp.splice(0, 1);
        path = pathTmp.join('\\');
      }
      config.write(path);
      console.log(path);
      vscode.window.showInformationMessage('Your configuration file is successfully generated!');
      vscode.workspace.openTextDocument(vscode.Uri.file(path)).then(doc => {
        vscode.window.showTextDocument(doc);
      });
    }
  });
}
