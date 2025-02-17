const Movie = require('./models/Movie');

let movies = [
  {
    id: "1",
    name: "The Grand Budapest Hotel",
    director_name: "Wes Anderson",
    production_house: "Fox Searchlight Pictures",
    release_date: "2014-03-28",
    rating: 8.1
  },
  {
    id: "2",
    name: "Parasite",
    director_name: "Bong Joon-ho",
    production_house: "CJ Entertainment",
    release_date: "2019-05-30",
    rating: 8.6
  },
  {
    id: "3",
    name: "Blade Runner 2049",
    director_name: "Denis Villeneuve",
    production_house: "Warner Bros",
    release_date: "2017-10-06",
    rating: 8.0
  }
];

const resolvers = {
  Query: {
    getAllMovies: () => movies,
    getMovieById: (_, { id }) => movies.find(movie => movie.id === id),
  },
  Mutation: {
    addMovie: (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = { id: String(movies.length + 1), name, director_name, production_house, release_date, rating };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
      let movie = movies.find(movie => movie.id === id);
      if (!movie) throw new Error("Movie not found");
      if (name) movie.name = name;
      if (director_name) movie.director_name = director_name;
      if (production_house) movie.production_house = production_house;
      if (release_date) movie.release_date = release_date;
      if (rating) movie.rating = rating;
      return movie;
    },
    deleteMovie: (_, { id }) => {
      movies = movies.filter(movie => movie.id !== id);
      return `Movie with ID ${id} deleted.`;
    }
  }
};

module.exports = resolvers;
