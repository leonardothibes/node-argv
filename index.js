
/*!
 * node-argv
 * Copyright(c) 2014 Gabriele Di Stefano <gabriele.ds+node@gmail.com>
 * MIT Licensed
 */

/**
 * Expose
 */

module.exports = parse;

/**
 * Variables
 */

var rSplit = /"(.+?)"|'(.+?)'|\s*(-*\w+)\s*|\s*=?\s*/;

/**
 * Parse a string.
 *
 * @param {line} String to parse
 * @return {Object}
 * @api public
 */

function parse (argv, opts) {
  if ('string' === typeof argv) argv = argv.split(rSplit).filter(exclude);
  if (!opts) opts = {};
  // loop here
  return argv;
  function exclude (s) {
    return s && '' !== s;
  }
}