var route=require("express").Router();
var friends = require("../data/friends.js");


route.get("/api/friends", function(req,res){
    return res.json(friends)
});

route.post("/api/friends",function(req,res){
    var user = req.body.scores

    var bestMatch;
    var prevDiff=10000;
    friends.push(req.body);
    
    for (var i = 0; i < friends.length -1; i++) {
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
    res.json(bestMatch);


});

module.exports=route;