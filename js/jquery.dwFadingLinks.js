/* plugin */
jQuery.fn.dwFadingLinks = function(settings) {
  settings = jQuery.extend({
    color: '#ffffff',
    duration: 500
  }, settings);
  return this.each(function() {
    var original = $(this).css('color');
    $(this).mouseover(function() {
    	$(this).animate( { color: settings.color },settings.duration, function() {
    		});
    	});
    $(this).mouseout(function() { $(this).animate({ color: original },settings.duration); });
  });
};


