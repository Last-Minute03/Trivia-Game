const gameTitle = document.getElementById("game-title");
const scoreDisplay = document.getElementById("score");

// can do queryselector and for the () just add the # before the id, ex: #question-number
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const questionCard = document.getElementById("question-card");
const answerList = document.getElementById("answer-list");
const nextBtn = document.getElementById("next-btn");
const endScreen = document.getElementById("end-screen");
// select #question-number  → store in questionNumber
// select #question-text    → store in questionText
// select #question-card    → store in questionCard
// select #answer-list      → store in answerList
// select #next-btn         → store in nextBtn
// select #end-screen       → store in endScreen

const answerBtnsCollection = document.getElementsByClassName("answer-btn");
const answerBtnsNodeList = document.querySelectorAll(".answer-btn");
// select ".answer-btn" using querySelectorAll → store in answerBtnsNodeList
console.log(">>>>>>>>>>>>>>",answerBtnsNodeList) 
const questions = [
    {
        text: "我们在美国吗?",
        answers: [
            "不，我们在中国",
            "对，我们在美国",
            "我不知道",
            "不，我们在日本"
        ],
        correct: 1 //index of the correct answer in the answers array
    },
    // four more
    {
        text: "What does triple T mean?",
        answers: [
            "Trouble in Terrorsit Town",
            "Tung Tung Tung Sahur",
            "Tech Tips Trivia",
            "TTT"
        ],
        correct: 1 //index of the correct answer in the answers array
    },
    {
        text: "Do you like this quiz?",
        answers: [
            "No",
            "No",
            "Yes",
            "No"
        ],
        correct: 2 //index of the correct answer in the answers array
    },
    {
        text: "What is the best anime OAT?",
        answers: [
            "One Piece",
            "Death Note",
            "Golden Boy",
            "Tensura"
        ],
        correct: 0 //index of the correct answer in the answers array
    },
    {
        text: "What language was the first question in?",
        answers: [
            "Japanese",
            "Korean",
            "Swedish",
            "Chinese"
        ],
        correct: 3 //index of the correct answer in the answers array
    },
    
]

let currentIndex = 0
let score = 0

function loadQuestion(index) {
  // 1. Get the current question object out of the questions array using index
    let currentQ = questions[index];
  // 2. Update questionNumber.textContent — should read "Question X of Y"
  //    hint: use index + 1 for the display number, questions.length for the total
    questionNumber.textContent = "Question " + (index + 1) + " of " + questions.length; 
  // 3. Update questionText.textContent with the question's text
    questionText.textContent = currentQ.text;
  // 4. Loop over the four answer buttons and for each one:
  //    - Set its textContent to the matching answer from the question object
  //    - Reset its className back to "answer-btn" to clear any leftover .correct / .wrong / .disabled
  //    hint: convert answerBtnsNodeList to a real array first, then use forEach
  const btnsArray = Array.from(answerBtnsNodeList)
    console.log("<<<<<<",btnsArray);
  btnsArray.forEach((button, i) => //element, index
    {
        button.textContent = currentQ.answers[i];
        button.className = "answer-btn";
        button.disabled = false;
    }
);
  // 5. Hide the next button
    nextBtn.className = "hidden"; //can also do nextBtn.classList.add("hidden")
  // 6. Remove the "answered" class from questionCard
    questionCard.classList.remove('answered');
}

function showEndScreen(){

// 1. Hide the question card

    questionCard.classList.add("hidden");

  // 2. Show the end screen (it started with class="hidden" — remove that now)
    endScreen.classList.remove("hidden");

    // endScreen.innerHTML = "";


  // 3. Create an <h2> and set its textContent to show the final score
  //    e.g. "You scored 3 out of 5"
  //    hint: use the score and questions.length variables
    const finalScore = document.createElement("h2");
    finalScore.textContent = "You scored " + score + " out of " + questions.length;
  // 4. Create a <p> for an encouragement message
  //    Write a conditional with at least two different messages
  //    (e.g. one for a perfect score, one for passing, one for failing)
    const cope = document.createElement("p");
    if (score === questions.length){
        cope.textContent = "You are a chad gamer aura monster!!";
    }
    else if (score < 3) {
        cope.textContent = "It aint much, but it was honest effort. Aimlabs is free btw";
    }
    else {
        cope.textContent = " You did it! Congrats! So happy!";
    }
  // 5. Create a <button>, set its id to "restart-btn" and its textContent to "Play Again"
    const playAgn = document.createElement("button");
    playAgn.id = "restart-btn";
    playAgn.textContent = "Play Again";
  // 6. Append all three elements to endScreen
  //    note: createElement builds the node in memory — appendChild is what puts it on the page
    endScreen.append(finalScore);
    endScreen.append(cope);
    endScreen.append(playAgn);
}

