
import {Switch, Route} from "react-router-dom";
import Profile from "./Components/Profiles/Profile";
import './App.css'
import Navbar from "./Components/Nav/Navbar";
import Home from "./Components/Home/Home";

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
