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

    var index;

    //init
    var init = function(){

        //Set HTML objects
        var setHTMLObjects = function(){

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
            $thisWeekBtn.on("click", function(){
                showThisWeek();
            });
            $nextBtn.on("click", function(){
                showNextWeek();
                //showNextWeek();
            });
            $prevBtn.on("click", function(){
                showPrevWeek();
            });
        }();//end Set events

        //initPage
        var initPage = function(){
            getEventJSON();
        }();//end initPage
    }();//end init

    function getEventJSON(){

        //var events = [];
        var index = [1];
        var Nextindex = [2];
        var date = [];

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
            .append(("<a href='#JsScroll1' class='scrollTo'>") + events[0].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0].duration + ("</div>") + ("</a>"));
        $(".JStrack2")
            .append(("<a href='#JsScroll2' class='scrollTo'>") + events[1].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[1].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1].duration + ("</div>") + ("</a>"));
        $(".JStrack3")
            .append(("<a href='#JsScroll3' class='scrollTo'>") + events[2].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>") + ("</a>"));
        $(".JStrack4")
            .append(("<a href='#JsScroll4' class='scrollTo'>") + events[3].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>") + ("</a>"));
        $(".JStrack5")
            .append(("<a href='#JsScroll5' class='scrollTo'>") + events[4].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>") + ("</a>"));
        $(".JStrack6")
            .append(("<a href='#JsScroll6' class='scrollTo'>") + events[5].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>") + ("</a>"));
        $(".JStrack7")
            .append(("<a href='#JsScroll7' class='scrollTo'>") + events[6].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>") + ("</a>"));
        $(".JStrack8")
            .append(("<a href='#JsScroll8' class='scrollTo'>") + events[7].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>") + ("</a>"));
    };
       //LIST
    function showEventList(json){


        //EVENT #1
        $("#listTitle1").append(events[0].title);
        $("#listImg1").append(events[0].image);
        $("#listExpect1").append(events[0].expect);
        $("#listPrereq1").append(events[0].prereq);
        $("#listWhoJoin1").append(events[0].whoJoin);
        $("#listnumberOfPartic1").append("<strong>Number of participants: </strong>" + events[0].numberOfPartic);
        $("#listHost1").append("<strong>Host: </strong>" +events[0].host);
        $("#listDuration1").append(events[0].duration);
        $("#listType1").append(events[0].type);
        $("#listElseText1").append("<strong>Other info: </strong>" + events[0].else);
        $("#listStartTime1").append("<strong>Starts: </strong>" + events[0].startTime);
        $("#listRoom1").append("<strong>Where: </strong>" + events[0].room);

        //EVENT #2
        $("#listTitle2").append(events[1].title);
        $("#listImg2").append(events[1].image);
        $("#listExpect2").append(events[1].expect);
        $("#listPrereq2").append(events[1].prereq);
        $("#listWhoJoin2").append(events[1].whoJoin);
        $("#listnumberOfPartic2").append("<strong>Number of participants: </strong>" + events[1].numberOfPartic);
        $("#listHost2").append("<strong>Host: </strong>" +events[1].host);
        $("#listDuration2").append(events[1].duration);
        $("#listType2").append(events[1].type);
        $("#listElseText2").append("<strong>Other info: </strong>" + events[1].else);
        $("#listStartTime2").append("<strong>Starts: </strong>" + events[1].startTime);
        $("#listRoom2").append("<strong>Where: </strong>" + events[1].room);

        //EVENT #3
        $("#listTitle3").append(events[2].title);
        $("#listImg3").append(events[2].image);
        $("#listExpect3").append(events[2].expect);
        $("#listPrereq3").append(events[2].prereq);
        $("#listWhoJoin3").append(events[2].whoJoin);
        $("#listnumberOfPartic3").append("<strong>Number of participants: </strong>" + events[2].numberOfPartic);
        $("#listHost3").append("<strong>Host: </strong>" +events[2].host);
        $("#listDuration3").append(events[2].duration);
        $("#listType3").append(events[2].type);
        $("#listElseText3").append("<strong>Other info: </strong>" + events[2].else);
        $("#listStartTime3").append("<strong>Starts: </strong>" + events[2].startTime);
        $("#listRoom3").append("<strong>Where: </strong>" + events[2].room);

        //EVENT #4
        $("#listTitle4").append(events[3].title);
        $("#listImg4").append(events[3].image);
        $("#listExpect4").append(events[3].expect);
        $("#listPrereq4").append(events[3].prereq);
        $("#listWhoJoin4").append(events[3].whoJoin);
        $("#listnumberOfPartic4").append("<strong>Number of participants: </strong>" + events[3].numberOfPartic);
        $("#listHost4").append("<strong>Host: </strong>" +events[3].host);
        $("#listDuration4").append(events[3].duration);
        $("#listType4").append(events[3].type);
        $("#listElseText4").append("<strong>Other info: </strong>" + events[3].else);
        $("#listStartTime4").append("<strong>Starts: </strong>" + events[3].startTime);
        $("#listRoom4").append("<strong>Where: </strong>" + events[3].room);

        //EVENT #5
        $("#listTitle5").append(events[4].title);
        $("#listImg5").append(events[4].image);
        $("#listExpect5").append(events[4].expect);
        $("#listPrereq5").append(events[4].prereq);
        $("#listWhoJoin5").append(events[4].whoJoin);
        $("#listnumberOfPartic5").append("<strong>Number of participants: </strong>" + events[4].numberOfPartic);
        $("#listHost5").append("<strong>Host: </strong>" +events[4].host);
        $("#listDuration5").append(events[4].duration);
        $("#listType5").append(events[4].type);
        $("#listElseText5").append("<strong>Other info: </strong>" + events[4].else);
        $("#listStartTime5").append("<strong>Starts: </strong>" + events[4].startTime);
        $("#listRoom5").append("<strong>Where: </strong>" + events[4].room);
    };//end LIST



    function showThisWeek(json){
//var events = [];
        var index = [1];
        var date = [];

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
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    //console.error("Status: " + textStatus + " , Error: " + errorThrown);
                }
            }
        );//end ajax call
    };//end getEventJSON

    function showInfo(json){
        $(".JStrack1").empty()
            .append(("<a href='#JsScroll1' class='scrollTo'>") + events[0].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0].duration + ("</div>") + ("</a>"));
        $(".JStrack2").empty()
            .append(("<a href='#JsScroll2' class='scrollTo'>") + events[1].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[1].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1].duration + ("</div>") + ("</a>"));
        $(".JStrack3").empty()
            .append(("<a href='#JsScroll3' class='scrollTo'>") + events[2].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>") + ("</a>"));
        $(".JStrack4").empty()
            .append(("<a href='#JsScroll4' class='scrollTo'>") + events[3].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>") + ("</a>"));
        $(".JStrack5").empty()
            .append(("<a href='#JsScroll5' class='scrollTo'>") + events[4].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>") + ("</a>"));
        $(".JStrack6").empty()
            .append(("<a href='#JsScroll6' class='scrollTo'>") + events[5].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>") + ("</a>"));
        $(".JStrack7").empty()
            .append(("<a href='#JsScroll7' class='scrollTo'>") + events[6].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>") + ("</a>"));
        $(".JStrack8").empty()
            .append(("<a href='#JsScroll8' class='scrollTo'>") + events[7].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>") + ("</a>"));
    };
       //LIST
    function showEventList(json){

      //  console.log(json[index]);

        //EVENT #1
        $("#listTitle1").empty()
            .append(events[0].title);
        $("#listImg1").empty()
            .append(events[0].image);
        $("#listExpect1").empty()
            .append(events[0].expect);
        $("#listPrereq1").empty()
            .append(events[0].prereq);
        $("#listWhoJoin1").empty()
            .append(events[0].whoJoin);
        $("#listnumberOfPartic1").empty()
            .append("<strong>Number of participants: </strong>" + events[0].numberOfPartic);
        $("#listHost1").empty()
            .append("<strong>Host: </strong>" +events[0].host);
        $("#listDuration1").empty()
            .append(events[0].duration);
        $("#listType1").empty()
            .append(events[0].type);
        $("#listElseText1").empty()
            .append("<strong>Other info: </strong>" + events[0].else);
        $("#listStartTime1").empty()
            .append("<strong>Starts: </strong>" + events[0].startTime);
        $("#listRoom1").empty()
            .append("<strong>Where: </strong>" + events[0].room);

        //EVENT #2
        $("#listTitle2").empty()
            .append(events[1].title);
        $("#listImg2").empty()
            .append(events[1].image);
        $("#listExpect2").empty()
            .append(events[1].expect);
        $("#listPrereq2").empty()
            .append(events[1].prereq);
        $("#listWhoJoin2").empty()
            .append(events[1].whoJoin);
        $("#listnumberOfPartic2").empty()
            .append("<strong>Number of participants: </strong>" + events[1].numberOfPartic);
        $("#listHost2").empty()
            .append("<strong>Host: </strong>" +events[1].host);
        $("#listDuration2").empty()
            .append(events[1].duration);
        $("#listType2").empty()
            .append(events[1].type);
        $("#listElseText2").empty()
            .append("<strong>Other info: </strong>" + events[1].else);
        $("#listStartTime2").empty()
            .append("<strong>Starts: </strong>" + events[1].startTime);
        $("#listRoom2").empty()
            .append("<strong>Where: </strong>" + events[1].room);

        //EVENT #3
        $("#listTitle3").empty()
            .append(events[2].title);
        $("#listImg3").empty()
            .append(events[2].image);
        $("#listExpect3").empty()
            .append(events[2].expect);
        $("#listPrereq3").empty()
        .append(events[2].prereq);
        $("#listWhoJoin3").empty()
            .append(events[2].whoJoin);
        $("#listnumberOfPartic3").empty()
            .append("<strong>Number of participants: </strong>" + events[2].numberOfPartic);
        $("#listHost3").empty()
            .append("<strong>Host: </strong>" +events[2].host);
        $("#listDuration3").empty()
            .append(events[2].duration);
        $("#listType3").empty()
            .append(events[2].type);
        $("#listElseText3").empty()
            .append("<strong>Other info: </strong>" + events[2].else);
        $("#listStartTime3").empty()
            .append("<strong>Starts: </strong>" + events[2].startTime);
        $("#listRoom3").empty()
            .append("<strong>Where: </strong>" + events[2].room);

        //EVENT #4
        $("#listTitle4").empty()
            .append(events[3].title);
        $("#listImg4").empty()
            .append(events[3].image);
        $("#listExpect4").empty()
            .append(events[3].expect);
        $("#listPrereq4").empty()
            .append(events[3].prereq);
        $("#listWhoJoin4").empty()
            .append(events[3].whoJoin);
        $("#listnumberOfPartic4").empty()
            .append("<strong>Number of participants: </strong>" + events[3].numberOfPartic);
        $("#listHost4").empty()
            .append("<strong>Host: </strong>" +events[3].host);
        $("#listDuration4").empty()
            .append(events[3].duration);
        $("#listType4").empty()
            .append(events[3].type);
        $("#listElseText4").empty()
            .append("<strong>Other info: </strong>" + events[3].else);
        $("#listStartTime4").empty()
            .append("<strong>Starts: </strong>" + events[3].startTime);
        $("#listRoom4").empty()
            .append("<strong>Where: </strong>" + events[3].room);

        //EVENT #5
        $("#listTitle5").empty()
            .append(events[4].title);
        $("#listImg5").empty()
            .append(events[4].image);
        $("#listExpect5").empty()
            .append(events[4].expect);
        $("#listPrereq5").empty()
            .append(events[4].prereq);
        $("#listWhoJoin5").empty()
            .append(events[4].whoJoin);
        $("#listnumberOfPartic5").empty()
            .append("<strong>Number of participants: </strong>" + events[4].numberOfPartic);
        $("#listHost5").empty()
            .append("<strong>Host: </strong>" +events[4].host);
        $("#listDuration5").empty()
            .append(events[4].duration);
        $("#listType5").empty()
            .append(events[4].type);
        $("#listElseText5").empty()
            .append("<strong>Other info: </strong>" + events[4].else);
        $("#listStartTime5").empty()
            .append("<strong>Starts: </strong>" + events[4].startTime);
        $("#listRoom5").empty()
            .append("<strong>Where: </strong>" + events[4].room);
    };//end LIST


    function showPrevWeek(json){

        //var events = [];
        var index = [0];
        var date = [];

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
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    //console.error("Status: " + textStatus + " , Error: " + errorThrown);
                }
            }
        );//end ajax call
    };//end getEventJSON

    function showInfo(json){
        $(".JStrack1").empty()
            .append(("<a href='#JsScroll1' class='scrollTo'>") + events[0].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0].duration + ("</div>") + ("</a>"));
        $(".JStrack2").empty()
            .append(("<a href='#JsScroll2' class='scrollTo'>") + events[1].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[1].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1].duration + ("</div>") + ("</a>"));
        $(".JStrack3").empty()
            .append(("<a href='#JsScroll3' class='scrollTo'>") + events[2].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>") + ("</a>"));
        $(".JStrack4").empty()
            .append(("<a href='#JsScroll4' class='scrollTo'>") + events[3].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>") + ("</a>"));
        $(".JStrack5").empty()
            .append(("<a href='#JsScroll5' class='scrollTo'>") + events[4].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>") + ("</a>"));
        $(".JStrack6").empty()
            .append(("<a href='#JsScroll6' class='scrollTo'>") + events[5].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>") + ("</a>"));
        $(".JStrack7").empty()
            .append(("<a href='#JsScroll7' class='scrollTo'>") + events[6].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>") + ("</a>"));
        $(".JStrack8").empty()
            .append(("<a href='#JsScroll8' class='scrollTo'>") + events[7].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>") + ("</a>"));
    };
       //LIST
    function showEventList(json){

      //  console.log(json[index]);

        //EVENT #1
        $("#listTitle1").empty()
            .append(events[0].title);
        $("#listImg1").empty()
            .append(events[0].image);
        $("#listExpect1").empty()
            .append(events[0].expect);
        $("#listPrereq1").empty()
            .append(events[0].prereq);
        $("#listWhoJoin1").empty()
            .append(events[0].whoJoin);
        $("#listnumberOfPartic1").empty()
            .append("<strong>Number of participants: </strong>" + events[0].numberOfPartic);
        $("#listHost1").empty()
            .append("<strong>Host: </strong>" +events[0].host);
        $("#listDuration1").empty()
            .append(events[0].duration);
        $("#listType1").empty()
            .append(events[0].type);
        $("#listElseText1").empty()
            .append("<strong>Other info: </strong>" + events[0].else);
        $("#listStartTime1").empty()
            .append("<strong>Starts: </strong>" + events[0].startTime);
        $("#listRoom1").empty()
            .append("<strong>Where: </strong>" + events[0].room);

        //EVENT #2
        $("#listTitle2").empty()
            .append(events[1].title);
        $("#listImg2").empty()
            .append(events[1].image);
        $("#listExpect2").empty()
            .append(events[1].expect);
        $("#listPrereq2").empty()
            .append(events[1].prereq);
        $("#listWhoJoin2").empty()
            .append(events[1].whoJoin);
        $("#listnumberOfPartic2").empty()
            .append("<strong>Number of participants: </strong>" + events[1].numberOfPartic);
        $("#listHost2").empty()
            .append("<strong>Host: </strong>" +events[1].host);
        $("#listDuration2").empty()
            .append(events[1].duration);
        $("#listType2").empty()
            .append(events[1].type);
        $("#listElseText2").empty()
            .append("<strong>Other info: </strong>" + events[1].else);
        $("#listStartTime2").empty()
            .append("<strong>Starts: </strong>" + events[1].startTime);
        $("#listRoom2").empty()
            .append("<strong>Where: </strong>" + events[1].room);

        //EVENT #3
        $("#listTitle3").empty()
            .append(events[2].title);
        $("#listImg3").empty()
            .append(events[2].image);
        $("#listExpect3").empty()
            .append(events[2].expect);
        $("#listPrereq3").empty()
        .append(events[2].prereq);
        $("#listWhoJoin3").empty()
            .append(events[2].whoJoin);
        $("#listnumberOfPartic3").empty()
            .append("<strong>Number of participants: </strong>" + events[2].numberOfPartic);
        $("#listHost3").empty()
            .append("<strong>Host: </strong>" +events[2].host);
        $("#listDuration3").empty()
            .append(events[2].duration);
        $("#listType3").empty()
            .append(events[2].type);
        $("#listElseText3").empty()
            .append("<strong>Other info: </strong>" + events[2].else);
        $("#listStartTime3").empty()
            .append("<strong>Starts: </strong>" + events[2].startTime);
        $("#listRoom3").empty()
            .append("<strong>Where: </strong>" + events[2].room);

        //EVENT #4
        $("#listTitle4").empty()
            .append(events[3].title);
        $("#listImg4").empty()
            .append(events[3].image);
        $("#listExpect4").empty()
            .append(events[3].expect);
        $("#listPrereq4").empty()
            .append(events[3].prereq);
        $("#listWhoJoin4").empty()
            .append(events[3].whoJoin);
        $("#listnumberOfPartic4").empty()
            .append("<strong>Number of participants: </strong>" + events[3].numberOfPartic);
        $("#listHost4").empty()
            .append("<strong>Host: </strong>" +events[3].host);
        $("#listDuration4").empty()
            .append(events[3].duration);
        $("#listType4").empty()
            .append(events[3].type);
        $("#listElseText4").empty()
            .append("<strong>Other info: </strong>" + events[3].else);
        $("#listStartTime4").empty()
            .append("<strong>Starts: </strong>" + events[3].startTime);
        $("#listRoom4").empty()
            .append("<strong>Where: </strong>" + events[3].room);

        //EVENT #5
        $("#listTitle5").empty()
            .append(events[4].title);
        $("#listImg5").empty()
            .append(events[4].image);
        $("#listExpect5").empty()
            .append(events[4].expect);
        $("#listPrereq5").empty()
            .append(events[4].prereq);
        $("#listWhoJoin5").empty()
            .append(events[4].whoJoin);
        $("#listnumberOfPartic5").empty()
            .append("<strong>Number of participants: </strong>" + events[4].numberOfPartic);
        $("#listHost5").empty()
            .append("<strong>Host: </strong>" +events[4].host);
        $("#listDuration5").empty()
            .append(events[4].duration);
        $("#listType5").empty()
            .append(events[4].type);
        $("#listElseText5").empty()
            .append("<strong>Other info: </strong>" + events[4].else);
        $("#listStartTime5").empty()
            .append("<strong>Starts: </strong>" + events[4].startTime);
        $("#listRoom5").empty()
            .append("<strong>Where: </strong>" + events[4].room);
    };//end LIST

    function showNextWeek(){

        //var events = [];
        var index = [2];
        var date = [];

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
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    //console.error("Status: " + textStatus + " , Error: " + errorThrown);
                }
            }
        );//end ajax call
    };//end getEventJSON

    function showInfo(json){
        $(".JStrack1").empty()
            .append(("<a href='#JsScroll1' class='scrollTo'>") + events[0].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0].duration + ("</div>") + ("</a>"));
        $(".JStrack2").empty()
            .append(("<a href='#JsScroll2' class='scrollTo'>") + events[1].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[1].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1].duration + ("</div>") + ("</a>"));
        $(".JStrack3").empty()
            .append(("<a href='#JsScroll3' class='scrollTo'>") + events[2].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>") + ("</a>"));
        $(".JStrack4").empty()
            .append(("<a href='#JsScroll4' class='scrollTo'>") + events[3].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>") + ("</a>"));
        $(".JStrack5").empty()
            .append(("<a href='#JsScroll5' class='scrollTo'>") + events[4].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>") + ("</a>"));
        $(".JStrack6").empty()
            .append(("<a href='#JsScroll6' class='scrollTo'>") + events[5].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>") + ("</a>"));
        $(".JStrack7").empty()
            .append(("<a href='#JsScroll7' class='scrollTo'>") + events[6].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>") + ("</a>"));
        $(".JStrack8").empty()
            .append(("<a href='#JsScroll8' class='scrollTo'>") + events[7].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>") + ("</a>"));
    };
       //LIST
    function showEventList(json){

      //  console.log(json[index]);

        //EVENT #1
        $("#listTitle1").empty()
            .append(events[0].title);
        $("#listImg1").empty()
            .append(events[0].image);
        $("#listExpect1").empty()
            .append(events[0].expect);
        $("#listPrereq1").empty()
            .append(events[0].prereq);
        $("#listWhoJoin1").empty()
            .append(events[0].whoJoin);
        $("#listnumberOfPartic1").empty()
            .append("<strong>Number of participants: </strong>" + events[0].numberOfPartic);
        $("#listHost1").empty()
            .append("<strong>Host: </strong>" +events[0].host);
        $("#listDuration1").empty()
            .append(events[0].duration);
        $("#listType1").empty()
            .append(events[0].type);
        $("#listElseText1").empty()
            .append("<strong>Other info: </strong>" + events[0].else);
        $("#listStartTime1").empty()
            .append("<strong>Starts: </strong>" + events[0].startTime);
        $("#listRoom1").empty()
            .append("<strong>Where: </strong>" + events[0].room);

        //EVENT #2
        $("#listTitle2").empty()
            .append(events[1].title);
        $("#listImg2").empty()
            .append(events[1].image);
        $("#listExpect2").empty()
            .append(events[1].expect);
        $("#listPrereq2").empty()
            .append(events[1].prereq);
        $("#listWhoJoin2").empty()
            .append(events[1].whoJoin);
        $("#listnumberOfPartic2").empty()
            .append("<strong>Number of participants: </strong>" + events[1].numberOfPartic);
        $("#listHost2").empty()
            .append("<strong>Host: </strong>" +events[1].host);
        $("#listDuration2").empty()
            .append(events[1].duration);
        $("#listType2").empty()
            .append(events[1].type);
        $("#listElseText2").empty()
            .append("<strong>Other info: </strong>" + events[1].else);
        $("#listStartTime2").empty()
            .append("<strong>Starts: </strong>" + events[1].startTime);
        $("#listRoom2").empty()
            .append("<strong>Where: </strong>" + events[1].room);

        //EVENT #3
        $("#listTitle3").empty()
            .append(events[2].title);
        $("#listImg3").empty()
            .append(events[2].image);
        $("#listExpect3").empty()
            .append(events[2].expect);
        $("#listPrereq3").empty()
        .append(events[2].prereq);
        $("#listWhoJoin3").empty()
            .append(events[2].whoJoin);
        $("#listnumberOfPartic3").empty()
            .append("<strong>Number of participants: </strong>" + events[2].numberOfPartic);
        $("#listHost3").empty()
            .append("<strong>Host: </strong>" +events[2].host);
        $("#listDuration3").empty()
            .append(events[2].duration);
        $("#listType3").empty()
            .append(events[2].type);
        $("#listElseText3").empty()
            .append("<strong>Other info: </strong>" + events[2].else);
        $("#listStartTime3").empty()
            .append("<strong>Starts: </strong>" + events[2].startTime);
        $("#listRoom3").empty()
            .append("<strong>Where: </strong>" + events[2].room);

        //EVENT #4
        $("#listTitle4").empty()
            .append(events[3].title);
        $("#listImg4").empty()
            .append(events[3].image);
        $("#listExpect4").empty()
            .append(events[3].expect);
        $("#listPrereq4").empty()
            .append(events[3].prereq);
        $("#listWhoJoin4").empty()
            .append(events[3].whoJoin);
        $("#listnumberOfPartic4").empty()
            .append("<strong>Number of participants: </strong>" + events[3].numberOfPartic);
        $("#listHost4").empty()
            .append("<strong>Host: </strong>" +events[3].host);
        $("#listDuration4").empty()
            .append(events[3].duration);
        $("#listType4").empty()
            .append(events[3].type);
        $("#listElseText4").empty()
            .append("<strong>Other info: </strong>" + events[3].else);
        $("#listStartTime4").empty()
            .append("<strong>Starts: </strong>" + events[3].startTime);
        $("#listRoom4").empty()
            .append("<strong>Where: </strong>" + events[3].room);

        //EVENT #5
        $("#listTitle5").empty()
            .append(events[4].title);
        $("#listImg5").empty()
            .append(events[4].image);
        $("#listExpect5").empty()
            .append(events[4].expect);
        $("#listPrereq5").empty()
            .append(events[4].prereq);
        $("#listWhoJoin5").empty()
            .append(events[4].whoJoin);
        $("#listnumberOfPartic5").empty()
            .append("<strong>Number of participants: </strong>" + events[4].numberOfPartic);
        $("#listHost5").empty()
            .append("<strong>Host: </strong>" +events[4].host);
        $("#listDuration5").empty()
            .append(events[4].duration);
        $("#listType5").empty()
            .append(events[4].type);
        $("#listElseText5").empty()
            .append("<strong>Other info: </strong>" + events[4].else);
        $("#listStartTime5").empty()
            .append("<strong>Starts: </strong>" + events[4].startTime);
        $("#listRoom5").empty()
            .append("<strong>Where: </strong>" + events[4].room);
    };//end LIST






    //-------------Hamburger btn (aka "the Sigrun-Btn")------------------
    $('header button').on('click', function () {
		$('header').toggleClass('open');
	});
    //---- end Hamburger Btn

    //--------SCROLL TO MORE INFO (scrolls from calender view, down to list view, on same topic.)
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

    //--------end SCROLL TO MORE INFO


    //--------SHOW MORE INFO (open list view) (qa expansion)
    $('.qa li > a').on('click', function (j) {
        j.preventDefault();
        $(this).closest('li').toggleClass('open');
    });//--------end SHOW MORE INFO (qa expansion)

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
