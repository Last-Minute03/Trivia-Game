const gameTitle = document.getElementById("game-title")
const scoreDisplay = document.getElementById("score")
const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const questionCard = document.getElementById("question-card")
const answerList = document.getElementById("answer-list")
const nextBtn = document.getElementById("next-btn")
const endScreen = document.getElementById("end-screen")
// select #question-number  → store in questionNumber
// select #question-text    → store in questionText
// select #question-card    → store in questionCard
// select #answer-list      → store in answerList
// select #next-btn         → store in nextBtn
// select #end-screen       → store in endScreen

const answerBtnsCollection = document.getElementsByClassName("answer-btn")
const answerBtnsNodeList = document.querySelectorAll(".answer-btn")
// select ".answer-btn" using querySelectorAll → store in answerBtnsNodeList

// getElementsByClassName returns an ________. HTML collection 
// querySelectorAll returns a ________. NodeList
// To use .map() on either, convert with ________. Array.from() OR [...  ]