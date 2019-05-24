function createSurvey(){
    var x;
    var name=prompt("Enter New Survey Name","");
    if (name!=null){
       var survey = new Survey(name);
       var jsonTxt = JSON.stringify(survey);
       createNew(name, jsonTxt);
   }
}

// handles the click event, sends the query
function createNew(surveyName, surveyJSON) {
    $.ajax({
       url:'createsurvey.php?name=' + surveyName + '&json=' + surveyJSON,
       complete: function (response) {
           getList();
       },
       error: function () {
        alert("Bummer, there was an error!");
       }
   });
   return false;
 }