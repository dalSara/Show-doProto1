$(function(){

    //htmlObjekter
    var $prevWeekBtn;
    var $thisWeekBtn;
    var $nextWeekBtn;
    var $infoTest;
    var $listContent;


    var init = function(){

        var setHTMLObjects = function(){
            $prevWeekBtn = $("#prevWeekBtn");
            $thisWeekBtn = $("#thisWeekBtn");
            $nextWeekBtn = $("#nextWeekBtn");
            $infoTest = $("#infoTest").get(0);
            $listContent = $("#listContent");
        }();//end set html objects

        var setEvents = function(){
            $thisWeekBtn.on("click", function(){
                showThisWeek();
            });
            $nextWeekBtn.on("click", function(){
                showNextWeek();
            });
            $prevWeekBtn.on("click", function(){
                showPrevWeek();
            });
            /*$moreInforLink.on("click", function(){
                $moreInfo.toggle();
            });*/
        };//end setEvents
    }();//end init

    var events = [];
    var index = [1]

    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'info.json',
        success: 1
    })
        .done(function (json) {
        events = json[index].events;
        showInfo(json);
        showThisWeek(json);
        showNextWeek(json);
        showPrevWeek(json);

        showEventList(json);
        // console.log(events);
    })
        .fail(function (XMLHttpRequest, textStatus, errorThrown){
        alert("Status: " + textStatus); alert("Error: " + errorThrown);
        console.error("Status: " + textStatus + " , Error: " + errorThrown)
    });

    function showInfo(json){
        $(".JStrack1")
            .append(events[0].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0].duration + ("</div>"));
        $(".JStrack2")
            .append(events[1].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[1].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1].duration + ("</div>"));
        $(".JStrack3")
            .append(events[2].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>"));
        $(".JStrack4")
            .append(events[3].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>"));
        $(".JStrack5")
            .append(events[4].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>"));
        $(".JStrack6")
            .append(events[5].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>"));
        $(".JStrack7")
            .append(events[6].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>"));
        $(".JStrack8")
            .append(events[7].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>"));
    }

    function showThisWeek(json){
        json[1];
    }//end thisPrevWeek


    function showPrevWeek(json){
        json[0];
    }//end ShowPrevWeek

    function showNextWeek(json){

    }//end ShowNextWeek

    //LIST
    function showEventList(json){

        console.log(json[index]);


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

    }//end LIST
});
