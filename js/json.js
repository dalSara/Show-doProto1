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
        data: {hendelser: JSON.stringify(events) },
        dataType: "json",
        url: 'info.json',
        success: 1
    }).done(function ( json ) {
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
    }

    function showThisWeek(json){
        json[1];
    }//end thisPrevWeek


    function showPrevWeek(json){
        json[0];
    }//end ShowPrevWeek

    function showNextWeek(json){

    }//end ShowNextWeek

    function showEventList(json){

        console.log(json[index]);

        $(json[index].events).each(function(){

            //--------EVENT
            var $title = $("<h4>").html(this.title);
            var $room = $("<p>").html("Room: " + this.room);
            var $numberOfPartic = $("<p>").html("Number of participants: " + this.numberOfPartic);
            var $prereq = $("<p>").html("Prerequisites: " + this.prereq);
            var $expect = $("<p>").html("What to expect: " + this.expect);
            var $host = $("<p>").html("Host: " + this.host);
            var $whoJoin = $("<p>").html("Who should join? " + this.whoJoin);
            var $image = $("<img>").html(this.image)
            .addClass("image-to-cut");
            var $elseText = $("<p>").html("Other information: " + this.elseText);
            var $type = $("<p>").html("Size: " + this.type);
            var $startTime = $("<p>").html("Starts: " + this.startTime);
            //--------end EVENT

            //--------HTML elements
            var $event = $("<li>")
                .css("background-color", "lightgray"); //Test color

            var $figure = $("<figure>")
                .addClass("cut-image"); //For image

            var $moreInforLink = $("<a href=''>"); //Link for more info
            var $moreInfo = $("<div>"); //More info
            //--------end HTML elements

            $event.append($title/*
                $figure.append($image),
                $moreInforLink.append($title),
                $moreInfo.append(
                    $room,
                    $numberOfPartic,
                    $prereq,
                    $expect,
                    $host,
                    $whoJoin,
                    $elseText,
                    $type,
                    $startTime)*/
                         );

            $listContent.append($event);
        }); //end each loop
    }
});
