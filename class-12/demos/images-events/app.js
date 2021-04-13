'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/


let container=document.getElementById('images-div');
let leftImageElement= document.getElementById('left-image');
let middleImageElement= document.getElementById('middle-image');
let rightImageElement= document.getElementById('right-image');

let maxAttempts=10;
let userAttemptsCounter=0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let namesArr=[];
let votesArr=[];
let shownArr=[];
// Pascal
function Goat(name,source) {
  this.name=name;
  this.source=source;
  this.votes=0;
  this.shown=0;

  Goat.allGoats.push(this);

  namesArr.push(this.name);

}

// let allGoats=[];

Goat.allGoats=[];

// Goat.eat='eating';

// instantces

new Goat('cruisin-goat','images/cruisin-goat.jpg');//0
new Goat('float-your-goat', 'images/float-your-goat.jpg');//1
new Goat('goat-away', 'images/goat-away.jpg');//2
new Goat('goat-out-of-hand', 'images/goat-out-of-hand.jpg');//3
new Goat('kissing-goat', 'images/kissing-goat.jpg');//4
new Goat('sweater-goat', 'images/sweater-goat.jpg');//5
new Goat('sassy-goat', 'images/sassy-goat.jpg');//6

console.log(Goat.allGoats);
// console.log(Goat);

function generateRandomIndex() {
  // 0 => 6 
  return Math.floor(Math.random() * Goat.allGoats.length);
}

// console.log(generateRandomIndex());

function renderTwoImages() {

  leftImageIndex=generateRandomIndex();
  middleImageIndex=generateRandomIndex();
  rightImageIndex=generateRandomIndex();

  while (leftImageIndex===rightImageIndex ||leftImageIndex===middleImageIndex || middleImageIndex === rightImageIndex) {
    rightImageIndex=generateRandomIndex();
    middleImageIndex=generateRandomIndex();
  }

  // leftImageIndex===rightImageIndex || leftImageIndex===middle OR right === middle


  // console.log(Goat.allGoats[leftImageIndex].name);
  // console.log(Goat.allGoats[rightImageIndex].source);
  // Goat.allGoats[0]
  // Goat.allGoats[1]
  // Goat.allGoats[2]
  // Goat.allGoats[3]
  // console.log('first goat', Goat.allGoats[0].name);

  leftImageElement.src=Goat.allGoats[leftImageIndex].source;
  Goat.allGoats[leftImageIndex].shown++;

  middleImageElement.src=Goat.allGoats[middleImageIndex].source;
  Goat.allGoats[middleImageIndex].shown++;
  
  rightImageElement.src=Goat.allGoats[rightImageIndex].source;
  Goat.allGoats[rightImageIndex].shown++;
  



}

renderTwoImages();

// handle clicking:

container.addEventListener('click',handleUserClick);
// leftImageElement.addEventListener('click',handleUserClick);
// rightImageElement.addEventListener('click',handleUserClick);

function handleUserClick(event) {
  console.log(event.target.id);

  // add to attempts
  userAttemptsCounter++;

  console.log(userAttemptsCounter);

  // if the attempts is lower than the max tries

  // - add to the votes based on the id
  // -render again
  // Else
  // show the list
  // and finaly remove the clicking

  if (userAttemptsCounter<=maxAttempts) {
    // console.log(event.target.id);

    if (event.target.id ==='left-image') {
      Goat.allGoats[leftImageIndex].votes++;
    }else if(event.target.id ==='right-image'){
      Goat.allGoats[rightImageIndex].votes++;
    }else if(event.target.id ==='middle-image'){
      Goat.allGoats[middleImageIndex].votes++;
    }else{
      alert('please click on the images');
      userAttemptsCounter--; 
    }



    console.log(Goat.allGoats);
    renderTwoImages();

    
  }else{
  
    let button=document.getElementById('button');

    // if you want to make the button with JS:
    // let button=document.createElement('button');
    // container.appendChild(button);
    // button.textContent='show results';

    button.addEventListener('click',showingList);
    button.hidden=false;


    for (let i = 0; i < Goat.allGoats.length; i++) {
      votesArr.push(Goat.allGoats[i].votes);
      shownArr.push(Goat.allGoats[i].shown);
      
    }
    console.log(votesArr);

    // show the chart
    chart();

    //  remove event listener

    container.removeEventListener('click',handleUserClick);
    // leftImageElement.removeEventListener('click',handleUserClick);
    // rightImageElement.removeEventListener('click',handleUserClick);
  }

}

// fucntion for showing list
function showingList() {
  let list=document.getElementById('results-list');

      
  let goatResult;

  for (let i = 0; i < Goat.allGoats.length; i++) {
    goatResult=document.createElement('li');
    list.appendChild(goatResult);
    goatResult.textContent=`${Goat.allGoats[i].name} has ${Goat.allGoats[i].votes} votes and was seen ${Goat.allGoats[i].shown} times`
    
  }

  button.removeEventListener('click',showing);
}






// chart.js
function chart() {
  let ctx = document.getElementById('myChart').getContext('2d');
  
  let chart= new Chart(ctx,{
    // what type is the chart
   type: 'bar',

  //  the data for showing
   data:{
    //  for the names
      labels: namesArr,
      
      datasets: [
        {
        label: 'Goats votes',
        data: votesArr,
        backgroundColor: [
          'rgb(251, 93, 76)',
        ],
  
        borderWidth: 1
      },

      {
        label: 'Goats shown',
        data: shownArr,
        backgroundColor: [
          'black',
        ],
  
        borderWidth: 1
      }
      
    ]
    },
    options: {}
  });
  
}