answerList.addEventListener("click", (event) => {
  // 1. If the click was not on a BUTTON element, return early and do nothing
  //    hint: check event.target.tagName — it will be the string "BUTTON" if a button was clicked
        if (event.target.tagName !== "BUTTON"){
            return;
        }
  // 2. Store the clicked button and figure out which index it is in the list
  //    hint: convert answerBtnsNodeList to an array and use .indexOf(event.target)
  
        let clickedBtn = event.target;  //THIS IS THE BUTTON THAT THE USER CLICKS
        let clickedIndex = [...answerBtnsNodeList].indexOf(event.target);
  // 3. Get the correct answer index from the current question in the data array
        let correctAns = questions[currentIndex].correct;
  // 4. Compare: did the player pick the right one?
  //    - If correct: add the "correct" class to the clicked button, increment score,
  //      and update scoreDisplay.textContent
  //    - If wrong: add the "wrong" class to the clicked button,
  //      and add "correct" to the button at the correct index to reveal it
        if (clickedIndex === correctAns){     //will compare the user selected choice to the correct answer choice in the index OF THE answer options which is stated within the questions array as correct
            clickedBtn.classList.add("correct");
            score++;
            scoreDisplay.textContent = score;
        }
        else{
            clickedBtn.classList.add("wrong");
            answerBtnsNodeList[correctAns].classList.add("correct");
        }
  // 5. Disable all four answer buttons so the player can't change their answer
  //    hint: convert to a real array and use forEach to add "disabled" to each
        [...answerBtnsNodeList].forEach((button)=>{
            button.disabled = true;
        });
  // 6. Add "answered" to questionCard and remove "hidden" from nextBtn
        questionCard.classList.add('answered');
        nextBtn.classList.remove('hidden');

// Why does clicking a button inside #answer-list trigger this listener?
// Answer: cause we have a click in addEventListener so when a button is clicked within answerList (which are only buttons) then the event happens
//
// What is the difference between event.target and event.currentTarget here?
// event.target  → is the button the user selects
// event.currentTarget → is the answerList or the container that is being looked into

});

nextBtn.addEventListener("click", () =>
{
    currentIndex++;
    if( currentIndex < questions.length ){
        loadQuestion(currentIndex);
    }
    else{
        showEndScreen();
        nextBtn.classList.add("hidden");
    }
}
);

endScreen.addEventListener("click",(event)=>
{

    const restartBtn = event.target.closest("#restart-btn");

  // 1. Return early if the clicked element is not the restart button
  //    hint: check event.target.id
  //    think: why can't we just do document.getElementById("restart-btn") at the top of the file?
// console.log("??????", event.target)
    if (!restartBtn){               //  if(event.target.id !== "restart-btn"){
        return;                     //  return;
    }                               //  }
    
// code on the LEFT works because    |  This code is the normal code which only targets
// google translate adds a font      |  the button itself, it doesnt search for the 
// on the layer with anything that   |  closest thing like the restartBtn variable does
// has text since its translating    |  hence why it wouldnt allow clicks directly on it


  // 2. Reset both state variables (score and currentIndex) to 0
  //    - Also update scoreDisplay.textContent so the header reflects the reset

    score = 0;
    currentIndex = 0;

    scoreDisplay.textContent = score;

  // 3. Clear everything showEndScreen built
  //    hint: setting endScreen.innerHTML to "" removes all child elements at once

    endScreen.innerHTML = "";

  // 4. Bring the question card back

    questionCard.classList.remove("hidden");
    
  // 5. Load the first question

    loadQuestion(0);

}
);



// getElementsByClassName returns an ________. HTML collection
// querySelectorAll returns a ________. NodeList
// To use .map() on either, convert with ________. Array.from() OR [...  ]

gameTitle.textContent = "⚡ Quick Fire Trivia"; //changes the name so in this case adds the bold symbol

console.log("First question:", questionText.textContent); //check console log in web *use F12

questionNumber.textContent = questionNumber.textContent.toUpperCase(); // makes it upercase

const firstBtn = answerBtnsNodeList[0];
const firstLi = firstBtn.parentElement;

console.log("The first button:", firstBtn);
console.log("Its parent <li>:", firstLi);
console.log("The <ul> that holds all buttons:", firstLi.parentElement);
//for the 5 lines of code above check *F12 and hover over the console info to see the nice colors i guess

// >>>>>>>>   questionCard.classList.add("answered");
// questionCard.classList.remove("answered")

// >>>>>>>>   questionCard.classList.remove("answered");


loadQuestion(0)