/*Loading previous score from local storage upon loading page*/
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}
updateScoreElement();
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("class") === "js-playGame") {
        selectAnimals();
        alert(`Hey, a random class will be selected, from which an animal will be assigned to you.`)
        alert("Rank scores for your animal classes will now be calculated")
        calculateScores();
        playCount();
      }
    })
  }
});

const birdsArray = ['African Fish Eagle', 'Ostrich', 'Vulture', 'Marabou Stork', 'Grey Crowned Crane', 'Lilac-Breasted Roller', 'Yellow-Billed Stork', 'African Jacana', 'African Penguin', 'African Pygmy Kingfisher', 'African Skimmer', 'Augur Buzzard', 'Black-Bellied Bustard', 'Black-Winged Lapwing', 'Blue-Naped Mousebird', 'Cattle Egret', 'Collared Pratincole', 'Common Bulbul'];

const fishArray = ['Nile Perch', 'Tilapia', 'Tigerfish', 'Catfish', 'Silverfish', 'Lungfish'];

const mammalsArray = ['African Elephant', 'Black Rhinoceros', 'Cheetah', 'Spotted Hyena', 'Lion', 'African Wild Dog', 'Baboon', 'Hippopotamus', 'Giraffe', 'Zebra', 'Impala', 'Vervet Monkey', 'Meerkat', 'African Buffalo', 'Leopard', 'Gorilla'];

const reptilesArray = ['Nile Crocodile', 'Tortoise', 'Black Mamba', 'Puff Adder', 'Nile Monitor Lizard', 'Python', 'King Cobra'];

const predatorLeague = ['African Fish Eagle', 'Augur Buzzard', 'African Pygmy Kingfisher', 'Vulture', 'Nile Perch', 'Catfish', 'Cheetah', 'Marabou Stork', 'Spotted Hyena', 'Lion', 'Leopard', 'African Wild Dog', 'Nile Crocodile', 'Python', 'King Cobra'];

let allAnimalsArray = [''];

let randomArray = [''];

let myAnimal = [''];


function selectAnimals() {

  allAnimalsArray = [birdsArray, mammalsArray, reptilesArray, fishArray];

  randomArray = allAnimalsArray[Math.floor(Math.random() * allAnimalsArray.length)];

  myAnimal = randomArray[Math.floor(Math.random() * randomArray.length)];

  wizardsAnimal = randomArray[Math.floor(Math.random() * randomArray.length)];

  document.getElementById("js-myAnimal").innerHTML = `You have been assigned: ${myAnimal}.`;

  document.getElementById("js-wizardsAnimal").innerHTML = `The Animal Wizard has chosen: ${wizardsAnimal}.`;
};


// Rank the lists based on their length
const rankedLists = [birdsArray, mammalsArray, reptilesArray, fishArray].sort((a, b) => b.length - a.length);


/**Assign a rank score based on the index of the animal chosen in their respective animal list from the first 4 lists (higher index =2, lower index =1)
 */
let myRankScore = 0
let wizardsRankScore = 0;
let mySurvivalScore = 0;
let wizardSurvivalScore = 0;
let myTotalScore = 0
let wizardsTotalScore = 0

