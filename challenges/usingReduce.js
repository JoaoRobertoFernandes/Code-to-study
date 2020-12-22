/*----------Reduce----------
var watchList = [
    {
      "Title": "Inception",
      "Director": "Christopher Nolan",
      "imdbRating": "8.8"
    },
    {
      "Title": "Interstellar",
      "Director": "Christopher Nolan",
      "imdbRating": "8.6"
    },
    {
      "Title": "The Dark Knight",
      "Director": "Christopher Nolan",
      "imdbRating": "9.0"
    },
    {
      "Title": "Batman Begins",
      "Director": "Christopher Nolan",
      "imdbRating": "8.3"
    },
    {
      "Title": "Avatar",
      "Director": "James Cameron",
      "imdbRating": "7.9"
    }
  ];

  const rat = (list) => {
      var average = 
      list.filter(movie => movie.Director === "Christopher Nolan")
      .map(movie => Number(movie.imdbRating))
      .reduce((sumRat, rating) => sumRat + rating)/
      list.filter(movie => movie.Director === "Christopher Nolan").length;

      return average;
  }

  console.log(rat(watchList));//return 8.675
/*----------Reduce----------*/