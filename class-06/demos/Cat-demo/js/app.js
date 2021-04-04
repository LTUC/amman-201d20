// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data


'use strict';




let frankie={
  name:'frankie',
  age:0,
  likes:['napping','cuddiling','eating'],
  isGoodWithKids:true,isGoodWithDogs:false,
  isGoodWithOtherCats:true,
  breed:'angora',
  getAge:function () {
      this.age=randomNumber(3,12)+ ' months';
      console.log(this.age);   
  }

}

frankie.getAge();

// from w3 schooles
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(randomNumber(5,12));

// math floor
// 5.9 => 5

// math ceil
// 5.3 =>6

// math round
// 5.4 =>5
// 5.6 => 6

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let parent=document.getElementById('kittenProfiles');
console.log(parent);




// create a new element, or elements, that represent frankie
// article
// inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image

// create article
let articleElement = document.createElement('article');

// adding article to div
parent.appendChild(articleElement);


// creating element
let h2Element=document.createElement('h2');

// appending element
articleElement.appendChild(h2Element);

// text content
h2Element.textContent=frankie.name;


// create paragraph

let paraElement=document.createElement('p');

// append
articleElement.appendChild(paraElement);

// text content
paraElement.textContent=` frankie is adorable and is ${frankie.age} old`


// create ul
let ulElement=document.createElement('ul');

// append
articleElement.appendChild(ulElement);


for(let i =0;i<frankie.likes.length;i++){
    // create li
    let liElement=document.createElement('li');

    // appending li
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent=frankie.likes[i];

}


let image =document.createElement('img');
articleElement.appendChild(image);

image.setAttribute('src','images/'+frankie.name+'.jpeg');

image.setAttribute('width','500px');


if (frankie.isGoodWithKids) {
    console.log('frankie is good wit kids');
}
{/* <img src="images/frankie.jpeg"/> */}

// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild



// notes for the lab
// [6am,7am......7pm];

// method for calc this customers each hour
// [23,60,55,]

// method for calc this avarage cookies each hour
// random cust[i]* avg
// [23*6.3,60*6.3,]


// a method for rendering



