$(document).ready(function() {

            //-----------------------

            //HTML objects
            var $firstInfo;
            var $secondInfo;
            var $scrollToTopBtn;

            var setHTMLObjects = function(){
                $firstInfo = $(".firstInfo");
                $secondInfo = $(".secondInfo");
                $scrollToTopBtn = $(".scrollToTopBtn");
            };

            var setEvents = function(){
                $firstInfo.on("click", function(){
                    scrollDown();
                });

                $scrollToTopBtn.on("click", function(){
                    scrollUp();
                });
            };

            //init
            var init = function(){

                setHTMLObjects();
                setEvents();


            }();//end init

            //SCROLL DOWN
            function scrollDown() {

                $("html, body").animate(
                    {
                        scrollTop: $(".secondInfo")
                            .css(
                                    {
                                        "height": "1000px"
                                    }
                                )
                            .offset().top //Show top of .secondInfo
                    },
                    'slow')
            }//end SCROLL DOWN

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
            }//end SCROLL TO TOP  -----------------------

        });
