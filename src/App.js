import "./App.css";
import UserDetails from "./UserDetails";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <main>
            <Switch>
              <Route path="/" component={UserDetails} />
              <Route exact path="/details" component={Details} /> ,
            </Switch>
          </main>
        </div>
      </Router>
      ;{/* <UserDetails /> */}
    </div>
  );
}

export default App;
