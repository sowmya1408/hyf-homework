
           // freecodecamp user name - sowmyam
          
          // Age-ify -- A future Age calculator
const yearOfBirth = 1990;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in 2027.`);

        // Goodboy-Oldboy -- A Dog age calculator
 const dogYearOfBirth = 2015;
 const dogYearFuture = 2027;
 const humanYear = dogYearFuture - dogYearOfBirth
 const dogYear = humanYear * 7;
 const dogText = "Your dog will be";
 
const shouldShowResultsInDogYears = true;
if (shouldShowResultsInDogYears) {
        console.log(`${dogText} ${dogYear} dog years old in 2027.`);

} else {
        console.log(`${dogText} ${humanYear} human years old in 2027.`);

}

      // Housey pricey -- house price estimator

const volumeInMeters = [[8*10*10], [5*11*8]];
const gardenSizeInM2 = [100, 70];      
const petersHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const juliasHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
const pjHouseCost = [2500000,1000000];
const pjHadPaid = [[pjHouseCost[0] - petersHousePrice],[pjHouseCost[1] - juliasHousePrice]];
console.log("Peter has paid " + pjHadPaid[0] + " more than the actual house cost.");
console.log("Julia has paid " + pjHadPaid[1] + " less than the actual house cost.");


     //Ez Namey -- startup name generator

const firstWords = ["Unique", "Easy", "Awesome","Ambitious", "Enthusiatic", "Thunder", "Innovative", "Creative", "Connecting", "ideal" ];
const secondWords = ["Corporate", "Business", "Industry", "Prediction", "Analytical", "Performance", "Technology", "Development" , "Partners", "Investors"];
const wordsRandom = [firstWords[Math.floor(Math.random() * 10)],[secondWords[Math.floor(Math.random() * 10)]]];
const startupName = wordsRandom[0].concat(" ",wordsRandom[1]);
const startupNameLength = startupName.length;
const startupUniqueNames = firstWords.length * secondWords.length;
console.log(startupUniqueNames);
console.log(`Choices for startup names ${startupName} and the number of characters are ${startupNameLength}.`);



     



