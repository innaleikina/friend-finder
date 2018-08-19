//=========================
//DISPLAY QUESTIONS AND CHOICES IN THE HTML
//=========================   

var questionsArr = ["Do you like horror films?", "How adventorous are you?", "Are you a night owl? ", "Do you enjoy hiking?", "Do you spend a lot of time on your computer?", "Are you active?", "Do you like quiet?", "Are you a reader?", "How mature are you?", "Do you like learning?"]

function populateQuestions() {
    for (var i = 0; i < questionsArr.length; i++) {
        var questionWrap = $("<div>");
        questionWrap.addClass("question-wrap");
        var p = $("<p>");
        p.addClass("questions");
        p.text(questionsArr[i]);
        var answerChoices = $("<select>");
        answerChoices.addClass("answerChoices")
        answerChoices.append('<option value="1">1</option> <option value ="2" > 2 </option> <option value = "3" > 3 </option> <option value ="4"> 4 </option> <option value ="5"> 5 </option>')
        questionWrap.append(p);
        questionWrap.append(answerChoices);
        $("#survey-wrap").append(questionWrap);

    }
    $("#survey-wrap").append('<input id="submit-button" type="submit">');
}

populateQuestions();




//=========================
//ON FORM SUBMIT 
//=========================   
$("#submit-button").on("click", function (event) {

    
  
    event.preventDefault();

    var answersUserArr = [];

    //find values of selected options and saves them to an array
    $('.answerChoices > option:selected').each(
        function (i) {
            answersUserArr[i] = $(this).text();
        });


    // console.log(answersUserArr);
    // Here we grab the form elements
    var newFriend = {
        name: $("#name-input").val().trim(),
        image: $("#photo-input").val().trim(),
        answers: answersUserArr
    };

    console.log(newFriend);
    getData(answersUserArr);
    
    if( newFriend.name.length > 0 && newFriend.image.length > 0){
        postNewUser(newFriend)
        displayModal();
     } else {
        alert("Please add your name and image");
     } 

 
})



//=========================
//FIND CLOSEST MATCH
//=========================   

function getData(userAnswerData) {
    var apiAnswerData = [];
    var currentURL = window.location.origin;
    $.ajax({
            url: currentURL + "/api/friends",
            method: "GET"
        })
        .then(function (friendsData) {
            // var totalDifference = 10000;
            // console.log(friendsData)
            var diffArr = []
            for (var i = 0; i < friendsData.length; i++) {
                var diff = 0;
                // apiAnswerData.push(friendsData[i].answers)
                for (var j = 0; j < friendsData[i].answers.length; j++) {
                    // Difference = absolute value of potential new friend scores minus scores inputted by new user
                    diff += Math.abs(parseInt(friendsData[i].answers[j]) - parseInt(userAnswerData[j]));


                }
                diffArr.push(diff);
            }
            console.log(diffArr);
            var index = 0;
            var value = diffArr[index];
            for (var i = 1; i < diffArr.length; i++) {
                if (diffArr[i] < value) {
                    value = diffArr[i];
                    index = i;
                }
            }
            matchName = friendsData[index].name;
            console.log(" match name : " + matchName)
            matchImage = friendsData[index].image;
            console.log(" match img : " + matchImage)

    
            $("#result-name-wrap").append('<h4 id="matchName">' + matchName +  '</h4>');
            $("#result-image-wrap").append('<img id="matchImg" src="' + matchImage + '" />');
        })
}

//=========================
//POST NEW USER
//=========================  

function postNewUser(newObj) {
    $.post("/api/friends", newObj,);
    $("#name-input").val("");
    $("#photo-input").val("");
}

//=========================
//DISPLAY RESULT
//=========================  

function displayModal(){
$("#result").css("display","block");
}

//=========================
//CLOSE MODAL
//=========================  

$("#close-modal").on("click", function(event){
    event.preventDefault();
    $("#result").css("display","none");
})