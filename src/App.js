//import the router
import { Route} from 'react-router-dom'
//components:
import Home from "./components/Home";
import Starships from "./components/Starships";
import './App.css';
function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={Home} />
      <Route path='/starships' render={({location}) => <Starships location={location}/>}/>
    </div>
  );
}
export default App;
