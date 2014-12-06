(function($, window, document) {
  $.fn['hasClassSVG'] = function(className) {
    return new RegExp("(\\s|^)" + className + "(\\s|$)").test(this[0].getAttribute('class'));
  };
  $.fn['addClassSVG'] = function(className) {
    return this.each(function() {
      if (!$(this).hasClassSVG(className)) {
        return this.setAttribute('class', "" + (this.getAttribute('class') != null ? this.getAttribute('class') : '') + " " + className);
      }
    });
  };
  $.fn['rmClassSVG'] = function(className) {
    return this.each(function() {
      var removedClass;
      removedClass = this.getAttribute('class').replace(new RegExp("(\\s|^)" + className + "(\\s|$)", 'g'), '$2');
      if ($(this).hasClassSVG(className)) {
        return this.setAttribute('class', removedClass);
      }
    });
  };
  return $.fn['toggleClassSVG'] = function(className) {
    return this.each(function() {
      if ($(this).hasClassSVG(className)) {
        return $(this).rmClassSVG(className);
      } else {
        return $(this).addClassSVG(className);
      }
    });
  };
})(jQuery, window, document);
