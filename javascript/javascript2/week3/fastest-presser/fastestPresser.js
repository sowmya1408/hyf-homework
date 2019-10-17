const input = document.querySelector('input');
const btn = document.querySelector('button');
const keySText = document.getElementById('S-Text');
const keyLText = document.getElementById('L-Text');
const keyS = document.querySelector('.S');
const keyL = document.querySelector('.L');

function logkeyCounter(e) {
	if (input.value) {
		if (e.code === 'KeyS') {
			countOfS++;
			return (keyS.textContent = countOfS);
		} else if (e.code === 'KeyL') {
			countOfL++;
			return (keyL.textContent = countOfL);
		}
	}
}
function f() {
	// console.log('You Won!');
	// window.removeEventListener('keypress', () => {
	//     If(delay === 0)
	if (countOfS > countOfL) {
		keySText.textContent = 'S you won';
	} else if (countOfL > countOfS) {
		keyLText.textContent = 'L you won';
	} else if ((countOfS = countOfL)) {
		keySText.textContent = 'Its a draw';
		keyLText.textContent = 'Its a draw';
	}
	document.removeEventListener('keypress', logkeyCounter);
}
let countOfS = 0;
let countOfL = 0;
btn.addEventListener('click', delay => {
	delay = input.value;
	console.log(delay);
	setTimeout(f, delay * 1000);
    document.addEventListener('keypress', logkeyCounter);
    // Count down
	const paraCountDown = document.getElementById('countDown');

	function myTimer() {
		delay--;
		paraCountDown.textContent = `${delay} seconds remaining`;
		if (delay === 0) {
			clearInterval(inter);
		}
	}
	const inter = setInterval(myTimer, 1000);
});

// Restart functionality

const restartBtn = document.getElementById('restart');
function refresh() {
	document.location.reload();
}
restartBtn.addEventListener('click', refresh);

