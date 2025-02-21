# Time Inserter

Simple extension for Visual Studio Code that inserts the current time, date or both in the editor.

## Features
  * Insert current time/date
  * Ctrl+Shift+P and search for "Insert current..."
  * Keybinding for time Ctrl+Alt+1.
  * Keybinding for date Ctrl+Alt+2.
  * Keybinding for both Ctrl+Alt+3.

## Requirements

None!

## Extension Settings

There are 4 configurable properties:

* `timeinserter.dateFormat`: Date format (using Unicode Technical Standard #35) *[default: 'yyyy-MM-dd']*
* `timeinserter.timeFormat`:  Time format (using Unicode Technical Standard #35) *[default: 'HH:mm:ss']*
* `timeinserter.dateTimeFormat`: Date and time format (using Unicode Technical Standard #35). If empty, date and time will be separated by a space *[default: '']*
* `timeinserter.pre`: String to add before the time/date *[default: '']*
* `timeinserter.post`: String to add before the time/date *[default: '']*

## Known Issues

You tell me

## Release Notes

### 0.0.1
  * Initial release.
### 0.0.2
  * Add date inserter (ctrl+alt+2)
### 0.1.0
  * Add date + time inserter (ctrl+alt+3)
  * Use date-fns format
