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
    const poster_path = this.props.movie.poster_path;
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
