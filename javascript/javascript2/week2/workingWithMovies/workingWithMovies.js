// Array of all movie titles total: 6527

// Create an Array of movies with short titles

const shortTitles = movies.filter(movie => {
	const titles = movie.title.split(' ');
	if (titles.length <= 1) {
		return movie;
	}
});

console.log(shortTitles);

// Create an Array of movie titles with long movie titles
const movietitles = [];

const allMovieTitles = movies.forEach(movie => movietitles.push(movie.title));

const longMovieTitles = movietitles.filter(title => {
	const allTitles = title.split(' ');
	if (allTitles.length >= 2) {
		return title;
	}
});
console.log(longMovieTitles);

//   Count the number of movies made between 1980 - 1989

const countMoviesBetween = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989).length;
console.log(countMoviesBetween);

// create an extra key called tag

const extraKeyCalledTag = movies.map(movie => {
	if (movie.rating >= 7) {
		movie.tag = `Good`;
		return movie;
	} else if (movie.rating >= 4) {
		movie.tag = `Average`;
		return movie;
	} else if (movie.rating < 4) {
		movie.tag = `Bad`;
		return movie;
	}
});

console.log(extraKeyCalledTag);

// Chaining, movies rated higher than 6

const moviesRatingGreaterThan6 = movies
	.filter(movie => movie.rating > 6)
	.map(movie => `movie : ${movie.title}, rating : ${movie.rating}`);

console.log(moviesRatingGreaterThan6);

// count the total number of movies with given keywords

const countTotalMoviesForKeywords = movies.filter(movie => {
	const movieTitlesArray = movie.title.toLowerCase().split(' ');
	if (
		movieTitlesArray.includes('surfer') ||
		movieTitlesArray.includes('alien') ||
		movieTitlesArray.includes('benjamin')
	) {
		return movie;
	}
}).length;
console.log(countTotalMoviesForKeywords);

// word in the title duplicated
const duplicatedWordsInATitles = [];

 movies.map(movie => movie.title.split(' '))
.forEach(title => title.filter((word, index) => title.indexOf(word) !== index && word !== 'the' && word !== 'The' && word !== 'of' && word !=='and'?  duplicatedTitles.push(word) : false));//duplicatedTitles.push(`In title:${title.join(" ")} this word:${word} is duplicated`) : false));
console.log(duplicatedWordsInATitles);

// average rating of all movies using reduce.

const averageRating = movies.reduce((acc, movie) => (acc += movie.rating / movies.length), 0).toFixed(2);
console.log(`The average rating of the movies array is ${averageRating}`);

// Count the total number of Good,Average, Bad movies

const countTotalNumber = movies.reduce(
	(acc, movie) => {
		if (movie.tag === 'Good') {
			acc.good += 1;
		} else if (movie.tag === 'Average') {
			acc.average += 1;
		} else {
			acc.bad += 1;
		}
		return { ...acc };
	},
	{ good: 0, average: 0, bad: 0 }
);

console.log(countTotalNumber);
