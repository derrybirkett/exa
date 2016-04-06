import React, { Component, PropTypes } from 'react';
 
export default class Glmol extends Component {

  render() {

    var divStyle = {
      "width":"500px",
      "height":"500px",
      "background-color":"black"
    }

    return (

        <div id="glmol01" style={this.divStyle}></div> 
        /* <textarea id="glmol01_src"></textarea> */

    );
  }
 
}
 
Glmol.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  //mol: PropTypes.object.isRequired,
};
