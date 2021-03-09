
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //logged in
        console.log(userAuth);
      }
      else{
        //logged out
      }
    })
    return () => {
      cleanup
    }
  }, [])

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact to="/signIn">
          <LoginScreen/>
        </Route>
        <Route  to="/">
          <HomeScreen/>
        </Route>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
