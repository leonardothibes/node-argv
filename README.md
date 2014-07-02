# node-argv

Parse argv as a String

## Usage

```javascript
  var argv = require('node-argv');

  argv('my command --beep true -c "value value"');
  // -> ['my', 'command', '--beep', 'true', '-c', 'value value']
```