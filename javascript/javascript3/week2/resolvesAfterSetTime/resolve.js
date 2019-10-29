function getStringafterSetTime(resolveAfter) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (resolveAfter) {
				resolve('I am called asynchronously after 6 secs');
			} else {
				reject('error');
			}
		}, resolveAfter * 1000);
	});
}

console.log(getStringafterSetTime(6));
getStringafterSetTime(6)
	.then(value => console.log(value))
	.catch(error => console.log(error));
