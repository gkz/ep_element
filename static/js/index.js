var $, acePostWriteDomLineHTML, aceAttribsToClasses, out$ = typeof exports != 'undefined' && exports || this;
$ = require('ep_etherpad-lite/static/js/rjquery').$;
out$.acePostWriteDomLineHTML = acePostWriteDomLineHTML = function(name, args){
  return $(args.node).find('.elem').each(function(){
    var cls, elem, ref$, c, i$, len$, that;
    cls = this.className.split(' ');
    elem = $("<" + (((ref$ = (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = cls).length; i$ < len$; ++i$) {
        c = ref$[i$];
        if (/^elem:/.exec(c)) {
          results$.push(c.slice(5));
        }
      }
      return results$;
    }())) != null ? ref$[0] : void 8) || 'span') + ">").html(this.innerHTML);
    for (i$ = 0, len$ = cls.length; i$ < len$; ++i$) {
      c = cls[i$];
      if (/^attr-/.exec(c)) {
        if (that = /^([a-z\-]+):(\S+)/.exec(c.slice(5))) {
          $(elem).attr(that[1], decodeURIComponent(that[2]));
        }
      }
    }
    $(this).replaceWith(elem);
  });
};
out$.aceAttribsToClasses = aceAttribsToClasses = function(name, arg$){
  var key;
  key = arg$.key;
  if (/^elem$|^elem|^attr-/.exec(key)) {
    return [key];
  } else {
    return [];
  }
};