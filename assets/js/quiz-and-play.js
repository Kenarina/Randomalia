
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("class") === "birds") {
        alert(" Hey, You selected 'Birds'.");
      } else if (this.getAttribute("class") === "fish") {
        alert(" Wow!, You selected 'Fish'.");
      } else if (this.getAttribute("class") === "mammals") {
        alert(" Interesting! You selected 'Mammals'.");
      } else if (this.getAttribute("class") === "reptiles") {
        alert(" Hmmmm, You selected 'Reptiles'.");
      }
    })
  }
})


function compareAnimals() {

}

function displayMyScore() {

}

function displayComputerScore() {

}

function displayFeedbackMessage() {

}

function calculateWins() {

}

function incrementScores() {

}

function congratulateWinner() {

}

function resetScore() {

}