import NavBar from "./NavBar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExHall from "./ExHall";
import CuisinePage from "./CuisinePage";
import Clothes from "./Clothes";
import AfricaCus from "./cuisines/AfricaCus";
import AsiaCus from "./cuisines/AsiaCus";
import EuroCus from "./cuisines/EuroCus";
import NAmerCus from "./cuisines/NAmerCus";
import SAmerCus from "./cuisines/SAmerCus";
import AussieCus from "./cuisines/AussieCus";
import NAmerClo from "./clothes/NAmerClo";
import SAmerClo from "./clothes/SAmerClo";
import AfricaClo from "./clothes/AfricaClo";
import AsiaClo from "./clothes/AsiaClo";
import EuroClo from "./clothes/EuroClo";
import AussieClo from "./clothes/AussieClo";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/ex">
              <ExHall/>
            </Route>
            <Route path="/cuis">
              <CuisinePage/>
            </Route>
            <Route path="/clo">
              <Clothes/>
            </Route>

            

            <Route path="/namerica-c">
              <NAmerCus/>
            </Route>
            <Route path="/europe-c">
              <EuroCus/>
            </Route>
            <Route path="/asia-c">
              <AsiaCus/>
            </Route>
            <Route path="/samerica-c">
              <SAmerCus/>
            </Route>
            <Route path="/africa-c">
              <AfricaCus/>
            </Route>
            <Route path="/australia-c">
              <AussieCus/>
            </Route>

            <Route path="/namerica-l">
              <NAmerClo/>
            </Route>
            <Route path="/europe-l">
              <EuroClo/>
            </Route>
            <Route path="/asia-l">
              <AsiaClo/>
            </Route>
            <Route path="/samerica-l">
              <SAmerClo/>
            </Route>
            <Route path="/africa-l">
              <AfricaClo/>
            </Route>
            <Route path="/australia-l">
              <AussieClo/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
