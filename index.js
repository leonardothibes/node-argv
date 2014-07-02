
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
 * Parse arguments.
 *
 * @param {line} String/Array to parse
 * @return {Object}
 * @api public
 */

function parse (argv, opts) {
  if ('string' === typeof argv) argv = argv.split(rSplit).filter(ignore);
  if (!opts) opts = {};
  opts[don] = true;
  var parsed = parseArray(argv, opts);
  opts[don] = false;
  var result = {
    options: parsed,
    commands: parsed[din],
    input: argv
  },
  through = parsed[don].length ? parseArray(parsed[don], opts) : null;
  if (through) {
    result.through = {
      options: through,
      commands: through[din]
    };
    delete through[din];
    delete parsed[don];
  }
  delete parsed[din];
  return result;
  function ignore (s) {
    return s && '' !== s;
  }
}