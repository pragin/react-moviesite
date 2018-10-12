import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "../css/custom.css";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.setState({ currentPage: this.props.currentPage });
    }
  }

  render() {
    return (
      <div className="prev-next-wrapper">
        <Button
          className="page-control"
          color="info"
          onClick={() => {
            this.state.currentPage !== 1 ? this.props.setPage(-1) : "";
          }}
        >
          Prev
        </Button>
        <Button disabled className="button-currentpage" color="success">
          {this.state.currentPage}
        </Button>
        <Button
          className="page-control"
          color="info"
          onClick={() => this.props.setPage(1)}
        >
          Next
        </Button>
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  currentPage: 1
};
