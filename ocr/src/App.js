import MyNavbar from "./Components/Navbar";
import Home from './Components/Home'
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Route,
} from "react-router-dom"
import NotFound from "./Components/NotFound";
function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <Switch >
        <Route exact path="/home">
            <Home />
        </Route>
        <Route exact path="/">
            <About></About>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
