import { DefaultDeserializer } from 'v8';
import * as vscode from 'vscode';
import { ResourceLimits } from 'worker_threads';

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
    console.log('dddddddddddd');
    console.log(oneToolList[0]);
    console.log('dddddaaaaaadddddddd');
    console.log(oneToolList[1]);

    for(let i = 0; i < oneToolList.length; i++){
      config.addSection(oneToolList[i].type);
      console.log(oneToolList[i].type);
    }
    config.set()
    // Adding sections and adding keys
    config.addSection('User');
    config.set('User', 'token', 'some value');
    config.set('User', 'exp', 'some value');

    // With String Interpolation, %(key_name)s
    config.addSection('MetaData');
    config.set('MetaData', 'path', '/home/%(dir_name)s/');
    config.set('MetaData', 'dir_name', 'me');

    // config.write('my-cfg-file.cfg');
    console.log('successfully wrote file!!!')

    const optionsForExportDialog: vscode.SaveDialogOptions = {
        filters: {
          'allFiles': ['*']
        }
      };
    vscode.window.showSaveDialog(optionsForExportDialog).then(fileUri => {
      if (fileUri) {
        config.write(fileUri.path + '.cfg');
        console.log('Selected file!!!: ' + fileUri.path + '.cfg');
        }
    });
}