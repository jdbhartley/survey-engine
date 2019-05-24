/*
 * Author:      Dr. Mark E. Lehr
 * Purpose:     Survey class
 */

//Constructor for the Survey
function Survey(name, object) {
    this.questions = new Array();
    //this.num = number;
    //this.desc = description;
    var nArgs = arguments.length;

    if (nArgs == 0) {//Empty Question
        this.name = "";
    } else if (nArgs == 1) {//Name Provided no questions
        this.name = name;
    } else {
        this.name = object.name;
        this.questions = object.questions;
    }

    Survey.prototype.AddQuestion = function (question) {
        this.questions.push(question);
    }

    Survey.prototype.GetQuestion = function (index) {
        return this.questions[index];
    }

    Survey.prototype.GetNumber = function (index) {
        return this.num;
    }

    Survey.prototype.display = function () {
        var returnString = "";
        returnString += "<p class='survey'> Survey ID: " + value + "</p>";
        returnString += "<p class='survey'>" + this.name + "</p>";
        this.questions.forEach(function (entry) {
            var q = new Question(entry);
            returnString += String(q.display());
        });

        return String(returnString);
    }
};