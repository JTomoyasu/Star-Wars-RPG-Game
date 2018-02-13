function Fighter(hitp, att, caps) {
    this.hp = hitp;
    this.ap = att;
    this.cap = caps;
    //this.graphics=graphic;
    this.fight= function(){

    }
}
$(document).ready(function () {
    var fighter1= new Fighter(120,5,12);
    $(".fighter").on("click", function () {
        var current=this;
        //console.log($("#attPic").attr("check"));
        if ($("#attPic").attr("check") != "true") {
            var source = $(current).attr("src");
            var height = $(current).attr("height");
            var width = $(current).attr("width")
            var image = $("<img>").attr("src", source);
            image.css({ "height": height, "width": width });
            $("#attPic").attr("check", "true");
            //console.log(source);
            $("#attPic").append(image);
            $(current).hide();
        }
        else {
            if($("#defPic").attr("check") != "true")
            {
                var source = $(current).attr("src");
                var height = $(current).attr("height");
                var width = $(current).attr("width")
                var image = $("<img>").attr("src", source);
                image.css({ "height": height, "width": width });
                $("#defPic").attr("check", "true");
                //console.log(source);
                $("#defPic").append(image);
                $(current).hide();
            }
            else
            {
                $(".message-area").text("You've already chosen a character");
            }
        }
    });
    $("#attack").on("click", function () {
        console.log("attack");
        if(($("#attPic").attr("check") == "true")&&($("#defPic").attr("check") == "true"))
        {
            //fight
        }
        else if($("#attPic").attr("check") != "true")
        {
            //select a fighter
            $(".message-area").text("Select a fighter");
        }
        else
        {
            $(".message-area").text("Select an opponent");
            //select an opponent
        }
    });
/*     $(".enemy").on("click", function () {
        if ($("#defPic").attr("src") != "") {
            var source = $(this).attr("src");
            var height = $(this).attr("height");
            var width = $(this).attr("width")
            var image = $("<img>").attr("src", source);
            image.css({ "height": height, "width": width });
            console.log(source);
            $("#defPic").append(image);
        }
        else {
            $("#message-area").text("You've already chosen an opponent. Fight this one first.")
        }
    }); */
});
