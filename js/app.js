'use strict';

const seattle ={
    min: 23,
    max: 65,
    avg: 6.3,
    cusNum: [],
    

    getRandomInt: function (min, max) {
        for(let i =0; i<=13; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
       let x= Math.floor(Math.random() * (max - min) + min); 
       this.cusNum.push(x);


        }
        console.log(this.cusNum);
    },



};
seattle.getRandomInt(23,65);




  

 