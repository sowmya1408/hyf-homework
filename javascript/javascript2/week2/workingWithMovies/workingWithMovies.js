// Array of all movie titles total: 6527

moviesTitleArray = [];

const movieTitles = movies.forEach(movie => moviesTitleArray.push(movie.title))

console.log(moviesTitleArray);

// Create an Array of movies with short titles && Long Titles
const shortMovieList = [];
const longMovieList = [];


  const shortAndLongTitles = moviesTitleArray.filter(title => {
      titleArray = title.split(' ');
      if(titleArray.length <= 1 ) {
          return shortMovieList.push(title);
      } else if (titleArray.length >= 6 ) {
          return longMovieList.push(title);
      }
  })  


//   console.log(shortMovieList);
//   console.log(longMovieList);

  // Count the number of movies made between 1980 - 1989

  const filterMoviesBetween = movies.filter(movie => {
      if(movie.year >= 1980 && movie.year <= 1989) {
          return movie;
      }
  }).length
//   console.log(filterMoviesBetween);

  // create an extra key called tag

  const extraKeyCalledTag = movies.map(movie => {
      if(movie.rating >= 7) {
          return movie.tag = 'Good';
      } else if(movie.rating >= 4) {
          return movie.tag = 'Average';
      } else if(movie.rating < 4) {
          return movie.tag = 'Bad';
      }
  })

console.log(extraKeyCalledTag);

// Chaining, movies rated higher than 6

const moviesRatingGreaterThan6 = movies
.filter(movie => movie.rating > 6)
.map(movie => movie.rating)

console.log(moviesRatingGreaterThan6);

// count the total number of movies with given keywords 

const countTotalMoviesForKeywords = movies
.filter((movie) => {
    const movieTitlesArray = movie.title.toLowerCase().split(' ');
    if(movieTitlesArray.includes('surfer') || movieTitlesArray.includes('alien') || movieTitlesArray.includes('benjamin')) {
        return movie;
    }   
}).length 
console.log(countTotalMoviesForKeywords);

// word in the title duplicated 







  

