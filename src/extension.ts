import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('django-template-helper.applySettings', async () => {
        const config = vscode.workspace.getConfiguration();

        await config.update("files.associations", { "*.html": "django-html" }, vscode.ConfigurationTarget.Global);
        await config.update("emmet.includeLanguages", { "django-html": "html" }, vscode.ConfigurationTarget.Global);
        await config.update("auto-close-tag.activationOnLanguage", ["django-html"], vscode.ConfigurationTarget.Global);
        await config.update("editor.defaultFormatter", "vscode.html-language-features", vscode.ConfigurationTarget.Global);
        
        vscode.window.showInformationMessage('Django Template settings applied successfully! ✅');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
