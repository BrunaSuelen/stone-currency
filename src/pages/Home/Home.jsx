import React, { Component } from "react";

import Form from "../../components/Form/Form";
import Conversion from "../../components/Conversion/Conversion";
import Background from "../../templates/Background/Background";
import Header from "../../templates/Header/Header";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showConversion: false,
      formValues: {}
    };
  }

  showConvertion(formValues) {
    let dataToUpdate = {...this.state};
    dataToUpdate.showConversion = true;
    dataToUpdate.formValues = formValues;

    this.setState(dataToUpdate);
  }

  backToForm() {
    let dataToUpdate = {...this.state};
    dataToUpdate.showConversion = false;

    this.setState(dataToUpdate);
  }

  render() {
    return (
      <Background>
        <Header></Header>
        {
          this.state.showConversion
          ? <Conversion formValues={this.state.formValues} goBack={() => this.backToForm()}></Conversion>
          : <Form showConversion={(prop) => this.showConvertion(prop)}></Form>
        }
      </Background>
    );
  }
}
