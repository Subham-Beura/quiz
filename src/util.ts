
function shuffleArray(array:any[]) {
 
    return array.sort( ()=>Math.random()-0.5 );
  
 }
 const MAX_QUESTIONS=10
 const utils= {shuffleArray,MAX_QUESTIONS}
 export default utils;