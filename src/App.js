
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import requests from './request'
function App() {
  
  return (
    <div className='app'>




      {/* Navbar */}
<Navbar/>

      {/* Banner */}

      <Banner/>


      {/* Row components */}
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     
     isLargeRow
     
     
     />


     <Row title="Trending" fetchUrl={requests.fetchTrending}/>

     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> */}
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentarites" fetchUrl={requests.fetchDocumentarites}/>

    </div>
  );
}

export default App;
