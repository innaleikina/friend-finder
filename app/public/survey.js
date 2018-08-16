var questionsArr = ["Do you like horror films?", "How adventorous are you?", "Are you a night owl? ", "Do you enjoy hiking?", "Do you spend a lot of time on your computer?", "Are you active?", "Do you like quiet?", "Are you a reader?", "How mature are you?", "Do you like learning?"]





function populateQuestions() {
    for (var i = 0; i < questionsArr.length; i++) {
        var questionWrap = $("<div>");
        questionWrap.addClass("question-wrap");
        var p = $("<p>");
        p.addClass("questions");
        p.text(questionsArr[i]);
        var answerChoices = $("<select>");
        answerChoices.append('<option value="one">1</option> <option value = "two" > 2 </option> <option value = "three" > 3 </option> <option value = "four"> 4 </option> <option value = "four"> 5 </option>')
        questionWrap.append(p);
        questionWrap.append(answerChoices);
            $("#survey-wrap").append(questionWrap);
         
        }
        $("#survey-wrap").append('<input id="submit-button" type="submit">');
    }

    populateQuestions();