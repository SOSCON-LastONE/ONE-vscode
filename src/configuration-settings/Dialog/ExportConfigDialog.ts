import * as vscode from 'vscode';

export interface Tool{
    type: string;
    use: boolean;
    options: [option];
}

export interface option{
  optionName:string;
  optionValue:boolean | string;
}

export function exportConfig(oneToolList: any): void{
    const ConfigPareser = require('configparser');
    const config = new ConfigPareser();
    
    config.addSection('one-build');

    for(let i = 0; i < oneToolList.length; i++){
      config.set('one-build', oneToolList[i].type, oneToolList[i].use);
      if(oneToolList[i].use === false) continue;
      config.addSection(oneToolList[i].type);
      for(let j = 0; j < oneToolList[i].options.length; j++){
        if(oneToolList[i].options[j].optionValue === false || oneToolList[i].options[j].optionValue === '') continue;
        config.set(oneToolList[i].type, oneToolList[i].options[j].optionName, oneToolList[i].options[j].optionValue);
      }
    }

    const optionsForExportDialog: vscode.SaveDialogOptions = {
        defaultUri: vscode.Uri.file('template.cfg'),
        filters: {
          'allFiles': ['*']
        }
      };
    vscode.window.showSaveDialog(optionsForExportDialog).then(fileUri => {
      if (fileUri) {
        config.write(fileUri.path);
        console.log('Selected file!!!: ' + fileUri.path);
        }
    });
}