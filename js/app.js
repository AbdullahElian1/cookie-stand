'use strict';

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
        for(let i=0; i<14; i++)
        {

            this.calCookies.push(this.cusNum[i]* this.avg);
        }

    },

    totalNumOfCookies: function(){
        for(let i=0; i<=13; i++){
            this.totalCookies += this.calCookies[i];
            

        }
        console.log(this.totalCookies);
        

    },

   /*: function(){
        let container = document.getElementById('body');
        let h2 = document.createElement('h2');
        container.appendChild(h2); 
        h2.textContent = this.locationName;

    }*/



};
seattle.getRandomInt(23,65);
seattle.numOfCookies();
console.log(seattle.calCookies);
seattle.totalNumOfCookies();
//console.log(seattle.totalCookies);

//seattle.listCookiesInHtml();




  

 