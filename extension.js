const vscode = require('vscode');

function activate(context) {
    const config = vscode.workspace.getConfiguration('timeinserter');
    let disposable = vscode.commands.registerCommand('extension.timeinserter', function () {
        var date = new Date();
        var hour = addZero(date.getHours());
        var min  = addZero(date.getMinutes());
        var sec  = addZero(date.getSeconds());
        var formatStr = '';
        if(!config.format) {
            hour = hour>12 ? hour-12 : hour;
            formatStr = hour>12 ? ' pm' : ' am';
        }
        var dateText = `${config.pre}${hour.toString()}:${min.toString()}${formatStr}${config.post}`;
        
        if (editor.selection.isEmpty) {
            const position = editor.selection.active;
        }
        else {
        }
        vscode.window.showInformationMessage(dateText);
        const editor = vscode.window.activeTextEditor;
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;