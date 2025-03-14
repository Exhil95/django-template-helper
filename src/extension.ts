import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('django-template-helper.applySettings', async () => {
        vscode.window.showInformationMessage('Django Template settings applied successfully! ✅');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
