define("#base/0.9.5/aspect",[],function(a,b){function c(a,b,c,f){var g=d(this,b);return g.__isAspected||e.call(this,b),this.on(a+":"+b,c,f)}function d(a,b){var c=a[b];if(!c)throw"Invalid method name: "+b;return c}function e(a){var b=this[a];this[a]=function(){var c=Array.prototype.slice.call(arguments),d=["before:"+a].concat(c);this.trigger.apply(this,d);var e=b.apply(this,arguments);return this.trigger("after:"+a,e),e},this[a].__isAspected=!0}b.before=function(a,b,d){return c.call(this,"before",a,b,d)},b.after=function(a,b,d){return c.call(this,"after",a,b,d)}});