import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class MoviesBar extends Component {
  render() {
    let { buttonColor, changeColor } = this.props;

    return (
      <ButtonGroup>
        <Button
          name="popular"
          color={buttonColor}
          onClick={() => changeColor("secondary")}
        >
          Popular
        </Button>
        <Button color={buttonColor} onClick={() => changeColor("info")}>
          Now Playing
        </Button>
        <Button
          name="top-rated"
          color={buttonColor}
          onClick={() => changeColor("secondary")}
        >
          Top Rated
        </Button>
        <Button
          name="upcomoing"
          color={buttonColor}
          onClick={() => changeColor("secondary")}
        >
          Upcoming
        </Button>
      </ButtonGroup>
    );
  }
}
