'use strict';
var Cow;

Cow = function(name) {
  this.name = name || "Gauri";
};

module.exports= Cow;

Cow.prototype = {
  greets: function(target) {
    if (!target) {
      console.error('missing target');
      throw new Error('missing target');
    }
    var message=this.name + " greets " + target;
    console.log(message);
    return message;
  },
  lateGreets: function(target, callback) {
    return setTimeout(function(self) {
      var err;
      try {
        return callback(null, self.greets(target));
      } catch (_error) {
        err = _error;
        return callback(err);
      }
    }, 1000, this);
  }
};