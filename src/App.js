import './App.css';
import ArtistContainer from './containers/ArtistContainer';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Navbar from './components/navbar/Navbar';
import AlbumContainer from './containers/AlbumContainer';
import SongContainer from './containers/SongContainer'


function App() {
  return (

    // <div>
    //   <Navbar/>
    //   <ArtistContainer/>
    // </div>

    <div className="App">
    <Navbar/>
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={AlbumContainer}/> 
        <Route path='/artists' component={ArtistContainer}/>
        <Route path='/songs' component={SongContainer}/>
        
      </Switch>
    </Router>
  </div>

    // <div>
    //   <Navbar/>
    //   <ArtistContainer/>
    //   <AlbumContainer/>
    // </div>

  );
}

export default App;

/* in the return statement: 
 <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={AlbumContainer}/>  
          <Route path='/artists' component={ArtistContainer}/>
          <Route path='/songs' component={SongContainer}/>
          <Route path='/playlist' component={PlayListContainer}/>
          <Route path='/admin' component={AdminContainer}/>
        </Switch>
      </Router>
    </div>


*/