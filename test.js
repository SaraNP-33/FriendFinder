var friends = require("./app/data/friends.js");
console.log(friends);
var user = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

var bestMatch;
var prevDiff=10000;


for (var i = 0; i < friends.length; i++) {
    var currentScore = friends[i].scores
    var totalDifference = 0
    

    for (var j = 0; j < user.length; j++) {
        var diff = Math.abs(user[j] - currentScore[j]);
        console.log(diff);
        totalDifference += diff;
        
    }
    if(totalDifference<prevDiff){
        prevDiff=totalDifference
        bestMatch=friends[i]
    }
    console.log("*****************************")
    console.log("Total Difference", totalDifference);
    
}
console.log("Your Best Friend is",bestMatch );