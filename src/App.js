import './App.css';
import ArtistContainer from './containers/ArtistContainer';
import Navbar from './components/navbar/Navbar';
import AlbumContainer from './containers/AlbumContainer';




function App() {
  return (
    <div>
      <Navbar/>
      <ArtistContainer/>
      <AlbumContainer/>
    </div>
  );
}

export default App;
