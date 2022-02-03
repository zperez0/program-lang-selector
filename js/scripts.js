$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    
    const fullName1Input = $("input#fullName").val();
    const videoGame = $("input:radio[name=videoGame]:checked").val();
    const cityWork = $("input:radio[name=cityWork]:checked").val();
    const mythCreature = $("input:radio[name=mythCreature]:checked").val();
    const codeExp = $("input:radio[name=codeExp]:checked").val();
    const islandItem = $("input:radio[name=islandItem]:checked").val();
    
    $(".fullName").text(fullName1Input);
    $(".result").show();
    $("#reset").show();
    $("form#selector").hide();
    $("#python").hide();
    $("#javaScript").hide();
    $("#ruby").hide();
    $("#cSharp").hide();
    $("#java").hide();
    $("#swift").hide();
    if (videoGame === "yes" && cityWork == "seattle" && mythCreature === "dragon" && codeExp === "tons" && islandItem === "gameBoy") {
      $("#python").show();
    } else if (videoGame === "yes" && cityWork === "newYork" && mythCreature === "unicorn" && codeExp === "some" && islandItem === "book") {
      $("#javaScript").show();
    } else if (videoGame === "no" && cityWork == "remote" && mythCreature === "neither" && codeExp === "newbie" && islandItem === "dvd") {
      $("#ruby").show();
    } else if (videoGame === "no" && cityWork == "seattle" && mythCreature === "unicorn" && codeExp === "some" && islandItem === "gameBoy") {
      $("#cSharp").show();
    } else if (videoGame === "yes" && cityWork == "remote" && mythCreature === "neither" && codeExp === "tons" && islandItem === "dvd") {
      $("#java").show();
    } else {
      $("#swift").show();
    }
    $("#reset").click(function() {
      $("#selector").toggle().show();
      $("#reset").toggle().hide();
      $("#python").toggle().hide();
      $("#javaScript").toggle().hide();
      $("#ruby").toggle().hide();
      $("#cSharp").toggle().hide();
      $("#java").toggle().hide();
      $("#swift").toggle().hide();
      document.getElementById("selector").reset();
    });
  });
  $(document).on("change",".switch",function() {
    $("body").toggleClass("dark");
  });
});