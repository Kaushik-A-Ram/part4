// define movie class
const Movie = {
  constructor(movieId, title, year, rating) {
    this.movieId = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
  },
};

// creating array of objects with mock data
const movies = [
  {
    movieId: 2,
    title: "Kikujiro (Kikujirô no natsu)",
    year: 1999,
    rating: 7.7,
  },
  { movieId: 6, title: "Dead End", year: 2003, rating: 6.5 },
  { movieId: 3, title: "Men Don't Leave", year: 1990, rating: 6.6 },
  {
    movieId: 5,
    title: "In the City of Sylvia (En la ciudad de Sylvia)",
    year: 2007,
    rating: 6.8,
  },
  { movieId: 8, title: "Surviving Desire", year: 1992, rating: 7.2 },
  { movieId: 1, title: "Nightfall", year: 1957, rating: 7.1 },
  { movieId: 7, title: "Fear Clinic", year: 2014, rating: 4.2 },
  { movieId: 4, title: "Inception", year: 2010, rating: 8.8 },
  { movieId: 10, title: "Frequencies", year: 2013, rating: 6.7 },
  { movieId: 9, title: "My Brother the Devil", year: 2012, rating: 6.5 },
];

// printing unsorted array of objects
console.log("Unsorted Movies:", movies);

// sorting the array of objects using sort() and assign to variable
const moviesSorted = movies.sort((a, b) => a.movieId - b.movieId);
console.log(moviesSorted);

// creating sequential search algorithm
function seqSearch(movies, movieId) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].movieId === movieId) {
            return movies[i];
        } 
    }
    return null;
}

// testing sequential search
const search1 = seqSearch(movies, 99);
if (search1) {
    console.log("Movie Found:", search1);
} else {
    console.log("Movie not found");
}


/* movie data
(2, "Kikujiro (Kikujirô no natsu)", 1999, 7.7),
  (6, "Dead End", 2003, 6.5),
  (3, "Men Don't Leave", 1990, 6.6),
  (5, "In the City of Sylvia (En la ciudad de Sylvia)", 2007, 6.8),
  (8, "Surviving Desire", 1992, 7.2),
  (1, "Nightfall", 1957, 7.1),
  (7, "Fear Clinic", 2014, 4.2),
  (4, "Inception", 2010, 8.8),
  (10, "Frequencies", 2013, 6.7),
  (9, "My Brother the Devil", 2012, 6.5),
*/
