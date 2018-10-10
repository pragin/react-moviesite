import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
//import "../css/card.css";

class MovieItem extends Component {
  render() {
    let poster_path;
    if (this.props.movie.poster_path) {
      poster_path = this.props.movie.poster_path;
    } else {
      poster_path =
        "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";
    }
    return (
      <Card className="mt-4">
        <CardImg
          top
          src={"https://image.tmdb.org/t/p/w300/" + `${poster_path}`}
          alt="Card image cap"
        />
      </Card>
    );
  }
}

export default MovieItem;
