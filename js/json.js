$(function(){

    //htmlObjekter
    var $prevWeekBtn;
    var $thisWeekBtn;
    var $nextWeekBtn;
    var $infoTest;


    var init = function(){

        var setHTMLObjects = function(){
            $prevWeekBtn = $("#prevWeekBtn");
            $thisWeekBtn = $("#thisWeekBtn");
            $nextWeekBtn = $("#nextWeekBtn");
            $infoTest = $("#infoTest").get(0);
        }();//end set html objects
    }();//end init

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




        };//end setEvents



    var events = [];
    var index = [1]


    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'info.json',
        success: 1
    }).done(function ( json ) {
        events = json[index].events;
        showInfo(json);
        showThisWeek(json);
        showNextWeek(json);
        showPrevWeek(json);
        // console.log(events);
    })
        .fail(function (XMLHttpRequest, textStatus, errorThrown){
        alert("Status: " + textStatus); alert("Error: " + errorThrown);
        console.error("Status: " + textStatus + " , Error: " + errorThrown)
    })

    function showInfo(json){
        $(".JStrack1")
            .append(events[0].title + ("<br>") + " Room: ", events[0].room);
        $(".JStrack2")
            .append(events[1].title + ("<br>") + " Room: ", events[1].room);
        $(".JStrack3")
            .append(events[2].title + ("<br>") + " Room: ", events[2].room);
        $(".JStrack4")
            .append(events[3].title + ("<br>") + " Room: ", events[3].room);
        $(".JStrack5")
            .append(events[4].title + ("<br>") + " Room: ", events[4].room);
        $(".JStrack6")
            .append(events[5].title + ("<br>") + " Room: ", events[5].room);
        $(".JStrack7")
            .append(events[6].title + ("<br>") + " Room: ", events[6].room);
        $(".JStrack9")
            .append(events[7].title + ("<br>") + " Room: ", events[7].room);
    };

    function showThisWeek(json){
        json[1];
    };//end thisPrevWeek


    function showPrevWeek(json){
        json[0];
    };//end ShowPrevWeek

    function showNextWeek(json){

    };//end ShowNextWeek

}());
