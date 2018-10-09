import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class MoviesBar extends Component {
  render() {
    let { buttonColor, changeColor, getMovies } = this.props;

    return (
      <ButtonGroup>
        <Button
          className=""
          name="popular"
          color={buttonColor}
          onClick={() => getMovies("popular")}
        >
          Popular
        </Button>
        <Button color={buttonColor} onClick={() => getMovies("now_playing")}>
          Now Playing
        </Button>
        <Button
          name="top-rated"
          color={buttonColor}
          onClick={() => getMovies("top_rated")}
        >
          Top Rated
        </Button>
        <Button
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
