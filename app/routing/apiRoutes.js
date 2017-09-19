var db = require("../models");

var teams = require("../data/teams");

module.exports = function(app) {

	app.get("/api/teams", function(req, res) {
		res.json(teams);	
	}); 

	// app.post("/api/teams", function(req, res) {
 //        var newClient = req.body;
 //        var myScore = newClient.scores;
 //        var total = 0;
 //        var bestMatch = 100;
 //        var index = -1;

 //        for(var j=0; j < teams.length; j++){
 //            //Iterate through the whole list of friends
 //            total = 0;

 //            for(var i =0; i< myScore.length; i++){
 //                //for each friend calculate the total value
 //                var dif = Math.abs(myScore[i] - friends[j].scores[i]);
 //                total += dif;
 //            }

 //            if(total < bestMatch){
 //                bestMatch = total;
 //                index = j;
 //            }

 //        }

 //        console.log('Best Choice', teams[index]);
 //        teams.push(newClient);
 //        res.json(teams[index]);
 //    });

	


}