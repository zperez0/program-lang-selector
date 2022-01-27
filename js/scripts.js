$(document).ready(function() {
  $("form#selector").submit(function(event) {
    const fullName = $("input#fullName").val();
    const videoGame = $("input#videoGame").val();
    const cityWork = $("input#cityWork").val();
    const mythCreature = $("input#mythCreature").val();
    const codeExp = $("input#codeExp").val();
    const islandItem = $("input#islandItem").val();

    $("#fullName").text(fullName);

  
    if (videoGame === "videoGame1" && cityWork == "cityWork1" && mythCreature === "mythCreature1" && codeExp === "codeExp1" && islandItem === "islandItem1") {
    $(".result").show();
    $("#python").show();
    $("#javaScript").hide();
    $("#ruby").hide();
    $("#form#selector").hide();
    } else if 
      (videoGame === "yes" && cityWork === "newYork" && mythCreature === "unicorn" && codeExp === "some" && islandItem === "book") {
        $(".result").show();
        $("#python").hide();
        $("#javaScript").show();
        $("#ruby").hide();
        $("#form#selector").hide();
    } else { 
    (videoGame === "no" && cityWork == "remote" && mythCreature === "neither" && codeExp === "newbie" && islandItem === "dvd")
      $(".result").show();
      $("#python").hide();
      $("#javaScript").hide();
      $("#ruby").show();
      $("#form#selector").hide();

      event.preventDefault();
    }
  });
});