const vscode = require('vscode');

function addZero(i) { return i < 10 ? "0"+i : i; }

function activate(context) {
    const config = vscode.workspace.getConfiguration('timeinserter');
    let disposable = vscode.commands.registerCommand('timeinserter.insert', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        var date = new Date();
        var hour = date.getHours();
        var min  = date.getMinutes();
        var sec  = date.getSeconds();

        var formatStr = '';
        if(!config.format) {
            hour = hour>12 ? hour-12 : hour;
            formatStr = hour>12 ? ' pm' : ' am';
        }
        var dateText = `${config.pre}${addZero(hour).toString()}:${addZero(min).toString()}${formatStr}${config.post}`;
        
        const position = editor.selection.active;

        // vscode.window.showInformationMessage(dateText);
        // vscode.window.showInformationMessage(JSON.stringify(position, null, 4));
        // var doc = editor.document;

        editor.edit(function (editor) {
            editor.insert(position, dateText);
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;