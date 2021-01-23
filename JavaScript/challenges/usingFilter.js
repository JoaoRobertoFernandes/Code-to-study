/*------------Filter to extract data----------
var watchList = [
    {
      "Title": "Inception",
      "imdbRating": "8.8"
    },
    {
      "Title": "Interstellar",
      "imdbRating": "8.6"
    },
    {
      "Title": "The Dark Knight",
      "imdbRating": "9.0"
    },
    {
      "Title": "Batman Begins",
      "imdbRating": "8.3"
    },
    {
      "Title": "Avatar",
      "imdbRating": "7.9"
    }
  ];

const filterList = watchList.map(({Title: title, imdbRating: rating}) => ({title, rating})).filter((movie) => parseFloat(movie.rating) >= 8.0);
console.log(filterList);
//return [
  { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' }
]
/*------------Filter to extract data----------*/