const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTIzYWEzYTRlOTRhYzhkYTQwMDk1Mzk2ZDQ3MDZkMiIsInN1YiI6IjY1MzhmYWQyZjQ5NWVlMDBmZjY2M2U4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IzQpk27slS-MSxretzQENo36fQajZg1E14HSlXkTVOM',
  },
};
export const getAllMovies = async (page) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  const data =await(await fetch(url, options)).json();
  return Object.values(data.results);
};

export const searchForMovies = async(input,page)=>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&&page=${page}`;
    const data =await(await fetch(url, options)).json();
    return data ;
}
export const getTopRatedAndNowPlaying = async (request) =>{
    const url = `https://api.themoviedb.org/3/movie/${request}`;
    const data =await(await fetch(url, options)).json();
    return Object.values(data.results.slice(0, 5)) ;
}