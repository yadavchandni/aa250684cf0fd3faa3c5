import "./App.css";

//Fragment import
import { Fragment } from "react";

//Router files
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

//local files
import FetchPostDetails from "./components/fetchPostDetails";
import OriginalRowDetails from "./components/originalRowDetails";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Switch>
            {/* ==================== Fect post details===================== */}
            <Route exact path="/" component={FetchPostDetails} />

            {/* ==================== Original Row  details===================== */}
            <Route exact path="/original-data" component={OriginalRowDetails} />
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
