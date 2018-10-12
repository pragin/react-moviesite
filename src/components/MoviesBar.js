import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

export default class MoviesBar extends Component {
  render() {
    let { buttonColor, getMovies, setCurrentPageToOne } = this.props;

    const runFunctions = getMoviesParameter => {
      setCurrentPageToOne();
      getMovies(getMoviesParameter);
    };
    return (
      <ButtonGroup>
        <Button
          className="trending"
          name="popular"
          color={buttonColor}
          onClick={() => runFunctions("popular")}
        >
          Popular
        </Button>
        <Button
          className="trending"
          color={buttonColor}
          onClick={() => runFunctions("now_playing")}
        >
          Now Playing
        </Button>
        <Button
          className="trending"
          name="top-rated"
          color={buttonColor}
          onClick={() => runFunctions("top_rated")}
        >
          Top Rated
        </Button>
        <Button
          className="trending"
          name="upcomoing"
          color={buttonColor}
          onClick={() => runFunctions("upcoming")}
        >
          Upcoming
        </Button>
      </ButtonGroup>
    );
  }
}

//Declare props
MoviesBar.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired
};

//Default values for propes
MoviesBar.defaultProps = {
  buttonColor: "secondary",
  getMovies: () => {}
};
