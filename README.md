# Time Inserter

Simple extension for Visual Studio Code that insert the current time (hh:mm) in the editor.<br>
I originally created it to quickly insert the current time in MarkDown LOG files \*[hh:mm]\* ("timeinserter.pre": "\*[" and "timeinserter.post": "]\*").

## Features
  * Just insert the time ;D
  * Ctrl+Shift+P and search for "Insert current time...".
  * Keybinding Ctrl+Alt+1.

## Requirements

None!

## Extension Settings

There are 3 preferences

* `timeinserter.pre`:    String to add before the time (default: '').
* `timeinserter.post`:   String to add after the time (default: '').
* `timeinserter.format`: Set the time format either to 24hour [hh:mm] or 12hour [hh:mm {am,pm}] (default: true [24h]).

## Known Issues

None!

## Release Notes

### 0.0.1
  * Initial release.