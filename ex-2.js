//Exercise #2: At Least Five Function

function CheckSeventyUp(number)
  { return number >= 70 }

function atLeastFive(array, operation) 
  { const greaterThanSeventy = array.filter(operation)
   
   return greaterThanSeventy.length >= 5 }

   //function atLeastFive(array, operation)
  //{ let greaterthanSeventy = [];
  //for ( let i = 0 ; i < array.length ; i++)
  // greaterThanSeventy = array[i].filter(operation)
  // if ( greaterThanSeventy >= 5){ return true }
  //else {false} } 

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
const test = [67, 80, 10,80];

let scoreRoom1Result = console.info(atLeastFive(studentScoresRoom1,CheckSeventyUp))
let scoreRoom2Result = console.info(atLeastFive(studentScoresRoom2,CheckSeventyUp))
let scoreRoom3Result = console.info(atLeastFive(studentScoresRoom3,CheckSeventyUp))
let Result = console.info(atLeastFive(test,CheckSeventyUp))




