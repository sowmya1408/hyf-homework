// Rewrite setTimeout

function setTimeoutPromise(milliseconds) {
	return new Promise(resolve => {
		setTimeout(resolve, milliseconds);
	});
}

setTimeoutPromise(3000).then(() => console.log('Called after 3 seconds'));

// Rewrite navigator.geolocation.getCurrentPosition

function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}
getCurrentLocation()
	.then(position => console.log(position))
	.catch(error => console.log(error));
