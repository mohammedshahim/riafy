import React, { Component } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";

export class SearchStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {},
      stockName: "",
    };
  }

  async getStock(e) {
    e.preventDefault();
    const { data } = await axios({
      method: "post",
      url: "http://localhost:5000/getStock/",
      headers: {
        "content-type": "application/json",
      },
      data: {
        name: this.state.stockName,
      },
    });

    this.setState({ stock: data });
  }

  setStockName(e) {
    // const oldStockName = this.state.stockName;
    // const newSotckName = e.target.value;
    this.setState({ stockName: e.target.value });
  }

  render() {
    return (
      <>
        <Container className="mt-5">
          <h2>Search Stocks</h2>
          <Form onSubmit={(e) => this.getStock(e)}>
            <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
              <Form.Label>Stock Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => this.setStockName(e)}
                placeholder="Bhansali Engg."
              />
            </Form.Group>
            <Button variant="primary" className="col-1 ml-3" type="submit">
              Search
            </Button>
          </Form>

          {this.state.stock.name ? (
            <Card style={{ width: "18rem" }} className="mt-5">
              <Card.Body>
                <Card.Title>Stock: {this.state.stock.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Current Market Price: {this.state.stock.currentMarketPrice}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Market Cap: {this.state.stock.marketCap}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Stock P/E: {this.state.stock.stockPE}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Dividend Yield: {this.state.stock.devidenYeild}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  EPS: {this.state.stock.eps}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Reserves: {this.state.stock.reserves}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Debt: {this.state.stock.debt}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ) : null}
        </Container>
      </>
    );
  }
}

export default SearchStock;
