$(document).ready(function() {

    //HTML objects
    var $scrollToTopBtn;

    var setHTMLObjects = function(){
        $scrollToTopBtn = $(".scrollToTopBtn");
    };

    var setEvents = function(){
        $scrollToTopBtn.on("click", function(){
            scrollUp();
        });
    };

    //init
    var init = function(){
        setHTMLObjects();
        setEvents();
    }();//end init

    //SCROLL TO TOP
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTopBtn').fadeIn();
        } else {
            $('.scrollToTopBtn').fadeOut();
        }
    });

    //Click event to scroll to top
    function scrollUp(){
        $("html, body").animate({
            scrollTop : 0},800);
        return false;
    }//end SCROLL TO TOP
});
