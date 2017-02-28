$(document).ready(function() {

    //HTML objects
    var $scrollToTopBtn;

    //Set HTML objects
    var setHTMLObjects = function(){
        $scrollToTopBtn = $("#scrollToTopBtn");
    };//end Set HTML objects

    //Set events
    var setEvents = function(){
        $scrollToTopBtn.on("click", function(){
            scrollUp();
        });
    };//end Set events

    //init
    var init = function(){
        //--------GET COMPONENTS
        $("#header").load("components/header.html");
        $("#navigation").load("components/navigation.html");
        $("#calender").load("components/calender.html");
        //$("#calenderFlexbox").load("components/calender-flexbox.html");
        $("#list").load("components/list.html");
        //--------end GET COMPONENTS

        setHTMLObjects();
        setEvents();
    }();//end init

    //--------SCROLL TO TOP
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
    }//--------end SCROLL TO TOP
});
