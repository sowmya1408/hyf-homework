// 1.Log out the text

// const logOutTheText = () => console.log('Called after 2.5 secs');
// setTimeout(logOutTheText, 2.5 * 1000);

//2. Create a function 2 parameters delay & string to log


function createAFunction(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay * 1000);
}

createAFunction(5, 'This string logged after 5 seconds');
createAFunction(1, 'This string logged after 1 seconds');

//3. Create a button in html

const btn = document.querySelector('button');
const logOutTheText = () => console.log('Called after 5 secs');

btn.addEventListener('click', () => {
    setTimeout(logOutTheText, 5 * 1000);
})

//4. Create two functions and assign them to two different variables 
const logsEarth = () => {
    console.log('Earth');
}

const logsSaturn = () => {
    console.log('Saturn');
}

function planetLogFunction(planet) { 
    planet();
}

planetLogFunction(logsEarth);
planetLogFunction(logsSaturn);

 //5. Log location
const body = document.querySelector('body');
const btnLocation = document.querySelector('.logLocation');
const para = document.createElement('p');
const para1 = document.createElement('p');

body.appendChild(para);
body.appendChild(para1);


btnLocation.addEventListener('click', getTheLocation);

function getTheLocation() {
navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    para.textContent = `This is the Latitude: ${position.coords.latitude}`
    para1.textContent =  `This is the Longitude: ${position.coords.longitude}`
    renderLocationOnGoogleMap(position.coords.latitude, position.coords.longitude);
   
}

//7. Run after delay

function runAfterDelay (delay, callback) {
    setTimeout(callback, delay * 1000);
}

runAfterDelay(4, function() {
    console.log('Should be logged after 4 seconds');
})

//8. Double clicked on the page

document.addEventListener('dblclick', () => {
    console.log("double click!");
})

// 9.Function Jokecreator

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
       if(shouldTellFunnyJoke === true) {
           logFunnyJoke();
       } else {
           logBadJoke();
       }

}

jokeCreator(true, function logFunnyJoke() {
    console.log('Its a funny joke!');
}, function logBadJoke() {
    console.log('Its is Bad!');
});

