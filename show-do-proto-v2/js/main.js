$(function() {

    //HTML objects
    var $gitCal;
    var $gitList;

    var $JStrack1;
    var $JSList1;

    var $scrollToTopBtn;
    var $prevBtn;
    var $thisWeekBtn;
    var $nextBtn;
    var $infoTest;
    //var $listContent;

    var events = [];
    var index = [1];

    //init
    var init = function(){

        //Set HTML objects
        var setHTMLObjects = function(){
            $gitCal = $("#gitCal");
            $gitList = $("#gitList");
            $JStrack1 = $(".JStrack1");
            $JSList1 = $("#JSList1");
            $scrollToTopBtn = $("#scrollToTopBtn");
            $prevBtn = $("#prevBtn");
            $thisWeekBtn = $("#thisWeekBtn");
            $nextBtn = $("#nextBtn");
            $infoTest = $("#infoTest").get(0);
            //$listContent = $("#listContent");
        }();//end Set HTML objects

        //Set events
        var setEvents = function(){
            //   $JStrack1.on("click", function(){
            //     scrollToMoreInfo();
            //    });
            $scrollToTopBtn.on("click", function(){
                scrollUp();
            });
        }();//end Set events

        //initPage
        var initPage = function(){
            getEventJSON();
        }();//end initPage
    }();//end init

    function getEventJSON(){

        //var events = [];
        //var index = [1];

        $.ajax(
            {
                type: "GET",
                dataType: "json",
                url: 'info.json',

                success: function(json){
                    //alert("JSON er på plass!");
                    events = json[index].events;
                    showInfo(json);
                    showEventList(json);

                    $prevBtn.on("click", function(){
                        //CALENDER
                        $(".JStrack1").append().empty();
                        $(".JStrack2").append().empty();
                        $(".JStrack3").append().empty();
                        $(".JStrack4").append().empty();
                        $(".JStrack5").append().empty();
                        $(".JStrack6").append().empty();
                        $(".JStrack7").append().empty();
                        $(".JStrack8").append().empty();

                        var prevIndex = [--index];
                        events = json[prevIndex].events;
                        showInfo(json[prevIndex]);

                        //LIST
                        $("#listTitle1").append().empty();
                        $("#listImg1").append().empty();
                        $("#listExpect1").append().empty();
                        $("#listPrereq1").append().empty();
                        $("#listWhoJoin1").append().empty();
                        $("#listnumberOfPartic1").append().empty();
                        $("#listHost1").append().empty();
                        $("#listDuration1").append().empty();
                        $("#listType1").append().empty();
                        $("#listElseText1").append().empty();
                        $("#listStartTime1").append().empty();
                        $("#listRoom1").append().empty();

                        $("#listTitle2").append().empty();
                        $("#listImg2").append().empty();
                        $("#listExpect2").append().empty();
                        $("#listPrereq2").append().empty();
                        $("#listWhoJoin2").append().empty();
                        $("#listnumberOfPartic2").append().empty();
                        $("#listHost2").append().empty();
                        $("#listDuration2").append().empty();
                        $("#listType2").append().empty();
                        $("#listElseText2").append().empty();
                        $("#listStartTime2").append().empty();
                        $("#listRoom2").append().empty();

                        $("#listTitle3").append().empty();
                        $("#listImg3").append().empty();
                        $("#listExpect3").append().empty();
                        $("#listPrereq3").append().empty();
                        $("#listWhoJoin3").append().empty();
                        $("#listnumberOfPartic3").append().empty();
                        $("#listHost3").append().empty();
                        $("#listDuration3").append().empty();
                        $("#listType3").append().empty();
                        $("#listElseText3").append().empty();
                        $("#listStartTime3").append().empty();
                        $("#listRoom3").append().empty();

                        $("#listTitle4").append().empty();
                        $("#listImg4").append().empty();
                        $("#listExpect4").append().empty();
                        $("#listPrereq4").append().empty();
                        $("#listWhoJoin4").append().empty();
                        $("#listnumberOfPartic4").append().empty();
                        $("#listHost4").append().empty();
                        $("#listDuration4").append().empty();
                        $("#listType4").append().empty();
                        $("#listElseText4").append().empty();
                        $("#listStartTime4").append().empty();
                        $("#listRoom4").append().empty();

                        $("#listTitle5").append().empty();
                        $("#listImg5").append().empty();
                        $("#listExpect5").append().empty();
                        $("#listPrereq5").append().empty();
                        $("#listWhoJoin5").append().empty();
                        $("#listnumberOfPartic5").append().empty();
                        $("#listHost5").append().empty();
                        $("#listDuration5").append().empty();
                        $("#listType5").append().empty();
                        $("#listElseText5").append().empty();
                        $("#listStartTime5").append().empty();
                        $("#listRoom5").append().empty();

                        $("#listTitle6").append().empty();
                        $("#listImg6").append().empty();
                        $("#listExpect6").append().empty();
                        $("#listPrereq6").append().empty();
                        $("#listWhoJoin6").append().empty();
                        $("#listnumberOfPartic6").append().empty();
                        $("#listHost6").append().empty();
                        $("#listDuration6").append().empty();
                        $("#listType6").append().empty();
                        $("#listElseText6").append().empty();
                        $("#listStartTime6").append().empty();
                        $("#listRoom6").append().empty();

                        $("#listTitle7").append().empty();
                        $("#listImg7").append().empty();
                        $("#listExpect7").append().empty();
                        $("#listPrereq7").append().empty();
                        $("#listWhoJoin7").append().empty();
                        $("#listnumberOfPartic7").append().empty();
                        $("#listHost7").append().empty();
                        $("#listDuration7").append().empty();
                        $("#listType7").append().empty();
                        $("#listElseText7").append().empty();
                        $("#listStartTime7").append().empty();
                        $("#listRoom7").append().empty();

                        $("#listTitle8").append().empty();
                        $("#listImg8").append().empty();
                        $("#listExpect8").append().empty();
                        $("#listPrereq8").append().empty();
                        $("#listWhoJoin8").append().empty();
                        $("#listnumberOfPartic8").append().empty();
                        $("#listHost8").append().empty();
                        $("#listDuration8").append().empty();
                        $("#listType8").append().empty();
                        $("#listElseText8").append().empty();
                        $("#listStartTime8").append().empty();
                        $("#listRoom8").append().empty();

                        showEventList(json[prevIndex]);
                    });

                    $thisWeekBtn.on("click", function(){
                        //CALENDER
                        $(".JStrack1").append().empty();
                        $(".JStrack2").append().empty();
                        $(".JStrack3").append().empty();
                        $(".JStrack4").append().empty();
                        $(".JStrack5").append().empty();
                        $(".JStrack6").append().empty();
                        $(".JStrack7").append().empty();
                        $(".JStrack8").append().empty();

                        events = json[1].events;
                        showInfo(json[index]);

                        //LIST
                        $("#listTitle1").append().empty();
                        $("#listImg1").append().empty();
                        $("#listExpect1").append().empty();
                        $("#listPrereq1").append().empty();
                        $("#listWhoJoin1").append().empty();
                        $("#listnumberOfPartic1").append().empty();
                        $("#listHost1").append().empty();
                        $("#listDuration1").append().empty();
                        $("#listType1").append().empty();
                        $("#listElseText1").append().empty();
                        $("#listStartTime1").append().empty();
                        $("#listRoom1").append().empty();

                        $("#listTitle2").append().empty();
                        $("#listImg2").append().empty();
                        $("#listExpect2").append().empty();
                        $("#listPrereq2").append().empty();
                        $("#listWhoJoin2").append().empty();
                        $("#listnumberOfPartic2").append().empty();
                        $("#listHost2").append().empty();
                        $("#listDuration2").append().empty();
                        $("#listType2").append().empty();
                        $("#listElseText2").append().empty();
                        $("#listStartTime2").append().empty();
                        $("#listRoom2").append().empty();

                        $("#listTitle3").append().empty();
                        $("#listImg3").append().empty();
                        $("#listExpect3").append().empty();
                        $("#listPrereq3").append().empty();
                        $("#listWhoJoin3").append().empty();
                        $("#listnumberOfPartic3").append().empty();
                        $("#listHost3").append().empty();
                        $("#listDuration3").append().empty();
                        $("#listType3").append().empty();
                        $("#listElseText3").append().empty();
                        $("#listStartTime3").append().empty();
                        $("#listRoom3").append().empty();

                        $("#listTitle4").append().empty();
                        $("#listImg4").append().empty();
                        $("#listExpect4").append().empty();
                        $("#listPrereq4").append().empty();
                        $("#listWhoJoin4").append().empty();
                        $("#listnumberOfPartic4").append().empty();
                        $("#listHost4").append().empty();
                        $("#listDuration4").append().empty();
                        $("#listType4").append().empty();
                        $("#listElseText4").append().empty();
                        $("#listStartTime4").append().empty();
                        $("#listRoom4").append().empty();

                        $("#listTitle5").append().empty();
                        $("#listImg5").append().empty();
                        $("#listExpect5").append().empty();
                        $("#listPrereq5").append().empty();
                        $("#listWhoJoin5").append().empty();
                        $("#listnumberOfPartic5").append().empty();
                        $("#listHost5").append().empty();
                        $("#listDuration5").append().empty();
                        $("#listType5").append().empty();
                        $("#listElseText5").append().empty();
                        $("#listStartTime5").append().empty();
                        $("#listRoom5").append().empty();

                        $("#listTitle6").append().empty();
                        $("#listImg6").append().empty();
                        $("#listExpect6").append().empty();
                        $("#listPrereq6").append().empty();
                        $("#listWhoJoin6").append().empty();
                        $("#listnumberOfPartic6").append().empty();
                        $("#listHost6").append().empty();
                        $("#listDuration6").append().empty();
                        $("#listType6").append().empty();
                        $("#listElseText6").append().empty();
                        $("#listStartTime6").append().empty();
                        $("#listRoom6").append().empty();

                        $("#listTitle7").append().empty();
                        $("#listImg7").append().empty();
                        $("#listExpect7").append().empty();
                        $("#listPrereq7").append().empty();
                        $("#listWhoJoin7").append().empty();
                        $("#listnumberOfPartic7").append().empty();
                        $("#listHost7").append().empty();
                        $("#listDuration7").append().empty();
                        $("#listType7").append().empty();
                        $("#listElseText7").append().empty();
                        $("#listStartTime7").append().empty();
                        $("#listRoom7").append().empty();

                        $("#listTitle8").append().empty();
                        $("#listImg8").append().empty();
                        $("#listExpect8").append().empty();
                        $("#listPrereq8").append().empty();
                        $("#listWhoJoin8").append().empty();
                        $("#listnumberOfPartic8").append().empty();
                        $("#listHost8").append().empty();
                        $("#listDuration8").append().empty();
                        $("#listType8").append().empty();
                        $("#listElseText8").append().empty();
                        $("#listStartTime8").append().empty();
                        $("#listRoom8").append().empty();

                        showEventList(json[index]);
                    });


                    $nextBtn.on("click", function(){
                        //CALENDER
                        $(".JStrack1").append().empty();
                        $(".JStrack2").append().empty();
                        $(".JStrack3").append().empty();
                        $(".JStrack4").append().empty();
                        $(".JStrack5").append().empty();
                        $(".JStrack6").append().empty();
                        $(".JStrack7").append().empty();
                        $(".JStrack8").append().empty();

                        var nextIndex = [++index];
                        events = json[nextIndex].events;
                        showInfo(json[nextIndex]);

                        //LIST
                        $("#listTitle1").append().empty();
                        $("#listImg1").append().empty();
                        $("#listExpect1").append().empty();
                        $("#listPrereq1").append().empty();
                        $("#listWhoJoin1").append().empty();
                        $("#listnumberOfPartic1").append().empty();
                        $("#listHost1").append().empty();
                        $("#listDuration1").append().empty();
                        $("#listType1").append().empty();
                        $("#listElseText1").append().empty();
                        $("#listStartTime1").append().empty();
                        $("#listRoom1").append().empty();

                        $("#listTitle2").append().empty();
                        $("#listImg2").append().empty();
                        $("#listExpect2").append().empty();
                        $("#listPrereq2").append().empty();
                        $("#listWhoJoin2").append().empty();
                        $("#listnumberOfPartic2").append().empty();
                        $("#listHost2").append().empty();
                        $("#listDuration2").append().empty();
                        $("#listType2").append().empty();
                        $("#listElseText2").append().empty();
                        $("#listStartTime2").append().empty();
                        $("#listRoom2").append().empty();

                        $("#listTitle3").append().empty();
                        $("#listImg3").append().empty();
                        $("#listExpect3").append().empty();
                        $("#listPrereq3").append().empty();
                        $("#listWhoJoin3").append().empty();
                        $("#listnumberOfPartic3").append().empty();
                        $("#listHost3").append().empty();
                        $("#listDuration3").append().empty();
                        $("#listType3").append().empty();
                        $("#listElseText3").append().empty();
                        $("#listStartTime3").append().empty();
                        $("#listRoom3").append().empty();

                        $("#listTitle4").append().empty();
                        $("#listImg4").append().empty();
                        $("#listExpect4").append().empty();
                        $("#listPrereq4").append().empty();
                        $("#listWhoJoin4").append().empty();
                        $("#listnumberOfPartic4").append().empty();
                        $("#listHost4").append().empty();
                        $("#listDuration4").append().empty();
                        $("#listType4").append().empty();
                        $("#listElseText4").append().empty();
                        $("#listStartTime4").append().empty();
                        $("#listRoom4").append().empty();

                        $("#listTitle5").append().empty();
                        $("#listImg5").append().empty();
                        $("#listExpect5").append().empty();
                        $("#listPrereq5").append().empty();
                        $("#listWhoJoin5").append().empty();
                        $("#listnumberOfPartic5").append().empty();
                        $("#listHost5").append().empty();
                        $("#listDuration5").append().empty();
                        $("#listType5").append().empty();
                        $("#listElseText5").append().empty();
                        $("#listStartTime5").append().empty();
                        $("#listRoom5").append().empty();

                        $("#listTitle6").append().empty();
                        $("#listImg6").append().empty();
                        $("#listExpect6").append().empty();
                        $("#listPrereq6").append().empty();
                        $("#listWhoJoin6").append().empty();
                        $("#listnumberOfPartic6").append().empty();
                        $("#listHost6").append().empty();
                        $("#listDuration6").append().empty();
                        $("#listType6").append().empty();
                        $("#listElseText6").append().empty();
                        $("#listStartTime6").append().empty();
                        $("#listRoom6").append().empty();

                        $("#listTitle7").append().empty();
                        $("#listImg7").append().empty();
                        $("#listExpect7").append().empty();
                        $("#listPrereq7").append().empty();
                        $("#listWhoJoin7").append().empty();
                        $("#listnumberOfPartic7").append().empty();
                        $("#listHost7").append().empty();
                        $("#listDuration7").append().empty();
                        $("#listType7").append().empty();
                        $("#listElseText7").append().empty();
                        $("#listStartTime7").append().empty();
                        $("#listRoom7").append().empty();

                        $("#listTitle8").append().empty();
                        $("#listImg8").append().empty();
                        $("#listExpect8").append().empty();
                        $("#listPrereq8").append().empty();
                        $("#listWhoJoin8").append().empty();
                        $("#listnumberOfPartic8").append().empty();
                        $("#listHost8").append().empty();
                        $("#listDuration8").append().empty();
                        $("#listType8").append().empty();
                        $("#listElseText8").append().empty();
                        $("#listStartTime8").append().empty();
                        $("#listRoom8").append().empty();

                        showEventList(json[nextIndex]);

                    });
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    //console.error("Status: " + textStatus + " , Error: " + errorThrown);
                }
            }
        );//end ajax call
    };//end getEventJSON

    function showInfo(json){
        $(".JStrack1")
            .append(("<a href='#JsScroll1' class='scrollToStyle'>") + "<h4>" + events[0].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[0].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0].duration + ("</div>") + ("</a>"));
        $(".JStrack2")
            .append(("<a href='#JsScroll2' class='scrollToStyle'>") + "<h4>" + events[1].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[1].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1].duration + ("</div>") + ("</a>"));
        $(".JStrack3")
            .append(("<a href='#JsScroll3' class='scrollToStyle'>") + "<h4>" + events[2].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>") + ("</a>"));
        $(".JStrack4")
            .append(("<a href='#JsScroll4' class='scrollToStyle'>") + "<h4>" + events[3].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>") + ("</a>"));
        $(".JStrack5")
            .append(("<a href='#JsScroll5' class='scrollToStyle'>") + "<h4>" + events[4].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>") + ("</a>"));
        $(".JStrack6")
            .append(("<a href='#JsScroll6' class='scrollToStyle'>") + "<h4>" + events[5].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>") + ("</a>"));
        $(".JStrack7")
            .append(("<a href='#JsScroll7' class='scrollToStyle'>") + "<h4>" + events[6].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>") + ("</a>"));
        $(".JStrack8")
            .append(("<a href='#JsScroll8' class='scrollToStyle'>") + "<h4>" + events[7].title + "</h4>" + ("<div class='rooms '><i class='fa fa-map-marker' aria-hidden='true'></i> ") + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>") + ("</a>"));
    };

    //LIST
    function showEventList(json){
        //console.log(json[index]);

        //EVENT #1
        $("#listTitle1").append(events[0].title);
        $("#listImg1").append(events[0].image);
        $("#listExpect1").append(events[0].expect);
        $("#listPrereq1").append(events[0].prereq);
        $("#listWhoJoin1").append(events[0].whoJoin);
        $("#listnumberOfPartic1").append(events[0].numberOfPartic);
        $("#listHost1").append("<strong>Host: </strong>" +events[0].host);
        $("#listDuration1").append(events[0].duration);
        $("#listType1").append(events[0].type);
        $("#listElseText1").append("<strong>Other info: </strong>" + events[0].else);
        $("#listStartTime1").append("<strong>Starts: </strong>" + events[0].startTime);
        $("#listRoom1").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[0].room);

        //EVENT #2
        $("#listTitle2").append(events[1].title);
        $("#listImg2").append(events[1].image);
        $("#listExpect2").append(events[1].expect);
        $("#listPrereq2").append(events[1].prereq);
        $("#listWhoJoin2").append(events[1].whoJoin);
        $("#listnumberOfPartic2").append(events[1].numberOfPartic);
        $("#listHost2").append("<strong>Host: </strong>" +events[1].host);
        $("#listDuration2").append(events[1].duration);
        $("#listType2").append(events[1].type);
        $("#listElseText2").append("<strong>Other info: </strong>" + events[1].else);
        $("#listStartTime2").append("<strong>Starts: </strong>" + events[1].startTime);
        $("#listRoom2").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[1].room);

        //EVENT #3
        $("#listTitle3").append(events[2].title);
        $("#listImg3").append(events[2].image);
        $("#listExpect3").append(events[2].expect);
        $("#listPrereq3").append(events[2].prereq);
        $("#listWhoJoin3").append(events[2].whoJoin);
        $("#listnumberOfPartic3").append(events[2].numberOfPartic);
        $("#listHost3").append("<strong>Host: </strong>" +events[2].host);
        $("#listDuration3").append(events[2].duration);
        $("#listType3").append(events[2].type);
        $("#listElseText3").append("<strong>Other info: </strong>" + events[2].else);
        $("#listStartTime3").append("<strong>Starts: </strong>" + events[2].startTime);
        $("#listRoom3").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[2].room);

        //EVENT #4
        $("#listTitle4").append(events[3].title);
        $("#listImg4").append(events[3].image);
        $("#listExpect4").append(events[3].expect);
        $("#listPrereq4").append(events[3].prereq);
        $("#listWhoJoin4").append(events[3].whoJoin);
        $("#listnumberOfPartic4").append(events[3].numberOfPartic);
        $("#listHost4").append("<strong>Host: </strong>" +events[3].host);
        $("#listDuration4").append(events[3].duration);
        $("#listType4").append(events[3].type);
        $("#listElseText4").append("<strong>Other info: </strong>" + events[3].else);
        $("#listStartTime4").append("<strong>Starts: </strong>" + events[3].startTime);
        $("#listRoom4").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[3].room);

        //EVENT #5
        $("#listTitle5").append(events[4].title);
        $("#listImg5").append(events[4].image);
        $("#listExpect5").append(events[4].expect);
        $("#listPrereq5").append(events[4].prereq);
        $("#listWhoJoin5").append(events[4].whoJoin);
        $("#listnumberOfPartic5").append(events[4].numberOfPartic);
        $("#listHost5").append("<strong>Host: </strong>" +events[4].host);
        $("#listDuration5").append(events[4].duration);
        $("#listType5").append(events[4].type);
        $("#listElseText5").append("<strong>Other info: </strong>" + events[4].else);
        $("#listStartTime5").append("<strong>Starts: </strong>" + events[4].startTime);
        $("#listRoom5").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[4].room);

        //EVENT #6
        $("#listTitle6").append(events[5].title);
        $("#listImg6").append(events[5].image);
        $("#listExpect6").append(events[5].expect);
        $("#listPrereq6").append(events[5].prereq);
        $("#listWhoJoin6").append(events[5].whoJoin);
        $("#listnumberOfPartic6").append(events[5].numberOfPartic);
        $("#listHost6").append("<strong>Host: </strong>" +events[5].host);
        $("#listDuration6").append(events[5].duration);
        $("#listType6").append(events[5].type);
        $("#listElseText6").append("<strong>Other info: </strong>" + events[5].else);
        $("#listStartTime6").append("<strong>Starts: </strong>" + events[5].startTime);
        $("#listRoom6").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[5].room);

        //EVENT #7
        $("#listTitle7").append(events[6].title);
        $("#listImg7").append(events[6].image);
        $("#listExpect7").append(events[6].expect);
        $("#listPrereq7").append(events[6].prereq);
        $("#listWhoJoin7").append(events[6].whoJoin);
        $("#listnumberOfPartic7").append(events[6].numberOfPartic);
        $("#listHost7").append("<strong>Host: </strong>" +events[6].host);
        $("#listDuration7").append(events[6].duration);
        $("#listType7").append(events[6].type);
        $("#listElseText7").append("<strong>Other info: </strong>" + events[6].else);
        $("#listStartTime7").append("<strong>Starts: </strong>" + events[6].startTime);
        $("#listRoom7").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[6].room);

        //EVENT #8
        $("#listTitle8").append(events[7].title);
        $("#listImg8").append(events[7].image);
        $("#listExpect8").append(events[7].expect);
        $("#listPrereq8").append(events[7].prereq);
        $("#listWhoJoin8").append(events[7].whoJoin);
        $("#listnumberOfPartic8").append(events[7].numberOfPartic);
        $("#listHost8").append("<strong>Host: </strong>" +events[7].host);
        $("#listDuration8").append(events[7].duration);
        $("#listType8").append(events[7].type);
        $("#listElseText8").append("<strong>Other info: </strong>" + events[7].else);
        $("#listStartTime8").append("<strong>Starts: </strong>" + events[7].startTime);
        $("#listRoom8").append("<i class='fa fa-map-marker' aria-hidden='true'></i> " + events[7].room);
    };//end LIST

    //--------SCROLL TO MORE INFO (scrolls from calender view, down to list view, on same topic.)
     $('.scroll').click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });

    /*
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });*/
    //--------end SCROLL TO MORE INFO

    //--------SHOW MORE INFO (open list view) (qa expansion)
    //$('.qa li > a').on('click', function (j) {
    //    j.preventDefault();
    //    $(this).closest('li').toggleClass('open');
    //});//--------end SHOW MORE INFO (qa expansion)

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
    };//--------end SCROLL TO TOP
});
