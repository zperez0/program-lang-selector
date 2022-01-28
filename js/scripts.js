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
        $("form#selector").hide();

console.log("cityWork");

     if (videoGame === "yes" && cityWork == "seattle" && mythCreature === "dragon" && codeExp === "tons" && islandItem === "gameBoy") {
      $("#python").show();
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#cSharp").hide();
      $("#java").hide();
      $("#swift").hide();
      
  
    } else if (
      videoGame === "yes" && cityWork === "newYork" && mythCreature === "unicorn" && codeExp === "some" && islandItem === "book"
      ) {
      $("#python").hide();
      $("#javaScript").show();
      $("#ruby").hide();
      $("#cSharp").hide();
      $("#java").hide();
      $("#swift").hide();
      
 
    } else if (
      videoGame === "no" && cityWork == "remote" && mythCreature === "neither" && codeExp === "newbie" && islandItem === "dvd"
      ) {
      $("#python").hide();
      $("#javaScript").hide();
      $("#ruby").show();
      $("#cSharp").hide();
      $("#java").hide();
      $("#swift").hide();
      

    } else if (
      videoGame === "no" && cityWork == "seattle" && mythCreature === "unicorn" && codeExp === "some" && islandItem === "gameBoy"
      ) {
      $("#python").hide();
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#cSharp").show();
      $("#java").hide();
      $("#swift").hide();
      

    } else if (
      videoGame === "yes" && cityWork == "remote" && mythCreature === "neither" && codeExp === "tons" && islandItem === "dvd"
      ) {
      $("#python").hide();
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#cSharp").hide();
      $("#java").show();
      $("#swift").hide();
      

    } else {
      $("#python").hide();
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#cSharp").hide();
      $("#java").hide();
      $("#swift").show();
      

    }
  });

  $(document).on("change",".switch",function() {
    $("body").toggleClass("dark");
  });
    // $(".reset").click(function() {
    //   $("form#selector").toggle().show();
    //   $("#python").toggle().hide();
    //   $("#javaScript").toggle().hide();
    //   $("#ruby").toggle().hide();
    //   $("#cSharp").toggle().hide();
    //   $("#java").toggle().hide();
    //   $("#swift").toggle().hide();
    //   document.getElementById("selector")
      
    });
  // });