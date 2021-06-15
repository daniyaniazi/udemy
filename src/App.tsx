import NavBar from "./components/NavBar/NavBar";
import "./style/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { Course } from "./components/CourseDetail/Course";
import ImportantLinks from "./components/ImportantLinks";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/course/:id" component={Course} />
          {/* <Route path="*" component={() => <h1>404 PAGE NOT FOUND</h1>} /> */}
        </Switch>
        <ImportantLinks />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
