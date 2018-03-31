const vscode = require('vscode');

function addZero(i) { return i < 10 ? "0"+i.toString() : i; }

function activate(context) {
    const config = vscode.workspace.getConfiguration('timeinserter');
    let disposable1 = vscode.commands.registerCommand('timeinserter.insertTime', function () {
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
            formatStr = hour>12 ? ' pm' : ' am';
            hour = hour>12 ? hour-12 : hour;
        }
        var dateText = `${config.pre}${addZero(hour).toString()}:${addZero(min).toString()}${formatStr}${config.post}`;
        
        const position = editor.selection.active;

        // vscode.window.showInformationMessage(dateText);
        // vscode.window.showInformationMessage(JSON.stringify(position, null, 4));

        editor.edit(function (editor) {
            editor.insert(position, dateText);
        });
    });
    let disposable2 = vscode.commands.registerCommand('timeinserter.insertDate', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        var date   = new Date();
        var day    = date.getDate();
        var month  = date.getMonth()+1;
        var year   = date.getFullYear();

        var dateText = `${config.pre}${addZero(day).toString()}${config.dateSeparator}${addZero(month).toString()}${config.dateSeparator}${year.toString()}${config.post}`;
        
        const position = editor.selection.active;

        editor.edit(function (editor) {
            editor.insert(position, dateText);
        });
    });

    context.subscriptions.push([disposable1, disposable2]);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;