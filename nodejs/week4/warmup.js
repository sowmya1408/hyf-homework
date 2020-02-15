class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body
    }
}

function getPercentUppercase(str, upperCaseChar) {
    upperCaseChar = 0;
    str = str.subject + str.body;
    str = str.replace(/\s/g, "");
    let character = '';
    for (let i = 0; i <= str.length; i++) {
        character = str.charAt(i) 
        if(character === character.toUpperCase()) {
           upperCaseChar++;
        }
          
    }
   return (Math.round(upperCaseChar * 100 / str.length))
}

class SpamDetector {
    isSpam(email){
        if((email.body.toLowerCase()).includes("viagra" || "offer" || "free" || "business proposal" )){
            return true;
        } else if(email.subject.toLowerCase() === 'hello' || (email.subject.toLowerCase()).includes('personel loan')) {
            return true;
        } else if(getPercentUppercase(email) > 60){
            return true;    
        } else {
            return false;
        }
    }
}

const emailFromOldFriend = new Email('Hello old friend', 'Long time no see, when should we hang out again??');

// const spamDetector = new SpamDetector();
// console.log(spamDetector.isSpam(emailFromOldFriend))

const uppercaseEmail = new Email('loan', 'THIS IS to check IF YOU NEED A LOAN')
// const spamUppercaseEmailCheck = new SpamDetector();
// console.log(spamDetector.isSpam(spamUppercaseEmailCheck));

const helloEmail = new Email('Hello', 'would you like to get a loan');
// const spamEmail = new SpamDetector();
// console.log(spamDetector.isSpam(spamEmail));

const wordsEmailCheck = new Email('loan', 'this is a Viagra latest OFFER')

const spamWordsEmailCheck = new SpamDetector();
console.log(spamDetector.isSpam(spamWordsEmailCheck));
