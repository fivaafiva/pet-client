import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                {/*Home*/}
                <Switch>
                    <Route>
                        <Header/>
                        <Home/>
                    </Route>

                </Switch>

                {/*Footer*/}
            </div>
        </Router>

    );
}

export default App;
