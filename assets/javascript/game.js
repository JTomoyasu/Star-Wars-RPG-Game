// function Fighter(hitp, att, caps, iden) {
//     this.hp = hitp;
//     this.ap = att;
//     this.cap = caps;
//     this.id = iden;
//     //this.graphics=graphic;
//     this.fight = function (input) {
//         this.hp -= input;
//     }
// }
var fighters=[];
fighters.push({hp:120,name:"Luke",att:6,newAtt:6,cap:12,iden:"fighter1"});
fighters.push({hp:100,name:"Troop",att:8,newAtt:8,cap:10,iden:"fighter2"});
fighters.push({hp:110,name:"Mace",att:7,newAtt:7,cap:11,iden:"fighter3"});
fighters.push({hp:140,name:"Vader",att:4,newAtt:4,cap:14,iden:"fighter4"});
fighters.push({hp:130,name:"Obi-Wan",att:5,newAtt:5,cap:13,iden:"fighter5"});
$(document).ready(function () {
    //create fighters
//     var fighter1 = new Fighter(120, 6, 12, "fighter1");
//     $("#stat1").text(fighter1.hp);
//    // $("#fighter1").attr("fighter", fighter1);
//     var fighter2 = new Fighter(100, 8, 10, "fighter2");
//     $("#stat2").text(fighter2.hp);
//     //$("#fighter2").attr("fighter", fighter2);
//     var fighter3 = new Fighter(110, 7, 11, "fighter3");
//     $("#stat3").text(fighter3.hp);
//     //$("#fighter3").attr("fighter", fighter3);
//     var fighter4 = new Fighter(140, 4, 14, "fighter4");
//     $("#stat4").text(fighter4.hp);
//     //$("#fighter4").attr("fighter", fighter4);
//     var fighter5 = new Fighter(130, 5, 13, "fighter5");
//     $("#stat5").text(fighter5.hp);
    // $("#fighter5").attr("fighter", fighter5);
    //on fighter click
    $(".fighter").on("click", function () {
        var current = this;
        //console.log($("#attPic").attr("check"));
        if ($("#attPic").attr("check") != "true") {
            var source = $(current).attr("src");
            var height = $(current).attr("height");
            var width = $(current).attr("width");
            var image = $("<img>").attr("src", source);
            var iden = $(current).attr("id");
            //console.log(iden);
            image.css({ "height": height, "width": width });
            $("#attPic").attr("check", "true");
            $("#attPic").attr("iden", iden);
            $("#attPic").append(image);
            $(current).hide();
        }
        else {
            if ($("#defPic").attr("check") != "true") {
                var source = $(current).attr("src");
                var height = $(current).attr("height");
                var width = $(current).attr("width")
                var image = $("<img>").attr("src", source);
                var iden = $(current).attr("id");
                image.css({ "height": height, "width": width });
                $("#defPic").attr("check", "true");
                $("#defPic").attr("iden", iden);
                //console.log(source);
                $("#defPic").append(image);
                $(current).hide();
            }
            else {
                $(".message-area").text("You've already chosen a character");
            }
        }
    });
    //attack button
    $("#attack").on("click", function () {
        if (($("#attPic").attr("check") == "true") && ($("#defPic").attr("check") == "true")) {
            //fight
            var f1 = $("#attPic").attr("iden");
            var f2 = $("#defPic").attr("iden");
            var activeAtt=0;
            var activeDef=0;
            for(i=0;i<fighters.length;i++)
            {
                if(f1==fighters[0].iden)
                {
                    activeAtt=i;
                }
                if(f2==fighters[0].iden)
                {
                    activeDef=i;
                }
            }
            //I know this is inefficient but I couldn't figure out how to do this the way I wanted to
            // var attacker=fighters[activeAtt];
            // var defender=fighters[activeDef];
            // attacker.hp-=defender.cap;
            // attacker.att+=attacker.newAtt;
            fighters[activeAtt].hp-=fighters[activeDef].cap;
            fighters[activeDef].hp-=fighters[activeAtt].att;
            fighters[activeAtt].att+=fighters[activeAtt].newAtt;
            $("#attHP").text(fighters[activeAtt].hp);
            $("#defHP").text(fighters[activeDef].hp);
            //console.log(f2);
            //$("#attPic").append(f1.hp);
            // if (f1 == "fighter1") {
            // }
            //In theory I would be able to get a fighter with a matching iden to f1 and f2 and have them fight
            //
        }
        else if ($("#attPic").attr("check") != "true") {
            //select a fighter
            //console.log("am");
            $(".message-area").text("Select a fighter");
        }
        else {
            //console.log("here");
            $(".message-area").text("Select an opponent");
            //select an opponent
        }
    });
});
