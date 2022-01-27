$(document).ready(function() {
  $("form#selector").submit(function(event) {
    const fullName1Input = $("input#fullName").val();
    const videoGame = $("input#videoGame").val();
    const cityWork = $("input#cityWork").val();
    const mythCreature = $("input#mythCreature").val();
    const codeExp = $("input#codeExp").val();
    const islandItem = $("input#islandItem").val();

  
    $(".fullName").text(fullName1Input);
    $(".result").show();
    $("form#selector").hide();
  
    if (videoGame === "yes" && cityWork == "seattle" && mythCreature === "dragon" && codeExp === "tons" && islandItem === "gameBoy") {
    $("#python").show();
    $("#javaScript").hide();
    $("#ruby").hide();
    
    } else if 
      (videoGame === "yes" && cityWork === "newYork" && mythCreature === "unicorn" && codeExp === "some" && islandItem === "book") {
        $("#python").hide();
        $("#javaScript").show();
        $("#ruby").hide();
        
    } else { 
    (videoGame === "no" && cityWork == "remote" && mythCreature === "neither" && codeExp === "newbie" && islandItem === "dvd")
      $("#python").hide();
      $("#javaScript").hide();
      $("#ruby").show();
      
    
      event.preventDefault();
    }
  });
});