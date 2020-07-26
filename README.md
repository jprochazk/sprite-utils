# sprite-utils

Sprite authoring utility

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sprite-utils.svg)](https://npmjs.org/package/sprite-utils)
[![Downloads/week](https://img.shields.io/npm/dw/sprite-utils.svg)](https://npmjs.org/package/sprite-utils)
[![License](https://img.shields.io/npm/l/sprite-utils.svg)](https://github.com/jprochazk/sprite-utils/blob/master/package.json)

<!-- toc -->

-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g sprite-utils
$ sprite-utils COMMAND
running command...
$ sprite-utils (-v|--version|version)
sprite-utils/0.1.0 win32-x64 node-v12.18.1
$ sprite-utils --help [COMMAND]
USAGE
  $ sprite-utils COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [sprite-utils](#sprite-utils)
- [Usage](#usage)
- [Commands](#commands)
  - [`sprite-utils create NAME`](#sprite-utils-create-name)
  - [`sprite-utils help [COMMAND]`](#sprite-utils-help-command)
  - [`sprite-utils update:static [FILE]`](#sprite-utils-updatestatic-file)
  - [`sprite-utils update:anim [NAME] [FILES]`](#sprite-utils-updateanim-name-files)

## `sprite-utils create NAME`

Create an empty sprite

```
USAGE
  $ sprite-utils create NAME

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ sprite-utils create test
```

_See code: [src\commands\create.ts](https://github.com/jprochazk/sprite-utils/blob/v0.1.0/src\commands\create.ts)_

## `sprite-utils help [COMMAND]`

display help for sprite-utils

```
USAGE
  $ sprite-utils help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_

## `sprite-utils update:static [FILE]`

Updates the sprite's static texture

```
USAGE
  $ sprite-utils update:static NAME FILE

ARGUMENTS
  NAME  Sprite name
  FILE  Path to a PNG file

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ sprite-utils update:static test image.png
```

_See code: [src\commands\update\anim.ts](https://github.com/jprochazk/sprite-utils/blob/v0.1.0/src\commands\update\anim.ts)_

## `sprite-utils update:anim [NAME] [FILES]`

Updates the sprite's animations

```
USAGE
  $ sprite-utils update:anim NAME FILES

ARGUMENTS
  NAME   Sprite name
  FILES  List of GIF file paths

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ sprite-utils update:anim test animA.gif animB.gif
```

_See code: [src\commands\update\static.ts](https://github.com/jprochazk/sprite-utils/blob/v0.1.0/src\commands\update\static.ts)_

<!-- commandsstop -->
