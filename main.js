// remaining logic
//  make user choose the deficulty
// create more functions
// make categories for every 


const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

const lvls = {
  "easy": 5,
  "normal": 3,
  "hard": 2,
}

let defaultLevelName = "normal";
let defaultLevelSeconds = lvls[defaultLevelName];

let startButton = document.querySelector('.start');
let lvlNameSpan = document.querySelector('.message .level');
let secondsSpan = document.querySelector('.message .seconds');
let randomWordSpan = document.querySelector('.the-word');
let input = document.querySelector('.input');
let upcomingWords = document.querySelector('.upcoming-words');
let scoreGot = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let timeLeftSpan = document.querySelector('.time span');
let finishMessage = document.querySelector('.finish');

lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

input.onpaste = function () {
  return false;
}

startButton.onclick = function () {
  this.remove();
  input.focus();
  generateRandomWord();
}

function generateRandomWord () {
  let randomNumber = Math.floor(Math.random() * words.length);
  let randomWord = words[randomNumber];
  words.splice(randomNumber, 1);
  randomWordSpan.innerHTML = randomWord;
  console.log(randomWord)
  upcomingWords.innerHTML = '';
  words.forEach((e) => { 
    let div = document.createElement('div');
    let text = document.createTextNode(e);
    div.appendChild(text);
    upcomingWords.appendChild(div);
  })
  startPlaying();
}

function startPlaying() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML == 0) {
      clearInterval(start);
      if (randomWordSpan.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
        input.value = '';
        scoreGot.innerHTML++;
        if (words.length > 0) {
          generateRandomWord();
        } else {
          let spanGood = document.createElement('span');
          spanGood.className = 'good';
          spanTextGood = document.createTextNode('congratulations');
          spanGood.appendChild(spanTextGood);
          finishMessage.appendChild(spanGood);
        }
      } else {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Game Over');
        span.appendChild(spanText);
        span.className = 'bad';
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}