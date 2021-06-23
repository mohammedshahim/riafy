import React, { Component } from "react";
import AllStocks from "./AllStocks";
import "./App.css";
import SearchStock from "./SearchStock";
import Nav from "./Nav";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
    };
  }

  handleLogin(status) {
    if (status) {
      this.setState({ loggedIn: true });
      console.log("logged in");
    } else {
      this.setState({ loggedIn: false });
      console.log("logged not");
    }
  }

  render() {
    return (
      <>
        <Nav loggedIn={(result) => this.handleLogin(result)} />

        <>
          <AllStocks />
          <SearchStock />
        </>
      </>
    );
  }
}

export default App;
