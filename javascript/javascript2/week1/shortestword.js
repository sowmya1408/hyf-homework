const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function getShortestWord () {
    const lengthOfDanishWords = []; 
    danishWords.forEach(function (word){ // loop for the length of the word
    lengthOfDanishWords.push(word.length); 
});
   const minLengthWord = (Math.min(...lengthOfDanishWords)); // get the length of the shortes word
   const shortestWords = [];
    danishWords.forEach(function (words){ // loop for the shortest word or words
    if(words.length === minLengthWord) {
       shortestWords.push(words); 
    } 
});
    if (shortestWords.length === 1) {
      return `The shortest word is ${shortestWords.join()}` // if 1 word returns this
    } else {
      return `The shortest words are ${shortestWords.join()}` // if morethan 1 word returns this

    }
}

const theShortword = getShortestWord();
console.log(theShortword);

