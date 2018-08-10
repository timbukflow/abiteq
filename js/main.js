$(document).ready(function () {
    
    // Page load start Animation
    
    $(function() {
        $('div').removeClass('inview-left inview-right inview-top');
        $('h1').removeClass('inview-text');
        $('.button').delay(2000).fadeIn(400);
        $('.contante').addClass('contanteFade');
    });
    
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('h1').addClass('inview-text');
        } else {
            $('h1').removeClass('inview-text');
        }
    });
    
    $('.button').click(function() {
        $('.img-container-right').addClass('img-container-zero');
        $('.img-container-left').addClass('img-container-full');
            window.setTimeout(function(){
                window.location.replace('projekt.php');
            }, 2000);
    });
    
    $(function() {
        $('.contante').addClass('contanteFade');
    });
    
});


