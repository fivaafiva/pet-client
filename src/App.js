import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Switch, Route} from "react-router-dom";
import Profile from "./components/Profiles/Profile";
import './App.css'

function App() {
    return (
            <div>

                <Switch>
                    <Route path="/" exact>
                        <Header/>
                        <Home/>
                    </Route>


                    <Route path="/profile">
                        <Header/>
                        <Profile/>
                    </Route>


                </Switch>
            </div>

    );
}

export default App;
