import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

export default class MoviesBar extends Component {
  render() {
    let { buttonColor, getMovies } = this.props;

    return (
      <ButtonGroup>
        <Button
          className="trending"
          name="popular"
          color={buttonColor}
          onClick={() => getMovies("popular")}
        >
          Popular
        </Button>
        <Button
          className="trending"
          color={buttonColor}
          onClick={() => getMovies("now_playing")}
        >
          Now Playing
        </Button>
        <Button
          className="trending"
          name="top-rated"
          color={buttonColor}
          onClick={() => getMovies("top_rated")}
        >
          Top Rated
        </Button>
        <Button
          className="trending"
          name="upcomoing"
          color={buttonColor}
          onClick={() => getMovies("upcoming")}
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
