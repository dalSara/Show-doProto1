$(function(){

    //htmlObjekter
    var $prevBtn;
    var $thisWeekBtn;
    var $nextBtn;
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


    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'info.json',
        success: 1
    }).done(function ( json ) {
        events = json[1].events;
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
