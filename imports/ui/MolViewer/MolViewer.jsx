import React, { Component, PropTypes } from 'react';
 
export default class MolViewer extends Component {

  render() {

    var divStyle = {
      height: '400px', 
      width: '400px', 
      position: 'relative' 
    };

    return (

      <div style={divStyle} className ='viewer_3Dmoljs' data-pdb='2POR' data-backgroundcolor='0xffffff' data-style='stick'></div>

    );
  }
 
}
 
MolViewer.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  //mol: PropTypes.object.isRequired,
};
