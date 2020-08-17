import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import MovieMain from "./components/movieMain";
import TvMain from "./components/tvMain";
import MovieDetails from "./components/movieDetails";
import TvDetails from "./components/tvDetails";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <div className="mainNav">
          <Link to="/movie">
            <div className="mainHeadingMovieBox">
              <h3 className="mainHeadingMovie">MOVIES</h3>
            </div>
          </Link>
          <Link to="/tv">
            <div className="mainHeadingTvBox">
              <h3 className="mainHeadingTv">TV SHOWS</h3>
            </div>
          </Link>
        </div>
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/movie" component={MovieMain} />
            <Route path="/tv" component={TvMain} />
            <Route path="/movieDetails" component={MovieDetails} />
            <Route path="/tvDetails" component={TvDetails} />
          </Switch>
        </main>
        <div className="footer">a</div>
      </div>
    </Router>
  );
}

export default App;
