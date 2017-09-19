$(document).ready(function() {

// console.log(questionArr);
// var database = firebase.database();

// var randomQuestion = quest[Math.floor(Math.random() * quest.length)];
// var strikeCount = 0;
var teams;
// var questID;
var teamsArr;
// var strikeCount;

function getAllTeams() {
	$.get("/api/teams", function(data) {
		teamsArr = data;
		// console.log(teamsArr);
		// return teamsArr;
	}).then(function() {
		console.log(teamsArr);
	});
}

getAllTeams();

	// Function that displays the question information on the main screen and sets everything to unanswered:
	function setTeams(teams) {
		$("#dateDisplay").html("<h2>" + teams.Date + "</h2>");
		$("#timeDisplay").html("<h2>" + teams.Time + "</h2>");
		$("#awayTeam").html("<h2>" + teams.awayTeam + "</h2>");
		$("#homeTeam").html("<h2>" + teams.homeTeam + "</h2>");
		$("#Week").html("<h2>" + teams.Week + "</h2>");
	}


	//displays a question on load:
	setTeams();

				// Reruns setQuestion to display a new question when "Random Question" button is pressed:
				// $("#randomQuestion").on("click", function(){
				// 	questID = questionArr[Math.floor(Math.random() * questionArr.length)];
				// 	setQuestion(questID);
				// 	console.log(questID);
				// });

				//Callback function that runs when a number is entered in the "Question Number" box and "Go" is pressed:
				// $("#submit").on("click", function() {
				// 	questID = $("#qNumber").val();
				// 	console.log(questID);
				// 	setQuestion(questionArr[questID - 1]);
				// });

				//Will also run if 'Enter' is pressed in the text box:
				// $('#qNumber').bind("enterKey",function(){
				// 	questID = $("#qNumber").val();
				// 	console.log(questID);
				// 	setQuestion(questionArr[questID - 1]);
				// });
			

				
				
				

				

				
				

				
})