//Stores current survey
var survey;

function editSurvey(index){
    getSurvey(index);
}

// handles the click event, sends the query
function getSurvey(index) {
    $.ajax({
       url:'getsurvey.php?index=' + index,
       complete: function (response) {
           //Retrieve the survey
            var survobj = JSON.parse(response.responseText);
            survey = new Survey("", survobj);
            drawOutput();
       },
       error: function () {
        alert("Bummer, there was an error!");
       }
   });
   return false;
 }

 // handles the click event, sends the query
function updateSurvey(index, json) {
    $.ajax({
       url:'updatesurvey.php?index=' + index + '&json=' + json,
       complete: function (response) {
            getList();
       },
       error: function () {
        alert("Bummer, there was an error!");
       }
   });
   return false;
 }

// handles the response, adds the html
function drawOutput() {
    var container = document.getElementById('output');
    var html = survey.display();

    html += "<button class='open-button' onclick='openForm()'>Add New Question</button>";
    html += "<button class='save-button' onclick='saveSurvey()'>Save</button>";
    html += "<div class='form-popup' id='newQuestionForm'>";
    html += "<form action='/action_page.php' class='form-container'>";
    html += "<h1>New Question</h1>";

    html += "<label for='question'><b>Question</b></label>";
    html += "<input type='text' placeholder='Enter Question' name='question' id='question' required>";

    html += "<label for='ans1'><b>Answer 1</b></label>";
    html += "<input type='text' placeholder='Enter Answer' name='ans1' id='ans1' required>";

    html += "<label for='ans2'><b>Answer 2</b></label>";
    html += "<input type='text' placeholder='Enter Answer' name='ans2' id='ans2' required>";

    html += "<label for='ans3'><b>Answer 3</b></label>";
    html += "<input type='text' placeholder='Enter Answer' name='ans3' id='ans3'>";

    html += "<label for='ans4'><b>Answer 4</b></label>";
    html += "<input type='text' placeholder='Enter Answer' name='ans4' id='ans4'>";

    html += "<button type='button' class='btn' onclick='addQuestion()'>Add Question</button>";
    html += "<button type='button' class='btn cancel' onclick='closeForm()'>Close</button>";
    html += "</form>";
    html += "</div>";
    container.innerHTML = html;
}

function addQuestion() {
    var questionVal = document.getElementById("question").value;
    var ans1 = document.getElementById("ans1").value;
    var ans2 = document.getElementById("ans2").value;
    var ans3 = document.getElementById("ans3").value;
    var ans4 = document.getElementById("ans4").value;

    var q = new Question("", questionVal, [ans1, ans2, ans3, ans4]);
    survey.AddQuestion(q)
    drawOutput();
}

function saveSurvey() {
    updateSurvey(value, JSON.stringify(survey));
    alert("Saved!");
}

function deleteSurvey() {
    $.ajax({
        url:'deletesurvey.php?index=' + value,
        complete: function (response) {
             getList();
        },
        error: function () {
         alert("Bummer, there was an error!");
        }
    });
    return false;
}

function openForm() {
    document.getElementById("newQuestionForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("newQuestionForm").style.display = "none";
  }