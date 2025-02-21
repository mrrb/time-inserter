const vscode = require('vscode');
const { format } = require('date-fns');

/* VSCode extension activation */
function activate(context) {

  /* Load config */
  const config = vscode.workspace.getConfiguration('timeinserter');

  /* Register the commands */
  let insert_time = vscode.commands.registerCommand('timeinserter.insertTime', function () {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      /* No editor available */
      return;
    }

    /* Gen time string */
    var timeText = format(new Date(), config.timeFormat);
    timeText = `${config.pre}${timeText}${config.post}`;

    /* Insert the time string */
    const position = editor.selection.active;

    editor.edit(function (editor) {
      editor.insert(position, timeText);
    });
  });

  let insert_date = vscode.commands.registerCommand('timeinserter.insertDate', function () {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      /* No editor available */
      return;
    }

    /* Gen date string */
    var dateText = format(new Date(), config.dateFormat);
    dateText = `${config.pre}${dateText}${config.post}`;

    /* Insert the date string */
    const position = editor.selection.active;

    editor.edit(function (editor) {
      editor.insert(position, dateText);
    });
  });

  let insert_date_time = vscode.commands.registerCommand('timeinserter.insertDateTime', function () {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      /* No editor available */
      return;
    }

    /* Gen date/time string */
    var date_time_format = config.dateTimeFormat ? config.dateTimeFormat : `${config.dateFormat} ${config.timeFormat}`;

    /* Gen date/time string */
    var dateTimeText = format(new Date(), date_time_format);
    dateTimeText = `${config.pre}${dateTimeText}${config.post}`;

    /* Insert the date/time string */
    const position = editor.selection.active;

    editor.edit(function (editor) {
      editor.insert(position, dateTimeText);
    });
  });

  /* Add the commands to the context */
  context.subscriptions.push([insert_time, insert_date, insert_date_time]);
}

/* VSCode extension deactivation */
function deactivate() {
}

/* Export */
module.exports = {
  activate,
  deactivate
}
