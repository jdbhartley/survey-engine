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

    Survey.prototype.DeleteQuestion = function (index) {
        this.questions.splice(index, 1);
    }

    Survey.prototype.GetNumber = function (index) {
        return this.num;
    }

    Survey.prototype.display = function () {
        var returnString = "";
        returnString += "<p class='survey'>" + this.name + "</p>";
        var index = 0;
        this.questions.forEach(function (entry) {
            var q = new Question(entry);
            returnString += String(q.display(index));
            index++; 
        });

        return String(returnString);
    }

    Survey.prototype.displayGen = function () {
        var returnString = "";
        returnString += "<p class='survey'>" + this.name + "</p>";
        var index = 0;
        this.questions.forEach(function (entry) {
            var q = new Question(entry);
            returnString += String(q.displayGen(index));
            index++; 
        });

        return String(returnString);
    }
};