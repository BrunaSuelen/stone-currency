import React, { Component } from "react";

import Form from "../../components/Form/Form";
export default class Home extends Component {
  
  teste(e) {
    console.log(e)
  }

  render() {
    return (
      <Form changeTeste={(e) => this.teste(e)}></Form>
    );
  }
}
