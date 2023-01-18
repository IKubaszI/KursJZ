function checkAnswers() {
    var correctAnswers = 0;
    var correctAnswers1 = ["a"];
    var correctAnswers2 = ["b"];
    var correctAnswers3 = ["utf-8"];
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.getElementById("question3").value;


    if(question1 && correctAnswers1.includes(question1.value)) {
        correctAnswers++;
        document.getElementById("roz1").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz1").style.color = "green";
    }else{
    document.getElementById("roz1").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz1").style.color = "red";
    }

    if(question2 && correctAnswers2.includes(question2.value)) {
        correctAnswers++;
        document.getElementById("roz2").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz2").style.color = "green";
    }else{
    document.getElementById("roz2").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz2").style.color = "red";
    }

    if(correctAnswers3.includes(question3.toLowerCase())) {
        correctAnswers++;
        document.getElementById("roz3").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz3").style.color = "green";
    }else{
    document.getElementById("roz3").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz3").style.color = "red";
    }
    

    document.getElementById("result").innerHTML = "Poprawnych odpowiedzi: " + correctAnswers;
    document.getElementById("result").style.color = "green";
}
function checkAnswers2() {
    var correctAnswers = 0;
    var correctAnswers1 = ["a"];
    var correctAnswers2 = ["b"];
    var correctAnswers3 = [".json"];
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.getElementById("question3").value;


    if(question1 && correctAnswers1.includes(question1.value)) {
        correctAnswers++;
        document.getElementById("roz1").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz1").style.color = "green";
    }else{
    document.getElementById("roz1").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz1").style.color = "red";
    }

    if(question2 && correctAnswers2.includes(question2.value)) {
        correctAnswers++;
        document.getElementById("roz2").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz2").style.color = "green";
    }else{
    document.getElementById("roz2").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz2").style.color = "red";
    }

    if(correctAnswers3.includes(question3.toLowerCase())) {
        correctAnswers++;
        document.getElementById("roz3").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz3").style.color = "green";
    }else{
    document.getElementById("roz3").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz3").style.color = "red";
    }
    

    document.getElementById("result").innerHTML = "Poprawnych odpowiedzi: " + correctAnswers;
    document.getElementById("result").style.color = "green";
}
function checkAnswers3() {
    var correctAnswers = 0;
    var correctAnswers1 = ["c"];
    var correctAnswers2 = ["b"];
    var correctAnswers3 = ["#naglowek"];
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.getElementById("question3").value;


    if(question1 && correctAnswers1.includes(question1.value)) {
        correctAnswers++;
        document.getElementById("roz1").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz1").style.color = "green";
    }else{
    document.getElementById("roz1").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz1").style.color = "red";
    }

    if(question2 && correctAnswers2.includes(question2.value)) {
        correctAnswers++;
        document.getElementById("roz2").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz2").style.color = "green";
    }else{
    document.getElementById("roz2").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz2").style.color = "red";
    }

    if(correctAnswers3.includes(question3.toLowerCase())) {
        correctAnswers++;
        document.getElementById("roz3").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz3").style.color = "green";
    }else{
    document.getElementById("roz3").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz3").style.color = "red";
    }
    

    document.getElementById("result").innerHTML = "Poprawnych odpowiedzi: " + correctAnswers;
    document.getElementById("result").style.color = "green";
}
function checkAnswers4() {
    var correctAnswers = 0;
    var correctAnswers1 = ["a"];
    var correctAnswers2 = ["b"];
    var correctAnswers3 = ["tak"];
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.getElementById("question3").value;


    if(question1 && correctAnswers1.includes(question1.value)) {
        correctAnswers++;
        document.getElementById("roz1").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz1").style.color = "green";
    }else{
    document.getElementById("roz1").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz1").style.color = "red";
    }

    if(question2 && correctAnswers2.includes(question2.value)) {
        correctAnswers++;
        document.getElementById("roz2").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz2").style.color = "green";
    }else{
    document.getElementById("roz2").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz2").style.color = "red";
    }

    if(correctAnswers3.includes(question3.toLowerCase())) {
        correctAnswers++;
        document.getElementById("roz3").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz3").style.color = "green";
    }else{
    document.getElementById("roz3").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz3").style.color = "red";
    }
    

    document.getElementById("result").innerHTML = "Poprawnych odpowiedzi: " + correctAnswers;
    document.getElementById("result").style.color = "green";
}
function clearForm() {
document.getElementById("quizForm").reset();
}
function checkAnswers5() {
    var correctAnswers = 0;
    var correctAnswers1 = ["a"];
    var correctAnswers2 = ["a"];
    var correctAnswers3 = [".md"];
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.getElementById("question3").value;


    if(question1 && correctAnswers1.includes(question1.value)) {
        correctAnswers++;
        document.getElementById("roz1").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz1").style.color = "green";
    }else{
    document.getElementById("roz1").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz1").style.color = "red";
    }

    if(question2 && correctAnswers2.includes(question2.value)) {
        correctAnswers++;
        document.getElementById("roz2").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz2").style.color = "green";
    }else{
    document.getElementById("roz2").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz2").style.color = "red";
    }

    if(correctAnswers3.includes(question3.toLowerCase())) {
        correctAnswers++;
        document.getElementById("roz3").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz3").style.color = "green";
    }else{
    document.getElementById("roz3").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz3").style.color = "red";
    }
    

    document.getElementById("result").innerHTML = "Poprawnych odpowiedzi: " + correctAnswers;
    document.getElementById("result").style.color = "green";
}
function clearForm() {
document.getElementById("quizForm").reset();
}
function checkAnswers6() {
    var correctAnswers = 0;
    var correctAnswers1 = ["a"];
    var correctAnswers2 = ["a"];
    var correctAnswers3 = [".xml"];
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.getElementById("question3").value;


    if(question1 && correctAnswers1.includes(question1.value)) {
        correctAnswers++;
        document.getElementById("roz1").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz1").style.color = "green";
    }else{
    document.getElementById("roz1").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz1").style.color = "red";
    }

    if(question2 && correctAnswers2.includes(question2.value)) {
        correctAnswers++;
        document.getElementById("roz2").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz2").style.color = "green";
    }else{
    document.getElementById("roz2").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz2").style.color = "red";
    }

    if(correctAnswers3.includes(question3.toLowerCase())) {
        correctAnswers++;
        document.getElementById("roz3").innerHTML = "Poprawna odpowiedź";
        document.getElementById("roz3").style.color = "green";
    }else{
    document.getElementById("roz3").innerHTML = "Błędna odpowiedź";
    document.getElementById("roz3").style.color = "red";
    }
    

    document.getElementById("result").innerHTML = "Poprawnych odpowiedzi: " + correctAnswers;
    document.getElementById("result").style.color = "green";
}
function clearForm() {
document.getElementById("quizForm").reset();
}

