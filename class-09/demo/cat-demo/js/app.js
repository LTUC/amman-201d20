'use strict';
// JavaScript Objects - what are objcts?

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

let cats = [];

function Cat(name, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.img = img;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
  this.breed = breed;
  cats.push(this);
}

Cat.prototype.getAge = function () {
  this.age = getRandomNumber(1, 12);
  console.log(this.name + ' is ' + this.age + ' months years old');
};

Cat.prototype.render = function () {
  let parentElement = document.getElementById('kittenProfiles');

  let article = document.createElement('article');
  parentElement.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  let p = document.createElement('p');
  p.textContent = ` Age : ${this.age}`;
  article.appendChild(p);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.likes.length; i++) {
    let li = document.createElement('li');
    li.textContent = this.likes[i];
    ul.appendChild(li);
  }

  let img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.name + '.jpeg');
  img.setAttribute('alt', 'this is an image of ' + this.name);
  article.appendChild(img);


  let tableElement=document.createElement('table');
  article.appendChild(tableElement);


  let headingRow=document.createElement('tr');
  
  tableElement.appendChild(headingRow);

  let intrestsArr=['isGoodWithKids', 'isGoodWithDogs', 'isGoodWithOtherCats']

  for (let i = 0; i < intrestsArr.length; i++) {
      let thElement=document.createElement('th');
      headingRow.appendChild(thElement);
      thElement.textContent=intrestsArr[i]
      
  }

  let dataRow=document.createElement('tr');
  tableElement.appendChild(dataRow);
  
  let td1=document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent=this.isGoodWithKids;

  let td2=document.createElement('td');
  dataRow.appendChild(td2);
  td2.textContent=this.isGoodWithDogs;

  let td3=document.createElement('td');
  dataRow.appendChild(td3);
  td3.textContent=this.isGoodWithOtherCats;





};

let frankie = new Cat('frankie', ['chasin string', 'eating'], 'images/frankie.jpeg', true, false, true, 'british');

// frankie.getAge();
// frankie.render();

let jumper = new Cat('jumper', ['playing', 'eating'], 'images/jumper.jpeg', true, false, true, 'italian');

// jumper.getAge();
// jumper.render();


// console.log(frankie);
// console.log(jumper);





function getRandomNumber(min, max) {
  let random = Math.random(); // 0 - 1
  random = (random * (max - min + 1)) + min; // less than or equal max
  random = Math.floor(random); // remove fractions
  return random;
}



// get the element by id for the form
let kittenForm= document.getElementById('kittenForm');

console.log(kittenForm);

// add the event listener

kittenForm.addEventListener('submit',submitter);

// create the submitter function

function submitter(event) {
  // prevent the default behaviour of refreshing the page
  event.preventDefault();

  console.log(event);


  let name=event.target.nameField.value;
  console.log(name);

  let likes=event.target.likesField.value;
  console.log('likes',likes);
   

  // make an array for splitting
  let likesArray=likes.split(',');

  console.log(likesArray);

  let isGoodWithDogs=event.target.isGoodWithDogs.checked;
  console.log(isGoodWithDogs);

  let isGoodWithKids=event.target.isGoodWithKids.checked;
  console.log(isGoodWithKids);

  let isGoodWithOtherCats=event.target.isGoodWithCats.checked;
  console.log(isGoodWithOtherCats);

  let image='images/'+name+'.jpeg';
  
  // name, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed

  // new instance of the constructor with the new info
  let addedKitten=new Cat(name,likesArray,image,isGoodWithKids,isGoodWithDogs,isGoodWithOtherCats);
  console.log(addedKitten);

  // call methods for the added kitten
  // addedKitten.getAge();
  // addedKitten.render();

  console.log(cats);
  
  let container=document.getElementById('kittenProfiles');

  container.textContent='';
  
  for (let i = 0; i < cats.length; i++) {
    cats[i].getAge();
    cats[i].render();
  }
  

}



for (let i = 0; i < cats.length; i++) {
  cats[i].getAge();
  cats[i].render();
}

