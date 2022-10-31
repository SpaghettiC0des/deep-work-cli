deep-work-cli
=================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/deep-work-cli.svg)](https://npmjs.org/package/deep-work-cli)
[![Downloads/week](https://img.shields.io/npm/dw/deep-work-cli.svg)](https://npmjs.org/package/deep-work-cli)
[![License](https://img.shields.io/npm/l/deep-work-cli.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g deep-work-cli
$ deep-work COMMAND
running command...
$ deep-work (--version)
deep-work-cli/0.0.3-4 darwin-arm64 node-v16.15.1
$ deep-work --help [COMMAND]
USAGE
  $ deep-work COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`deep-work block URL`](#deep-work-block-url)
* [`deep-work help [COMMAND]`](#deep-work-help-command)
* [`deep-work plugins`](#deep-work-plugins)
* [`deep-work plugins:install PLUGIN...`](#deep-work-pluginsinstall-plugin)
* [`deep-work plugins:inspect PLUGIN...`](#deep-work-pluginsinspect-plugin)
* [`deep-work plugins:install PLUGIN...`](#deep-work-pluginsinstall-plugin-1)
* [`deep-work plugins:link PLUGIN`](#deep-work-pluginslink-plugin)
* [`deep-work plugins:uninstall PLUGIN...`](#deep-work-pluginsuninstall-plugin)
* [`deep-work plugins:uninstall PLUGIN...`](#deep-work-pluginsuninstall-plugin-1)
* [`deep-work plugins:uninstall PLUGIN...`](#deep-work-pluginsuninstall-plugin-2)
* [`deep-work plugins update`](#deep-work-plugins-update)
* [`deep-work unblock [URL]`](#deep-work-unblock-url)

## `deep-work block URL`

adds a website to the block list

```
USAGE
  $ deep-work block [URL]

DESCRIPTION
  adds a website to the block list

EXAMPLES
  $ deep-work block www.google.com
```

_See code: [dist/commands/block.ts](https://github.com/karlmarxlopez/deep-work-cli/blob/v0.0.3-4/dist/commands/block.ts)_

## `deep-work help [COMMAND]`

Display help for deep-work.

```
USAGE
  $ deep-work help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for deep-work.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.17/src/commands/help.ts)_

## `deep-work plugins`

List installed plugins.

```
USAGE
  $ deep-work plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ deep-work plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.6/src/commands/plugins/index.ts)_

## `deep-work plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ deep-work plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ deep-work plugins add

EXAMPLES
  $ deep-work plugins:install myplugin 

  $ deep-work plugins:install https://github.com/someuser/someplugin

  $ deep-work plugins:install someuser/someplugin
```

## `deep-work plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ deep-work plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ deep-work plugins:inspect myplugin
```

## `deep-work plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ deep-work plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ deep-work plugins add

EXAMPLES
  $ deep-work plugins:install myplugin 

  $ deep-work plugins:install https://github.com/someuser/someplugin

  $ deep-work plugins:install someuser/someplugin
```

## `deep-work plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ deep-work plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ deep-work plugins:link myplugin
```

## `deep-work plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ deep-work plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ deep-work plugins unlink
  $ deep-work plugins remove
```

## `deep-work plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ deep-work plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ deep-work plugins unlink
  $ deep-work plugins remove
```

## `deep-work plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ deep-work plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ deep-work plugins unlink
  $ deep-work plugins remove
```

## `deep-work plugins update`

Update installed plugins.

```
USAGE
  $ deep-work plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `deep-work unblock [URL]`

describe the command here

```
USAGE
  $ deep-work unblock [URL] [-a]

ARGUMENTS
  URL  the URL you want to remove

FLAGS
  -a, --all  remove all blocked websites

DESCRIPTION
  describe the command here

EXAMPLES
  $ deep-work unblock
```

_See code: [dist/commands/unblock.ts](https://github.com/karlmarxlopez/deep-work-cli/blob/v0.0.3-4/dist/commands/unblock.ts)_
<!-- commandsstop -->
