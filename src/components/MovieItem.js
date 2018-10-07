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
          // wposter_pathth="100%"
          src={"https://image.tmdb.org/t/p/w300/" + poster_path}
          alt="Card image cap"
        />
        {/* <CardBody>
          <CardTitle>Title: {this.props.movie.title}</CardTitle>
          <CardSubtitle>Year: {this.props.movie.release_date}</CardSubtitle>
          <CardText>Desc: {this.props.movie.overview}</CardText>
        </CardBody> */}
      </Card>
    );
  }
}

export default MovieItem;
