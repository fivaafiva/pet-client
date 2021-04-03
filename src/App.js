import Home from './components/Home/Home';
import {Switch, Route} from "react-router-dom";
import Profile from "./components/Profiles/Profile";
import './App.css'
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </>

  );
}

export default App;
