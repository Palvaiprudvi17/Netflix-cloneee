const APIKEY="e72a2fb35f1d0cfb128604587addd3a2";
const request={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_netwroks=213`,
    fetchTopRated:`movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=23`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentarites:`/discover/movie?api_key=${APIKEY}&with_genres=99`,


}
export default request