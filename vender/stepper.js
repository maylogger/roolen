(function() {
  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();;

  $.fn.extend({
    stepperize: function(options) {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (self.data('stepperize')) {
          return self.set(options);
        }
        self.data('max', parseFloat(self.text()));
        self.data('current', parseFloat(self.text()));
        self.data('min', 0);
        self.data('stepperize', true);
        if (options) {
          return self.data(options);
        }
      });
    },
    zero: function() {
      return this.each(function(i, t) {
        var digit, self;
        self = $(t);
        digit = self.data('digit') || 2;
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        self.data('current', 0);
        if (digit > 0) {
          return self.text(0..toFixed(digit));
        } else {
          return self.text(0);
        }
      });
    },
    setDigit: function(d) {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        return self.data('digit', d);
      });
    },
    setStep: function(d) {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        return self.data('step', d);
      });
    },
    setMax: function(d) {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        return self.data('max', d);
      });
    },
    setMin: function(d) {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        return self.data('min', d);
      });
    },
    set: function(options) {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        return self.data(options);
      });
    },
    play: function() {
      return this.each(function(i, t) {
        var go, self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        if (self.data('playing')) {
          return;
        }
        self.data('playing', true);
        go = function() {
          var current, digit, limit, max, min, step;
          step = self.data('step') || 0.1;
          current = self.data('current');
          max = self.data('max');
          min = self.data('min') || 0;
          if (self.data('digit') != null) {
            digit = self.data('digit');
          } else {
            digit = 2;
          }
          if (current + step > max || current + step < min) {
            limit = current + step > max ? max : min;
            if (digit > 0) {
              self.html(limit.toFixed(digit));
            } else {
              self.html(parseInt(limit));
            }
            self.data('playing', false);
            return;
          }
          if (!self.data('playing')) {
            return;
          }
          current += step;
          self.data('current', current);
          if (digit > 0) {
            self.html(current.toFixed(digit));
          } else {
            self.html(parseInt(current));
          }
          return requestAnimationFrame(go);
        };
        return go();
      });
    },
    pause: function() {
      return this.each(function(i, t) {
        var self;
        self = $(t);
        if (!self.data('stepperize')) {
          self.stepperize();
        }
        return self.data('playing', false);
      });
    }
  });

}).call(this);
