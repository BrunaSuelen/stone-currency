import React, { Component } from "react";

import Form from "../../components/Form/Form";
import Conversion from "../../components/Conversion/Conversion";

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

  render() {
    return (
      <React.Fragment>
        {
          this.state.showConversion
          ? <Conversion formValues={this.state.formValues}></Conversion>
          : <Form showConversion={(prop) => this.showConvertion(prop)}></Form>
        }
      </React.Fragment>
    );
  }
}
