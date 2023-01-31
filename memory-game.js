const gameContainer = document.getElementById("game");
let matchedArr = []

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let clickCounter = 0;
let colorArr = [];
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  colorArr.push(event.target.classList[0])
event.target.style.backgroundColor = event.target.classList[0]
  clickCounter += 1
  //change the color of the background

//create a counter up to 2/ that resets when the when they dont win
console.log(clickCounter);

if(clickCounter === 2){
    console.log(colorArr);
if(colorArr[0] !== colorArr[1]){
    console.log('after we follow ' + colorArr);
   const allDivs = document.querySelectorAll('Div');
        for(let inDiv of allDivs){
          console.log("these are the " + inDiv);
if(inDiv.style.backgroundColor === colorArr[0] || inDiv.style.backgroundColor === colorArr[1] ){
    console.log('it works ' + game);
    setTimeout( function () {
     inDiv.style.backgroundColor= 'white'
     colorArr = []
     clickCounter = 0
    }, 500);
}

// setTimeout(() => {
//     game.style.backgroundColor = 'white'
//
//     }, 1000);

    }


    //you must keep that classList arr pushed

}else{
matchedArr.push(event.target.classList[0])
console.log(clickCounter);
    console.log(colorArr);
    clickCounter = 0;
colorArr = []
console.log(matchedArr);
if(matchedArr.length === COLORS.length/2){
  alert('YOU WON!')
}
    }
}

   }


///matchedArr is colorlength/2 make and alert of the win


//clicking 2 cards with the classList[0] the same
//


// when the DOM loads
createDivsForColors(shuffledColors);
