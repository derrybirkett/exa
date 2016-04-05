import React, { Component } from 'react';
 
// App component - represents the whole app
export default class Properties extends Component {
  render() {
      return (
          <div className="properties">
              Properties

              <table className="table table-striped"> 
                <thead> 
                  <tr> 
                    <th>Property</th> 
                    <th>Value</th> 
                  </tr> 
                </thead> 
                <tbody> 
                  <tr> 
                    <td>Mark</td> 
                    <td>@mdo</td> 
                  </tr> 
                  <tr> 
                    <td>Thornton</td> 
                    <td>@fat</td> 
                  </tr> 
                  <tr> 
                    <td>the Bird</td> 
                    <td>@twitter</td> 
                  </tr> 
                </tbody> 
              </table>

          </div>
      );
  }
};
