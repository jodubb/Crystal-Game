$(document).ready(function () {
    var crystals = [];
    var totalPoints = 0;
    var wins = 0;
    var losses = 0;
    var percentage = 0;
  
    var goal = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    crystals[0] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    crystals[1] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    crystals[2] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    crystals[3] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    console.log(crystals);
    // game(goal, crystals);
    var randomNumber = $("#randomNumber");
    
    // Reset Funchtion 
    function reset() {
    crystals[0] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    crystals[1] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    crystals[2] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    crystals[3] = Math.floor((Math.random() * 12 - 1 + 1) + 1);
    goal = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    blueGem.attr("gemvalue", crystals[0]);
    greenGem.attr("gemvalue", crystals[1]);
    pinkGem.attr("gemvalue", crystals[2]);
    purpleGem.attr("gemvalue", crystals[3]);

    console.log("====== Reset ========" );
    console.log(crystals);
    totalPoints = 0;
    randomNumber.text(goal);
    $("#finalTotal").text(totalPoints);
    }

    var blueGem = $("#one");
    var greenGem = $("#two");
    var pinkGem = $("#three");
    var purpleGem = $("#four");

    blueGem.attr("gemvalue", crystals[0]);
    greenGem.attr("gemvalue", crystals[1]);
    pinkGem.attr("gemvalue", crystals[2]);
    purpleGem.attr("gemvalue", crystals[3]);

    var randomNumber = $("#randomNumber");
    randomNumber.text(goal);

    var gemImage = $(".gemImage");

    gemImage.click(function () {
        var gemvalue = $(this).attr("gemvalue");
        console.log("gemvalue", gemvalue);
        totalPoints = Number(gemvalue) + totalPoints;
        $("#finalTotal").text(totalPoints);

        // this is my win bar
              
        percentage = ((totalPoints/goal)* 100);
        if (percentage > 100){
            percentage = 0; 
        }
         $("#myProgress").animate({
            width: percentage + '%'
            
         });
         console.log("====== Progress %  ========", percentage );
         

         if (totalPoints == goal){
            wins ++ 
            $("#numberWins").text(wins);
            reset()
         }

         if (totalPoints > goal){
             losses ++
            $("#numberLosses").text(losses);
            reset()
         }

    })

    // greenGem.click(function () {
    //     var gemvalue = $(this).attr("gemvalue");
    //     console.log("gemvalue", gemvalue);
    //     totalPoints = Number(gemvalue) + totalPoints;
    //     $("#finalTotal").text(totalPoints);

    // })

    // pinkGem.click(function () {
    //     var gemvalue = $(this).attr("gemvalue");
    //     console.log("gemvalue", gemvalue);
    //     totalPoints = Number(gemvalue) + totalPoints;
    //     $("#finalTotal").text(totalPoints);
    // })

    // purpleGem.click(function () {
    //     var gemvalue = $(this).attr("gemvalue");
    //     console.log("gemvalue", gemvalue);
    //     totalPoints = Number(gemvalue) + totalPoints;
    //     $("#finalTotal").text(totalPoints);
    // })














});