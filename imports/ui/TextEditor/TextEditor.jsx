import React, { Component, PropTypes } from 'react';
 
// App component - represents the whole app
export default class TextEditor extends Component {
  render() {
      return (
          <div>
            <textarea className="text-editor" id="glmol02_src" defaultValue={this.props.mol} /> 
          </div>

         /* <div className="text-editor">
                    <br />REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000           
                    <br />REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
                    <br />REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       97.46667            
                    <br />REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000           
                    <br />REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000           
                    <br />REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000           
                    <br />REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000           
                    <br />REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
                    <br />REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       97.46667            
                    <br />REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
                    <br />REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       97.46667            
                    <br />REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
                    <br />REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       97.46667            
                    <br />REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
                    <br />REMARK 290   SMTRY3   8  0.000000  0.000000  1.000000       97.46667            
          </div>
      );
  }*/
    )
  }
}

TextEditor.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  mol: PropTypes.string.isRequired,
};
