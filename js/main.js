$(document).ready(function () {

    $(function() {
        $('.inview-left').removeClass('inview-left');
        $('.inview-top').removeClass('inview-top');
    });
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 10) {
          $(".panel-2").addClass("test");
        } else {
          $(".panel-2").removeClass("test");
        }
    });
});


