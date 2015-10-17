var Emblem = require('emblem');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  var compiled = null;
  compiled = Emblem.default.compile(source);
  return compiled;
}
