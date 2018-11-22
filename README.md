# Time Inserter

Simple extension for Visual Studio Code that inserts the current time (hh:mm) in the editor.<br>
I originally created it to quickly insert the current time in MarkDown LOG files \*[hh:mm]\* ("timeinserter.pre": "\*[" and "timeinserter.post": "]\*").

## Features
  * Just insert the time/date ;D
  * Ctrl+Shift+P and search for "Insert current time..." or "Insert date...".
  * Keybinding for time Ctrl+Alt+1.
  * Keybinding for date Ctrl+Alt+2.

## Requirements

None!

## Extension Settings

There are 4 preferences:

* `timeinserter.pre`:           String to add before the time (default: '').
* `timeinserter.post`:          String to add after the time (default: '').
* `timeinserter.format`:        Set the time format either to 24hour [hh:mm] or 12hour [hh:mm {am,pm}] (default: true [24h]) (default: true).
* `timeinserter.dateSeparator`: String that separates the components of the date (default: '/').

## Known Issues

None!

## Release Notes

### 0.0.1
  * Initial release.
### 0.0.2
  * Add date inserter (ctrl+alt+2)
