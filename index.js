// const { createSpy } = require("expect/lib/SpyUtils");

// function runFiveMiles() {
//     console.log('Go for a five-mile run');
//   } 

//   function liftWeights() {
//     console.log('Pump iron');
//   }
  
//   function swimFortyLaps() {
//     console.log('Swim 40 laps');
//   } 

//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   } 
  
//   function Monday() {
//     exerciseRoutine(liftWeights);
//   } 



// function morningRoutine(exercise) {
//     let breakfast; 

//     if (exercise === liftWeights) {
//         breakfast = 'protien bar';   
//    } else if (exercise === swimFortyLaps) {
//        breakfast = 'kale smoothie'; 
//    } else {
//        breakfast = 'granola';
//    }

//    exerciseRoutine(exercise);
//    return function() {
//        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//    }
// }




function receivesAFunction(callback){
  callback()
}


function returnsANamedFunction(){
  function namedFunction(){
  }
  return namedFunction
}

function returnsAnAnonymousFunction(){
 return function(){};

}



  
  