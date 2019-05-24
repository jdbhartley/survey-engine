//Stores the selected index
var value;

//Handles click event for list
$(document).ready(function () {
    // do jQuery
    $("#selectable tr").live("click" , function () {
        if (this.rowIndex > 0) {
            $(this).addClass('selected').siblings().removeClass('selected');
            value = $(this).find('td:first').html();
        }
    });
})

// handles the click event, sends the query
function getList() {
    $.ajax({
       url:'listsurveys.php',
       complete: function (response) {
           $('#output').html(formatOutput(response.responseText));
       },
       error: function () {
           $('#output').html('Bummer: there was an error!');
       }
   });
   return false;
 }

 function formatOutput(responseTxt) {
    var res = responseTxt.split(":");
    var resString = "<table width=100% id='selectable'>";
    resString += "<th>ID</th><th>Name</th>"

    for (i = 0; i < res.length - 2; i = i + 2) {
        resString += "<tr width=100% class='selectable'><td>" + res[i] + "</td>" + "<td>" + res[i + 1] + "</td></tr>";
    }

    resString += "</table>";
    return resString;
 }