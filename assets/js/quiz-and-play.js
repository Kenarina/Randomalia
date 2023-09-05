
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("class") === "birds") {

        alert(`Hey, You selected 'Birds'.` );
      } else if (this.getAttribute("class") === "fish") {
        alert(" Wow!, You selected 'Fish'.");
      } else if (this.getAttribute("class") === "mammals") {
        alert(" Interesting! You selected 'Mammals'.");
      } else if (this.getAttribute("class") === "reptiles") {
        alert(" Hmmmm, You selected 'Reptiles'.");
      }
    })
  }
  selectAnimal();
})

function selectAnimal() {
  const birdsArray = ['African Fish Eagle', 'Ostrich', 'Vulture', 'Marabou Stork', 'Grey Crowned Crane', 'Lilac-Breasted Roller', 'Yellow-Billed Stork', 'African Jacana', 'African Penguin', 'African Pygmy Kingfisher', 'African Skimmer', 'Augur Buzzard', 'Black-Bellied Bustard', 'Black-Winged Lapwing', 'Blue-Naped Mousebird', 'Cattle Egret', 'Collared Pratincole', 'Common Bulbul'];

  const fishArray = ['Nile Perch', 'Tilapia', 'Tigerfish', 'Catfish', 'Silverfish', 'Lungfish'];

  const mammalsArray = ['African Elephant', 'Black Rhinoceros', 'Cheetah', 'Spotted Hyena', 'Lion', 'African Wild Dog', 'Baboon', 'Hippopotamus', 'Giraffe', 'Zebra', 'Impala', 'Vervet Monkey', 'Meerkat', 'African Buffalo', 'Leopard', 'Gorilla'];

  const reptilesArray = ['Nile Crocodile', 'Tortoise', 'Black Mamba', 'Puff Adder', 'Nile Monitor Lizard', 'Python', 'King Cobra'];

  const predatorLeague = ['African Fish Eagle', 'Augur Buzzard', 'African Pygmy Kingfisher', 'Vulture', 'Nile Perch', 'Catfish', 'Cheetah', 'Spotted Hyena', 'Lion', 'Leopard', 'African Wild Dog'];

  const allAnimalsArray = ['African Fish Eagle', 'Ostrich', 'Vulture', 'Marabou Stork', 'Grey Crowned Crane', 'Lilac-Breasted Roller', 'Yellow-Billed Stork', 'African Jacana', 'African Penguin', 'African Pygmy Kingfisher', 'African Skimmer', 'Augur Buzzard', 'Black-Bellied Bustard', 'Black-Winged Lapwing', 'Blue-Naped Mousebird', 'Cattle Egret', 'Collared Pratincole', 'Common Bulbul', 'Nile Perch', 'Tilapia', 'Tigerfish', 'Catfish', 'Silverfish', 'Lungfish', 'African Elephant', 'Black Rhinoceros', 'Cheetah', 'Spotted Hyena', 'Lion', 'African Wild Dog', 'Baboon', 'Hippopotamus', 'Giraffe', 'Zebra', 'Impala', 'Vervet Monkey', 'Meerkat', 'African Buffalo', 'Leopard', 'Gorilla', 'Nile Crocodile', 'Tortoise', 'Black Mamba', 'Puff Adder', 'Nile Monitor Lizard', 'Python', 'King Cobra'];

  const myBird = birdsArray[Math.floor(Math.random() * birdsArray.length)];

  console.log(myBird);

  const myMammal = mammalsArray[Math.floor(Math.random() * mammalsArray.length)];

  console.log(myMammal);


  const myReptile = reptilesArray[Math.floor(Math.random() * reptilesArray.length)];

  console.log(myReptile);


  const myFish = fishArray[Math.floor(Math.random() * fishArray.length)];

  console.log(myFish);

  const myAnimal = allAnimalsArray[Math.floor(Math.random() * allAnimalsArray.length)];

  console.log(myAnimal);

}

function selectMyBird () {
  const birdsArray = ['African Fish Eagle', 'Ostrich', 'Vulture', 'Marabou Stork', 'Grey Crowned Crane', 'Lilac-Breasted Roller', 'Yellow-Billed Stork', 'African Jacana', 'African Penguin', 'African Pygmy Kingfisher', 'African Skimmer', 'Augur Buzzard', 'Black-Bellied Bustard', 'Black-Winged Lapwing', 'Blue-Naped Mousebird', 'Cattle Egret', 'Collared Pratincole', 'Common Bulbul'];

 let myBird = birdsArray[Math.floor(Math.random() * birdsArray.length)];
 
 document.getElementById("js-myBird").innerHTML = `You have been assigned: ${myBird}.`;


}



function calculateScore() {


}

/*
document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
*/

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