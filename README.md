# node-argv

Parse argv as a String, then feed [minimist](https://github.com/substack/minimist) and expose the interface: 

```javascript
{
  options: {},
  commands: [],
  through: { // only if '--' is given
    options: {},
    commands: []
  },
  input: [] // parsed argv
}
```

## Parse String

```javascript
var argv = require('node-argv');

argv('first command --hello true -c "value" -- second command -b', {}); // minimist options
// return
{
  options: {
    hello: true,
    c: 'value'
  },
  commands: ['first', 'command'],
  through: {
    options: {
      b: true
    },
    commands: ['second', 'command']
  },
  input: ['first', 'command', '--hello', 'true', '-c', 'value', '--', 'second', 'command', '-b']
}
```

# Parse Array

This module also parses an Array directly using `minimist` but exposing the above interface

```javascript
var argv = require('node-argv');

argv(process.argv.slice(2), {});
```

# install

With [npm](https://npmjs.org) do:

```
npm install node-argv
```

# license

MIT