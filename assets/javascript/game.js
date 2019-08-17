
 
  var counter = 0;
  var wins = 0 ;
   var loss = 0 ;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
//function to assign a random word to randomWord
function randomPick(max, min) {
    return Math.random() * (max - min) + min
}


var numberOptions = [];
function randomCards() {
     for (var i = 0; i < 4; i++) {
    randomnum =  Math.floor(Math.random() * 12) + 1;
    numberOptions.push(randomnum);
     }
}
var randonHouseNum = 0;

function randomHouse() {
    randonHouseNum =  Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").text(randonHouseNum);
}

  

randomHouse();
randomCards();


  var picOptions = ["./assets/images/1200px-Aceofspades.svg.png", "./assets/images/1200px-Playing_card_heart_A.svg.png", "./assets/images/1200px-Playing_card_heart_A.svg.png", "./assets/images/819px-Playing_card_club_A.svg.png"]


  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", picOptions[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#score").text(counter)
    if (counter == randonHouseNum){
        alert("You win!");
        wins++;
        $("#wins").text("Wins: " + wins)
        randomHouse();
        randomCards();
        counter = 0;

        }
    else if (counter > randonHouseNum){
    alert("You Lose!");
    loss++;
    $("#losses").text("Losses: " + loss)
    randomHouse();
    randomCards();
    counter = 0;
    }



    // All of the same game win-lose logic applies. So the rest remains unchanged.

  });
