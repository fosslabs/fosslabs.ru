$(document).ready(function(){
    var TIMEOUT = 9000;

    var currentSlideNum = 0;
    var slides = $('#caroussel .slide');
    var links = $('#caroussel .links li')
    
    var nextSlide = function() {
        goToSlide(currentSlideNum+1> slides.size()-1 ? 0 : currentSlideNum+1);
    };

    var goToSlide = function(slideNum) {
            slides.eq(currentSlideNum = slideNum).addClass('active').siblings().removeClass('active');
         links.eq(currentSlideNum = slideNum).addClass('selected').siblings().removeClass('selected');
          };

    goToSlide(0)

    var lastHumanNav = 0;
    
    $('#caroussel .links a').each(function(i,e){
        $(e).click(function(){
            lastHumanNav = new Date().getTime();
            goToSlide(i)
        });
        
    });

    setInterval(function() {
        if(new Date().getTime() - lastHumanNav > TIMEOUT) /* human interact is prioritary */
            nextSlide();
        }, TIMEOUT);
});