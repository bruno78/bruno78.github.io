/*
$.fn.extend({
  animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
      });
  }
});
$('body').animateCss('fadeInDown');
*/
$(function(){
  $('body').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('animated fadeInDown')
  });
});
