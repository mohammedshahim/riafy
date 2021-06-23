import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";
import axios from "axios";

export class AllStocks extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/");
    this.setState((this.state.data = data));
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        <h2 style={{ textAlign: "center" }}>Avilable Stocks</h2>
        <Container>
          <Row>
            {this.state.data
              ? this.state.data.map((stock, key) => (
                  <Card style={{ width: "18rem" }} key={key}>
                    <Card.Body>
                      <Card.Title>{stock.name}</Card.Title>
                    </Card.Body>
                  </Card>
                ))
              : null}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllStocks;
