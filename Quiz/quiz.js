// scripts here:

function openQuiz(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it

    document.getElementById("defaultOpen").click();

function submitQuiz() {
    
     var userPreference;

    if (confirm("Are you sure to submit quizzes ?") == true) {

        // 	document.getElementById("msg").innerHTML = userPreference;

        console.log('submitted');

        // get each answer score
        function answerScore (qName) {
            var radiosNo = document.getElementsByName(qName);
    
            for (var i = 0, length = radiosNo.length; i < length; i++) {
                   if (radiosNo[i].checked) {
            // do something with radiosNo
                    var answerValue = Number(radiosNo[i].value);
                }
            }
            // change NaNs to zero
            if (isNaN(answerValue)) {
                answerValue = 0;
            }
            return answerValue;
        }
    
    // calc score with answerScore function
        var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
        console.log("CalcScore: " + calcScore); // it works!
    
    // function to return correct answer string
        function correctAnswer (correctStringNo, qNumber) {
            console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
            return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
                (document.getElementById(correctStringNo).innerHTML) + "</strong>");
         }
    
    // print correct answers only if wrong (calls correctAnswer function)
        if (answerScore('q1') === 0) {
            document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
        }
        if (answerScore('q2') === 0) {
            document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
        }
        if (answerScore('q3') === 0) {
            document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
        }
        if (answerScore('q4') === 0) {
            document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
        }
        if (answerScore('q5') === 0) {
            document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
        }
        if (answerScore('q6') === 0) {
            document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
        }
        if (answerScore('q7') === 0) {
            document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
        }
        if (answerScore('q8') === 0) {
            document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
        }
        if (answerScore('q9') === 0) {
            document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
        }
        if (answerScore('q10') === 0) {
            document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
        }
    
    // calculate "possible score" integer
        var questionCountArray = document.getElementsByClassName('question');
    
        var questionCounter = 0;
        for (var i = 0, length = questionCountArray.length; i < length; i++) {
            questionCounter++;
        }
    
    // show score as "score/possible score"
        var showScore = "Your Score: " + calcScore +"/" + questionCounter;
    // if 4/4, "perfect score!"
        if (calcScore === questionCounter) {
            showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
        };
        document.getElementById('userScore').innerHTML = showScore;
    }
    
    else {
        userPreference = "Save Canceled!";
    }
}

function nextQuiz(event) {
    // openQuiz(event, 'Quiz 2');
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});

});