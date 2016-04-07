import React, { Component, PropTypes } from 'react';
 
export default class Glmol extends Component {

  render() {
    var divStyle = {
      "width":"500px",
      "height":"500px",
      "background-color":"black"
    }


    return (
      <div className="wrapper">
          <div id="glmol02" style={this.divStyle}></div> 
    </div>
    );
  }
 
}