function calculateScores() {

  let myRankScore, wizardsRankScore;
  rankedLists.forEach(list => {
    let myAnimalIndex = list.indexOf(myAnimal);
    let wizardsAnimalIndex = list.indexOf(wizardsAnimal);
    if (myAnimalIndex !== -1) {
      myRankScore = myAnimalIndex >= list.length / 2 ? 2 : 1;
    }
    if (wizardsAnimalIndex !== -1) {
      wizardsRankScore = wizardsAnimalIndex >= list.length / 2 ? 2 : 1;
    }
  });
  document.getElementById('js-myRankScore').innerHTML = `Your rank score is:  ${myRankScore}`;

  document.getElementById('js-wizardRankScore').innerHTML = `Animal Wizard's rank score is:  ${wizardsRankScore}`;

  /*Assign survival score of 2, otherwise assign a survival score of zero for animal selected from predatorLeague. */

  if (predatorLeague.includes(myAnimal)) {
    mySurvivalScore = 2;
  } else {
    mySurvivalScore = 0;
  }
  if (predatorLeague.includes(wizardsAnimal)) {
    wizardSurvivalScore = 2;
  } else {
    wizardSurvivalScore = 0;
  }

  /*If both selected animals are from the same list, assign a survival score of 2 for higher index and a survival score of 1 for lower index.*/

  rankedLists.forEach(list => {
    let myAnimalIndex = list.indexOf(myAnimal);
    let wizardsAnimalIndex = list.indexOf(wizardsAnimal);
    if (myAnimalIndex !== -1 && wizardsAnimalIndex !== -1) {
      if (myAnimalIndex > wizardsAnimalIndex) {
        mySurvivalScore = 2;
        wizardSurvivalScore = 1;
      } else {
        mySurvivalScore = 1;
        wizardSurvivalScore = 2;
      }
    }
  });

  // Calculate total score for each person

  myTotalScore = myRankScore + mySurvivalScore;
  wizardsTotalScore = wizardsRankScore + wizardSurvivalScore;

  // Communicate results to the user using the DOM

  document.getElementById('js-mySurvivalScore').innerHTML = `Your survival score is:  ${mySurvivalScore}`;

  document.getElementById('js-wizardSurvivalScore').innerHTML = `Animal Wizard's survival score is:  ${wizardSurvivalScore}`;

  document.getElementById('js-wizardsTotalScore').innerHTML = `Animal Wizard's total score is:  ${wizardsTotalScore}`;

  document.getElementById('js-myTotalScore').innerHTML = `Your total score is:  ${myTotalScore}`;

  if (myTotalScore > wizardsTotalScore) {
    score.wins += 1;
    document.getElementById('js-wins').innerHTML = score.wins;
    document.getElementById('js-scoreFeedback').innerHTML = 'Wow! Good move against the wizard!';
  } else if (myTotalScore < wizardsTotalScore) {
    score.losses += 1;
    document.getElementById('js-losses').innerHTML = score.losses;
    document.getElementById('js-scoreFeedback').innerHTML = 'Sorry! The wizard comes in top.';
  } else if (myTotalScore === wizardsTotalScore) {
    score.ties += 1;
    document.getElementById('js-ties').innerHTML = score.ties;
    document.getElementById('js-scoreFeedback').innerHTML = 'Hey, its a tie. Keep going.';
  }

}

function updateScoreElement() {
  document.getElementById('js-wins').innerHTML = score.wins;
  document.getElementById('js-losses').innerHTML = score.losses;
  document.getElementById('js-ties').innerHTML = score.ties;
}
updateScoreElement();

/** Store the score in local storage using JSON because local storage supports strings only*/

localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-reset-score')
  .addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    clearPlayArea();
    document.getElementById('js-playMoves').innerHTML = '';
  });

function clearPlayArea() {
  document.getElementById('js-wizardsAnimal').innerHTML = '';
  document.getElementById('js-myAnimal').innerHTML = '';
  document.getElementById('js-myRankScore').innerHTML = '';
  document.getElementById('js-mySurvivalScore').innerHTML = '';
  document.getElementById('js-myTotalScore').innerHTML = '';
  document.getElementById('js-wizardRankScore').innerHTML = '';
  document.getElementById('js-wizardSurvivalScore').innerHTML = '';
  document.getElementById('js-wizardsTotalScore').innerHTML = '';
}
// add keydown functionality to enable play with key 'p'.
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'p') {
    selectAnimals();
    alert(`Hey, a random class will selected, from which an animal will be assigned to you.`)
    alert("Rank scores for your animal classes will now be calculated")
    calculateScores();
  }
});

/**
 *  Enable click counts for the play button.
*/
let moveCount = 0;
function playCount() {
  moveCount += 1;
  document.getElementById('js-countMoves').innerHTML = `Moves: ${moveCount}`;
}