import './App.css';
import ArtistContainer from './containers/ArtistContainer';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 


function App() {
  return (
    // <div>
    //   <Navbar/>
    //   <ArtistContainer/>
    // </div>

    <div className="App">
    <Router>
      <Sidebar />
      <Switch>
       
        <Route path='/artists' component={ArtistContainer}/>
        
      </Switch>
    </Router>
  </div>
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