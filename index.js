import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
let final2014 = fifaData.filter(function(i){
    if(i["Year"] === 2014 && i["Stage"] === "Final"){
        return i
    }
});
console.log(final2014[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final

console.log(final2014[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final

console.log(final2014[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final

console.log(final2014[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */

console.log(final2014[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
return data.filter(i=> i.Stage === "Final");
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCB) {
let years = getFinalsCB.map(i=>i.Year)
return years;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCB) {
let winners =[]
getFinalsCB.filter(function (i){
    if (i["Home Team Goals"]>i["Away Team Goals"]){
        winners.push(i["Home Team Name"])
    } else {
        winners.push(i["Away Team Name"])
    }
})
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
* data parameter
* callback function getWinners
* callback function getYears
*/

// function getWinnersByYear(data, getYearsCB, getWinnersCB) {
// let finalArr=[];
// let finalsData = data.filter(i=> i.Stage === "Final");
// for (let i = 0; i < finalsData.length; i++){
// finalArr.push(`In ${getYearsCB(finalsData)[i]}, ${getWinnersCB(finalsData)[i]} won the world cup!`);
// }
// return finalArr;
// }

function getWinnersByYear(data, getYearsCB, getWinnersCB) {
    let finalArr=[];
    let finalsData = data.filter(i=> i.Stage === "Final");
    finalsData.forEach((i,ind) => finalArr.push(`In ${getYearsCB(finalsData)[ind]}, ${getWinnersCB(finalsData)[ind]} won the world cup!`))
    return finalArr;
}

//console.log(fifaData, getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))))
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {
// let home = [];
// let away = [];

// for (let i = 0; i < data.length; i++){
// home.push(data[i]["Home Team Goals"]);
// }
// for (let i = 0; i < data.length; i++){
// home.push(data[i]["Away Team Goals"]);
// }

// let concatArr = home.concat(away);
// let avg = (concatArr.reduce((a,b)=>a+b))/data.length;
// return (Math.ceil(avg*100)/100).toString();
// }

function getAverageGoals(data) {
let home = data.map(i => i["Home Team Goals"])
let away = data.map(i => i["Away Team Goals"])

let concatArr = home.concat(away);
let avg = (concatArr.reduce((a,b)=>a+b))/data.length;
return (Math.ceil(avg*100)/100).toString();
}





/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}