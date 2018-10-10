import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import MoviesList from "./MoviesList";
import AppNavbar from "./AppNavbar";
import MoviesBar from "./MoviesBar";
import Footer from "./Footer";
import "../css/custom.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      buttonColor: "secondary",
      hasError: false
    };

    this.changeColor = this.changeColor.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.getMoviesBasedOnGenre = this.getMoviesBasedOnGenre.bind(this);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log("error: " + error, log);
    logErrorToMyService(error, info);
  }

  componentWillMount() {
    if (this.state.genres.length === 0) {
      this.getGenres();
    }

    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=575152ea8aba130baa79849ce4e22c04&language=en-US&page=1"
      )
      .then(response => {
        //console.log(response.data.results);

        this.setState({ movies: response.data.results });
      })
      .catch(err => console.log(err));
  }

  changeColor(buttonColor) {
    const currentColor = this.state.buttonColor;
    if (currentColor != buttonColor) {
      this.setState({ buttonColor: buttonColor });
    }
  }

  getMovies(opt = "popular") {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          `${opt}` +
          "?api_key=575152ea8aba130baa79849ce4e22c04&language=en-US&page=1"
      )
      .then(response => {
        //console.log(response.data.results);
        this.setState({ movies: response.data.results });
      })
      .catch(err => console.log(err));
  }

  /**This method is fired when the genres drop down is clicked */
  getGenres() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=575152ea8aba130baa79849ce4e22c04&language=en-US"
      )
      .then(response => {
        console.log(response.data.genres);
        this.setState({ genres: response.data.genres });
      })
      .catch(err => console.log(err));
  }

  /** This method is fired when a genre on the genres dropdown is clicked */
  getMoviesBasedOnGenre(genreID = 28) {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=575152ea8aba130baa79849ce4e22c04&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
          `${genreID}`
      )
      .then(response => {
        console.log(response.data.results);
        this.setState({ movies: response.data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.hasError) {
      return <h1>Somethig went wrong</h1>;
    }

    return (
      <div>
        <AppNavbar
          getMoviesBasedOnGenre={this.getMoviesBasedOnGenre}
          getGenres={this.getGenres}
          genres={this.state.genres}
        />
        <div className="movies-bar">
          <MoviesBar
            buttonColor={this.state.buttonColor}
            changeColor={this.changeColor}
            getMovies={this.getMovies}
          />
        </div>
        <MoviesList movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
