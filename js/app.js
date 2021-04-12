'use strict';
let hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomValue(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle ={
    locationName: 'settle',
    min: 23,
    max: 65,
    avg: 6.3,
    cusNum: [],
    calCookies:[],
    totalCookies:0,


    getRandomInt: function () {
        for(let i =0; i<=13; i++){
            this.cusNum.push(randomValue(this.min,this.max));
        


        }
        console.log(this.cusNum);
    },

    numOfCookies: function(){
        let c=0;
        for(let i=0; i<this.cusNum.length; i++)
        {
            c= Math.ceil(this.cusNum[i]* this.avg);
            this.totalCookies += c;
            this.calCookies.push(c);
             
        }
        console.log( this.calCookies);

        console.log( this.totalCookies);


    },

    

    listCookiesInHtml: function(){
        let container = document.getElementById('body');
        let h2 = document.createElement('h2');
        container.appendChild(h2); 
        h2.textContent = this.locationName;
        let ul = document.createElement('ul');
        container.appendChild(ul);
        let li = null;
        for(let i = 0 ; i < this.calCookies.length ; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            
            li.textContent = `${hours[i]}: ${this.calCookies[i]} Cookies`;
        }
        li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `Tootal: ${this.totalCookies} Cookies`;



    }



};
seattle.getRandomInt(23,65);
seattle.numOfCookies();
//console.log(seattle.calCookies);
//seattle.totalNumOfCookies();
console.log(seattle.totalCookies);

seattle.listCookiesInHtml();


const tokyo ={
    locationName: 'tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cusNum: [],
    calCookies:[],
    totalCookies:0,


    getRandomInt: function (min, max) {
        for(let i =0; i<=13; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
       let x= Math.floor(Math.random() * (max - min + 1) + min); 
       this.cusNum.push(x);


        }
        console.log(this.cusNum);
    },

    numOfCookies: function(){
        for(let i=0; i<this.cusNum.length; i++)
        {

            this.calCookies.push(Math.ceil(this.cusNum[i]* this.avg));
            
            
        }

    },

    totalNumOfCookies: function(){
        for(let i=0; i<this.calCookies.length; i++){
            this.totalCookies += this.calCookies[i];
           
            

        }
        console.log(this.totalCookies);
       
        

    },

    listCookiesInHtml: function(){
        let container = document.getElementById('body');
        let h2 = document.createElement('h2');
        container.appendChild(h2); 
        h2.textContent = this.locationName;
        let ul = document.createElement('ul');
        container.appendChild(ul);
        let li = null;
        for(let i = 0 ; i < this.calCookies.length ; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            
            li.textContent = `${hours[i]}: ${this.calCookies[i]} Cookies`;
        }
        li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `Tootal: ${this.totalCookies} Cookies`;



    }



};
tokyo.getRandomInt(3,24);
tokyo.numOfCookies();
console.log(tokyo.calCookies);
tokyo.totalNumOfCookies();
console.log(tokyo.totalCookies);

tokyo.listCookiesInHtml();


const dubai ={
    locationName: 'dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cusNum: [],
    calCookies:[],
    totalCookies:0,


    getRandomInt: function (min, max) {
        for(let i =0; i<=13; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
       let x= Math.floor(Math.random() * (max - min) + min); 
       this.cusNum.push(x);


        }
        console.log(this.cusNum);
    },

    numOfCookies: function(){
        for(let i=0; i<this.cusNum.length; i++)
        {

            this.calCookies.push(Math.ceil(this.cusNum[i]* this.avg));
            
            
        }

    },

    totalNumOfCookies: function(){
        for(let i=0; i<this.calCookies.length; i++){
            this.totalCookies += this.calCookies[i];
            
            

        }
        console.log(this.totalCookies);
       
        

    },

    listCookiesInHtml: function(){
        let container = document.getElementById('body');
        let h2 = document.createElement('h2');
        container.appendChild(h2); 
        h2.textContent = this.locationName;
        let ul = document.createElement('ul');
        container.appendChild(ul);
        let li = null;
        for(let i = 0 ; i < this.calCookies.length ; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            
            li.textContent = `${hours[i]}: ${this.calCookies[i]} Cookies`;
        }
        li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `Tootal: ${this.totalCookies} Cookies`;



    }



};
dubai.getRandomInt(11,38);
dubai.numOfCookies();
console.log(dubai.calCookies);
dubai.totalNumOfCookies();
console.log(dubai.totalCookies);

dubai.listCookiesInHtml();


const paris ={
    locationName: 'paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cusNum: [],
    calCookies:[],
    totalCookies:0,


    getRandomInt: function (min, max) {
        for(let i =0; i<=13; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
       let x= Math.floor(Math.random() * (max - min) + min); 
       this.cusNum.push(x);


        }
        console.log(this.cusNum);
    },

    numOfCookies: function(){
        for(let i=0; i<this.cusNum.length; i++)
        {

            this.calCookies.push(Math.ceil(this.cusNum[i]* this.avg));
            
            
        }

    },

    totalNumOfCookies: function(){
        for(let i=0; i<this.calCookies.length; i++){
            this.totalCookies += this.calCookies[i];
            
            

        }
        console.log(this.totalCookies);
       
        

    },

    listCookiesInHtml: function(){
        let container = document.getElementById('body');
        let h2 = document.createElement('h2');
        container.appendChild(h2); 
        h2.textContent = this.locationName;
        let ul = document.createElement('ul');
        container.appendChild(ul);
        let li = null;
        for(let i = 0 ; i < this.calCookies.length ; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            
            li.textContent = `${hours[i]}: ${this.calCookies[i]} Cookies`;
        }
        li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `Tootal: ${this.totalCookies} Cookies`;



    }



};
paris.getRandomInt(20,38);
paris.numOfCookies();
console.log(paris.calCookies);
paris.totalNumOfCookies();
console.log(paris.totalCookies);

paris.listCookiesInHtml();


const lima ={
    locationName: 'lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cusNum: [],
    calCookies:[],
    totalCookies:0,


    getRandomInt: function (min, max) {
        for(let i =0; i<=13; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
       let x= Math.floor(Math.random() * (max - min) + min); 
       this.cusNum.push(x);


        }
        console.log(this.cusNum);
    },

    numOfCookies: function(){
        for(let i=0; i<this.cusNum.length; i++)
        {

            this.calCookies.push(Math.ceil(this.cusNum[i]* this.avg));
            
            
        }

    },

    totalNumOfCookies: function(){
        for(let i=0; i<this.calCookies.length; i++){
            this.totalCookies += this.calCookies[i];
            
            

        }
        console.log(this.totalCookies);
       
        

    },

    listCookiesInHtml: function(){
        let container = document.getElementById('body');
        let h2 = document.createElement('h2');
        container.appendChild(h2); 
        h2.textContent = this.locationName;
        let ul = document.createElement('ul');
        container.appendChild(ul);
        let li = null;
        for(let i = 0 ; i < this.calCookies.length ; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            
            li.textContent = `${hours[i]}: ${this.calCookies[i]} Cookies`;
        }
        li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `Tootal: ${this.totalCookies} Cookies`;



    }



};
lima.getRandomInt(2,16);
lima.numOfCookies();
console.log(lima.calCookies);
lima.totalNumOfCookies();
console.log(lima.totalCookies);

lima.listCookiesInHtml();








  

 