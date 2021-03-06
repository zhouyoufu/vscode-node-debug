/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import * as nls from 'vscode-nls';

export const localize = nls.config(process.env.VSCODE_NLS_CONFIG)();

/**
 * Send to debug console.
 */
export function log(message: string) {
	vscode.debug.activeDebugConsole.appendLine(message);
}

/**
 * Copy attributes from fromObject to toObject.
 */
export function extendObject<T>(toObject: T, fromObject: T): T {

	for (let key in fromObject) {
		if (fromObject.hasOwnProperty(key)) {
			toObject[key] = fromObject[key];
		}
	}
	return toObject;
}
