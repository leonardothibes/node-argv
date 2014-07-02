
/*!
 * node-argv
 * Copyright(c) 2014 Gabriele Di Stefano <gabriele.ds+node@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

var parseArray = require('minimist');

/**
 * Expose
 */

module.exports = parse;

/**
 * Variables
 */

var rSplit = /"(.+?)"|'(.+?)'|\s*(-*\w+)\s*/
  , din = '_'
  , don = '--';

/**
 * Parse a string.
 *
 * @param {line} String to parse
 * @return {Object}
 * @api public
 */

function parse (argv, opts) {
  if ('string' === typeof argv) argv = argv.split(rSplit).filter(ignore);
  if (!opts) opts = {};
  opts[don] = true;
  var parsed = parseArray(argv, opts);
  opts[don] = false;
  var through = parsed[don].length ? parseArray(parsed[don], opts) : null;
  var result = {
    options: parsed,
    commands: parsed[din],
    input: argv
  };
  if (through) {
    result.through = {
      options: through,
      commands: through[din]
    };
    delete through[din];
    delete parsed[don];
  }
  delete parsed[din];
  return argv;
  function ignore (s) {
    return s && '' !== s;
  }
}