// e14c3cfa-0a2b-4bac-b008-e3183e176795

const moviesUrl =
	'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

fetch(moviesUrl)
	.then(response => response.json())
	.then(data => {
		setTimeout(() => {
			console.log(data);
		}, 3 * 1000);
	});
