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


// let frankie={
//     name:'frankie',
//     age:0,
//     intrests:['napping','cuddiling','eating'],
//     isGoodWithKids:true,
//     isGoodWithDogs:false,
//     isGoodWithOtherCats:true,
//     breed:'angora',
//     getAge:function () {
//         this.age=randomNumber(3,12)+ ' months';
//         console.log(this.age);   
//     }

//   }

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let kittens = [];


function Kitten(name, intrests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {

    this.name = name;
    this.age = this.getAge();
    this.intrests = intrests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithOtherCats = isGoodWithOtherCats;

    kittens.push(this);

}

Kitten.prototype.getAge = function () {
    this.age = randomNumber(3, 12) + 'months'
}

let frankie = new Kitten('frankie', ['napping', 'eating', 'cuddiling'], true, false, true);

let serena = new Kitten('serena', ['playing', 'climbing', 'sitting on laps'], false, false, true);

console.log(frankie);
// frankie.getAge();

console.log(serena);



Kitten.prototype.render = function () {
    let parent = document.getElementById('kittenProfiles');
    console.log(parent);




    // create a new element, or elements, that represent frankie
    // article
    // inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image

    // create article
    let articleElement = document.createElement('article');

    // adding article to div
    parent.appendChild(articleElement);


    // creating element
    let h2Element = document.createElement('h2');

    // appending element
    articleElement.appendChild(h2Element);

    // text content
    h2Element.textContent = this.name;


    // create paragraph

    let paraElement = document.createElement('p');

    // append
    articleElement.appendChild(paraElement);

    // text content
    paraElement.textContent = ` ${this.name} is adorable and is ${this.age} old`


    // create ul
    let ulElement = document.createElement('ul');

    // append
    articleElement.appendChild(ulElement);


    for (let i = 0; i < this.intrests.length; i++) {
        // create li
        let liElement = document.createElement('li');

        // appending li
        ulElement.appendChild(liElement);

        // text content
        liElement.textContent = this.intrests[i];

    }


    let image = document.createElement('img');
    articleElement.appendChild(image);

    image.setAttribute('src', 'images/' + this.name + '.jpeg');
    
   let tableElement=document.createElement('table');
   parent.appendChild(tableElement);


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
 



}



for (let i = 0; i < kittens.length; i++) {
    kittens[i].getAge();
    kittens[i].render()
}

