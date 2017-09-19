$(document).ready(function() {
  
  // team Container holds all the team schedules
  var teamsContainer = $(".teamsContainer");
  
  var teams;

  // This function grabs questions from the database and updates the view
  function getTeams() {
    
    $.get("/api/teams", function(data) {
      console.log("Teams", data);
      teams = data;
      console.log(teams);
      
    });
  }

  // Getting the initial list of questions
  getTeams();
  // InitializeRows handles appending all of our constructed question inside HTML
  // teamsContainer
  function initializeRows() {
    teamsContainer.empty();
    var teamsToAdd = [];
    for (var i = 0; i < teams.length; i++) {
      teamsToAdd.push(createNewRow(teams[i]));
    }
    teamsContainer.append(teamsToAdd);
  }

  // This function constructs a teams's HTML
  function createNewRow(teams) {
    var newQuestPanel = $("<div>");
    newQuestPanel.addClass("panel panel-default");
    // var newQuestPanelHeading = $("<div>");
    // newQuestPanelHeading.addClass("panel-heading");
    

    var newQuestPanelBody = $("<div>");
    newQuestPanelBody.addClass("panel-body text-center");
    newQuestPanelBody.css({
      "font-size": "1.25em"
    })

    
    var newQuest_a1 = $("<p>");
    newQuest_a1.text(teams.awayTeam);
    newQuest_h2.text(teams.homeTeam);

    newQuestPanelBody.append(newQuest_a1);
    newQuestPanelBody.append(newQuest_h1);
   
    // newQuestPanelBody.append(newQuest_disc);

    // newQuestPanel.append(newQuestPanelHeading);
    newQuestPanel.append(newQuestPanelBody);
    newQuestPanel.data("Teams", teams);
    return newQuestPanel;
  }

  

  

 

});
