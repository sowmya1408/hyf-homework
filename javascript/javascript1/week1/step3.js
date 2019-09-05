
           // freecodecamp user name - sowmyam
          
          // Age-ify -- A future Age calculator
const yearOfBirth = 1990;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in 2027.");

        // Goodboy-Oldboy -- A Dog age calculator
 const dogYearOfBirth = 2015;
 const dogYearFuture = 2027;
 const humanYear = dogYearFuture - dogYearOfBirth
 const dogYear = (humanYear) * 7;
 
let shouldShowResultsInDogYears;
shouldShowResultsInDogYears = true;
if (shouldShowResultsInDogYears === true) {
        console.log("Your dog will be " + dogYear + " dog years old in 2027.")

} else {
        console.log("Your dog will be " + humanYear + " human years old in 2027.")

}

      // Housey pricey -- house price estimator

const volumeInMeters = [[8*10*10], [5*11*8]];
const gardenSizeInM2 = [100, 70];      
const petersHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const juliasHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
const petersHouseCost = 2500000;
const juliasHouseCost = 1000000;
const peterHadPaid = petersHouseCost - petersHousePrice;
const juliaHadPaid = juliasHouseCost - juliasHousePrice;
console.log("Peter has paid " + peterHadPaid + " more than the actual house cost.");
console.log("Julia has paid " + juliaHadPaid + " less than the actual house cost.");


     //Ez Namey -- startup name generator

const firstWords = ["Unique", "Easy", "Awesome","Ambitious", "Enthusiatic", "Thunder", "Innovative", "Creative", "Connecting", "ideal" ];
const secondWords = ["Corporate", "Business", "Industry", "Prediction", "Analytical", "Performance", "Technology", "Development" , "Partners", "Investors"];
const firstWordsRandom = firstWords[Math.floor(Math.random() * 10)];
const secondWordsRandom = secondWords[Math.floor(Math.random() * 10)];
const startupName = firstWordsRandom.concat(" ",secondWordsRandom);
const startupNameLength = startupName.length;
console.log("choices for startup names " + startupName + " and the number of characters are " + startupNameLength  + ".");




     



