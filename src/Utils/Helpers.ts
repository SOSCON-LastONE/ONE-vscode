/*
 * Copyright (c) 2021 Samsung Electronics Co., Ltd. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import {Balloon} from './Balloon';
import {Logger} from './Logger';

var ini = require('ini');

const logTag = 'Helpers';

/**
 * @brief This class represents a normalized absolute path
 *        which actually exists on the filesystem
 */
export class RealPath {
  absPath: string;

  private constructor(absPath: string) {
    this.absPath = absPath;
  }

  public static isEqual(path0: RealPath, path1: RealPath): boolean {
    return path0.absPath === path1.absPath;
  }

  public static createRealPath(rawPath: string): RealPath|null {
    const absPath = path.resolve(path.normalize(rawPath));

    return fs.existsSync(absPath) ? new RealPath(absPath) : null;
  }
}

/**
 * @brief Get Workspace root folder as string
 * @note  will throw if not working in workspace mode.
 */
export function obtainWorkspaceRoot(): string {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    Logger.error(logTag, 'obtainWorkspaceRoot: NO workspaceFolders');
    // TODO revise message
    throw new Error('Need workspace');
  }

  // TODO support active workspace among the multiple workspaceFolders
  // TODO support multi-root workspace
  if (workspaceFolders.length > 1) {
    Balloon.info('Warning: Only the first workspace directory is currently supported');
  }
  const workspaceRoot = workspaceFolders[0].uri.path;
  if (!workspaceRoot) {
    Logger.error(logTag, 'obtainWorkspaceRoot: NO workspaceRoot');
    // TODO revise message
    throw new Error('Need workspace');
  }
  Logger.info(logTag, 'obtainWorkspaceRoot:', workspaceRoot);

  return workspaceRoot;
}

export interface FileSelector {
  onFileSelected(uri: vscode.Uri|undefined): void;
}

/**
 * @brief Get import cfg file path using file open dialog
 */
export function getImportCfgFilepath(selector: FileSelector): void {
  const options: vscode.OpenDialogOptions = {
    canSelectMany: false,
    openLabel: 'Import',
    filters: {
      /* eslint-disable-next-line @typescript-eslint/naming-convention */
      'ONE .cfg Files': ['cfg']
    }
  };

  vscode.window.showOpenDialog(options).then(fileUri => {
    if (fileUri && fileUri[0]) {
      selector.onFileSelected(fileUri[0]);
    } else {
      selector.onFileSelected(undefined);
    }
  });
}

/**
 * @brief Load cfg file and return Object
 */
export function loadCfgFile(filePath: string): any {
  let cfgData = fs.readFileSync(filePath, 'utf-8');
  // TODO check cfgData validity
  let cfgIni = ini.parse(cfgData);
  // TODO check cfgIni validity

  return cfgIni;
}
