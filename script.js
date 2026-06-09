const gameTitle = document.getElementById("game-title");
const scoreDisplay = document.getElementById("score");
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
        text: "What is the first?",
        answers: [
            "Tim Berners-Lee",
            "Bill Gates",
            "Linus Torvalds",
            "Ada Lovelace"
        ],
        correct: 0 //index of the correct answer in the answers array
    },
    // four more
    {
        text: "What is the second",
        answers: [
            "Tim Berners-Lee",
            "Bill Gates",
            "Linus Torvalds",
            "Ada Lovelace"
        ],
        correct: 0 //index of the correct answer in the answers array
    },
    {
        text: "What is the third?",
        answers: [
            "Tim Berners-Lee",
            "Bill Gates",
            "Linus Torvalds",
            "Ada Lovelace"
        ],
        correct: 0 //index of the correct answer in the answers array
    },
    {
        text: "What is the fourth?",
        answers: [
            "Tim Berners-Lee",
            "Bill Gates",
            "Linus Torvalds",
            "Ada Lovelace"
        ],
        correct: 0 //index of the correct answer in the answers array
    },
    {
        text: "What is the fifth?",
        answers: [
            "Tim Berners-Lee",
            "Bill Gates",
            "Linus Torvalds",
            "Ada Lovelace"
        ],
        correct: 0 //index of the correct answer in the answers array
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
    
  btnsArray.forEach(() => 
    {
        answerList.textContent = currentQ.answers;
        answerList.className = "answer-btn";
    }
);
  // 5. Hide the next button
    nextBtn.className = "hidden";
  // 6. Remove the "answered" class from questionCard
    questionCard.classList.remove('answered');
}



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