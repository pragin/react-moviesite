import { Row, Col, CardDeck, CardGroup, Container } from "reactstrap";
import React, { Component } from "react";
import MovieItem from "./MovieItem";
import "../css/custom.css";

class MoviesList extends Component {
  render() {
    let movies;
    //const {getMovies} = this.props.getMovies;
    if (this.props.movies) {
      movies = this.props.movies.map(movie => {
        return (
          <Col sm={3} key={movie.id}>
            <MovieItem movie={movie} />
          </Col>
        );
      });
    }
    return (
      <Container>
        <Row className="row">
          <CardDeck className="card-deck"> {movies}</CardDeck>
        </Row>
      </Container>
    );
  }
}

export default MoviesList;
