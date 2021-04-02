import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Profile from "./components/Profiles/Profile";
import './App.css'

function App() {
    return (
        <Router>
            <div>
                {/*Home*/}
                <Switch>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>

                </Switch>


                {/*Profile*/}

                <Switch>
                    <Route path="/profile">
                        <Header/>
                        <Profile/>
                    </Route>

                </Switch>
                {/*Footer*/}
            </div>
        </Router>

    );
}

export default App;
