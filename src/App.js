import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import SecondPage from "./Components/SecondPage/SecondPage";
import LastPage from "./Components/LastPage/LastPage";
import ResumePage from "./Components/ResumePage/ResumePage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <SecondPage />
            <LastPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
