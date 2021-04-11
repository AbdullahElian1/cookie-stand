'use strict';
let hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const seattle ={
    locationName: 'settle',
    min: 23,
    max: 65,
    avg: 6.3,
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
            console.log(this.totalCookies);
            

        }
       
        

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
console.log(seattle.calCookies);
seattle.totalNumOfCookies();
console.log(seattle.totalCookies);

seattle.listCookiesInHtml();


const tokyo ={
    locationName: 'tokyo',
    min: 11,
    max: 24,
    avg: 1.2,
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
            console.log(this.totalCookies);
            

        }
       
        

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
tokyo.getRandomInt(11,24);
tokyo.numOfCookies();
console.log(seattle.calCookies);
tokyo.totalNumOfCookies();
console.log(seattle.totalCookies);

tokyo.listCookiesInHtml();






  

 