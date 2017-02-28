$(function(){

            //htmlObjekter
            var $prevBtn;
            var $thisWeekBtn;
            var $nextBtn;
            var $infoTest;




            var init = function(){

                var setHTMLObjects = function(){
                    $prevBtn = $("#prevBtn");
                    $thisWeekBtn = $("#thisWeekBtn");
                    $nextBtnBtn = $("#nextBtnBtn");
                    $infoTest = $("#infoTest").get(0);

        }();//end set html objects



            }();//end init

            var events = [];


            $.ajax({
                type: "GET",
                dataType: "json",
                url: 'info.json',
                success: 1,
                }).done(function ( json ) {
                    events = json[0].events;

                console.log(events);
            });



     /*       function getInfoJson(url){}



        $.ajax({
            type: "GET",
            dataType: "json",
            url: infoUrl ,
            data: data,
            success: success
            });

        */

        }());
        //delete
