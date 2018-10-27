window.onload = function() {
    produceQuestionBlock(questionIndex);
  };

// Chapter 1 Establish global variables
// 1.1- Question Variables
var questionIndex = 0;
var questionData = [
    {Q: "How old are you?",
    r: ["20", "21", "22", "23"],
    v: [20,21,22,23],
    type: "age"
    },
    {Q: "How much is your salary pre-tax?",
    r: ["50,000", "70,000", "90,000", "110,000"],
    v: [50000,70000,90000,110000],
    type: "income"
    },
    {Q: "How much are your additional incomes after tax?",
    r: ["0", "5,000", "10,000", "50,000"],
    v: [0,5000,10000,50000],
    type: "income"
    },
    {Q: "Do the markets interest you? If yes, how many hours would you spend a week to study them?",
    r: ["0", "1", "5", "10"],
    v: [0,1,5,10],
    type: "income"
    },
    {Q: "What kind of house do you want to live in?",
    r: ["Minimalist", "Just Right", "Roomy", "Big Baller"],
    v: [200000,400000,750000,1500000],
    type: "cost"
    },
    {Q: "What kind of car do you want to drive?",
    r: ["Used", "Functional but New", "Mercedes, BMW, Audi, Tesla.", "Dream Car"],
    v: [8000,20000,40000,150000],
    type: "cost"
    },
    {Q: "Would you want money to invest in other projects? How much would be the biggest you would invest?",
    r: ["0", "5000", "10000", "50000"],
    v: [0,5000,10000,50000],
    type: "cost"
    },
];
//1.2 - Initializing User Inputs
var userAge = 0;
var userIncome = 0;
var userTax = 0;
var userOtherIncome = 0;

var userTotalCost = 0;

// Chapter 2 Functions
// 2.1- Function to Produce the HTML holders to hold card
function productQuestionShell () {
    var questionCard = $("<div>");
        questionCard.attr("class", "card");
    var cardQuestion = $("<h2>");
        cardQuestion.attr("class", "question");
    var cardOptions = $("<div>");
        cardOptions.attr("class", "answers");
    questionCard.append(cardQuestion);
    questionCard.append(cardOptions);
    $("#block-container").append(questionCard);
}


// 2.2 Create question block uses 2.1
function produceQuestionBlock (qindex) {
    var blockGrab = questionData[qindex];
    // Loop through blocks
    if (questionIndex < 7) {
        productQuestionShell();
        $(".question").text(blockGrab.Q);
        for (var j = 0; j < blockGrab.r.length; j++) {
                var questionButt = $("<button>")
                questionButt.text(blockGrab.r[j]);
                questionButt.attr("class", "answerOption");
                questionButt.attr("value",blockGrab.v[j]);
                questionButt.attr("type",blockGrab.type);
            $(".answers").append(questionButt);
        }
        clickHandler();
    } else {
        var userInputsArray = [userAge, userIncome, userTotalCost];
        var resultsLabel = ["Your Age: ", "Your Income: ", "Your Total Cost: "];
        productQuestionShell();
        $(".question").text("Your Results");
        console.log("received 2");
        for (var i = 0; i < userInputsArray.length; i++) {
            console.log(i);
            var resultHeader = $("<h4>")
                resultHeader.text(resultsLabel[i] + userInputsArray[i]);
            $(".answers").append(resultHeader);
        }
    }

}
// Function that takes a clickHandler: increases question index, adds values of options to gloval variables, 
function clickHandler () {
$(".answerOption").on("click",function(){
    var choiceVal = $(this).val();
    var choiceValInt = parseInt(choiceVal);
    var choiceType = $(this).attr("type");
    if (choiceType === "age") {
        alert("Thanks for your input");
        questionIndex++;
        console.log(questionIndex);
        userAge += choiceValInt; 
        console.log("Your Age: " + userAge);
        $("#block-container").html("");
        produceQuestionBlock(questionIndex);
    } else if (choiceType === "income") {
        alert("Thanks for your input");
        questionIndex++;
        console.log(questionIndex);
        userIncome += choiceValInt;
        console.log("Your Income: " + userIncome); 
        $("#block-container").html("");
        produceQuestionBlock(questionIndex);
    } else {
        alert("Thanks for your input");
        questionIndex++;
        console.log(questionIndex);
        userTotalCost += choiceValInt;
        console.log("Your Cost: " +userTotalCost);  
        $("#block-container").html("");
        produceQuestionBlock(questionIndex);
    }
})
}



// clickHandler();

// Chapter 3 Game parameters
