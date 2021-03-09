
import './App.css';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/Profilescreen'
import {selectUser,login,logout} from './features/userSlice'
import { auth } from './firebase';


function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      
      }
      else{
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
    
  }, [dispatch])

  return (
    
    <div className="App">
      
      <Router>
        {!user?
        (<LoginScreen/>):(
        <Switch>
          <Route path="/profile">
            <ProfileScreen/>
          </Route>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>)
        }
      </Router>
    </div>
    
  );
}

export default App;
