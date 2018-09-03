$(document).ready(function () {
    
    
/// navigation ///
    
    $('.nav-icon-container').click(function() {
        $('.bar-1').toggleClass('bar-close-1');
        $('.bar-2').toggleClass('bar-close-2');
        $('.nav-fadein-container').toggleClass('nav-fadein');
        
        $('.nav-list:nth-child(1)').toggleClass('a');
        $('.nav-list:nth-child(2)').toggleClass('b');
        $('.nav-list:nth-child(3)').toggleClass('c');

    });
    
    
/// slider function ///
 
    
    $('.buttonNext').click(function() {

        var currentImg1         = $('.active1');
        var currentafterImg1    = $('.after1');
        var nextImg1            = currentImg1.next();
        var afterImg1           = currentImg1.after();
            
        var currentText         = $('.activetext')
        var nextText            = currentText.next();
        
        var currentImg2         = $('.active2');
        var currentafterImg2    = $('.after2');
        var nextImg2            = currentImg2.next();
        var afterImg2           = currentImg2.after();
        
        
        if (nextImg1.length) {
            nextImg1.addClass('active1');
            afterImg1.addClass('after1');
            
            nextText.addClass('activetext')
            
            nextImg2.addClass('active2');
            afterImg2.addClass('after2');
        }
            
        else {
            $('.img-first1').first().addClass('active1');
            $('.img-first1').last().addClass('after1');
            
            $('.text').first().addClass('activetext');
            
            $('.img-first2').first().addClass('active2');
            $('.img-first2').last().addClass('after2');
        }
        
        currentImg1.removeClass('active1');
        currentafterImg1.removeClass('after1');
            
        currentText.removeClass('activetext');
        
        currentImg2.removeClass('active2');
        currentafterImg2.removeClass('after2');
    });
    
    
/// slider function go to project ///
    
    
    $('.sliderContainerText').click(function() {
        $('.sliderContainer2').addClass('sC2fadeout');
        $('.img-first1').addClass('sC1full');
    });
    
    
/// set Timeout to a Link ///

    $('.linktimeout').click(function(linktimeout) {
        linktimeout.preventDefault();
        setTimeout(function(url) { 
            window.location = url }, 3000, this.href);
    });
    
    
    /*
    
    // Page load start Animation
    
    $(function() {
        $('div').removeClass('inview-left inview-right inview-top');
        $('h1').removeClass('inview-text');
        $('.button').delay(800).fadeIn(400);
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
    */
});


