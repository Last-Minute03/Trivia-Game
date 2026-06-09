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

questionCard.classList.add("answered");
// questionCard.classList.remove("answered")

questionCard.classList.remove("answered");
