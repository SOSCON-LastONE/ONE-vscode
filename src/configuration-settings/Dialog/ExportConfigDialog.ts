import * as vscode from 'vscode';

export function exportConfig(): void{
    const ConfigPareser = require('configparser');
    const config = new ConfigPareser();
    
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