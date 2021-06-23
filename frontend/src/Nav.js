import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      password: " ",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/login/",
      headers: {
        "content-type": "application/json",
      },
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then(({ data }) =>
        data.sucess ? this.props.loggedIn(true) : this.props.loggedIn(false)
      )
      .catch(this.props.loggedIn(false));
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline onSubmit={(e) => this.handleSubmit(e)}>
              <FormControl
                type="text"
                placeholder="Username"
                className="mr-sm-2"
                onChange={(e) => this.handleUsername(e)}
              />
              <FormControl
                type="text"
                placeholder="Password"
                className="mr-sm-2"
                onChange={(e) => this.handlePassword(e)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Nav;
