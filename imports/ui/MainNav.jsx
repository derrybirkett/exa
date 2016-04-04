import React, { Component } from 'react';
 
// App component - represents the whole app
export default class MainNav extends Component {
  render() {
      return (
        <div className="row-fluid">
          <nav className="navbar navbar-default">
             <a className="navbar-brand" href="#">Exa</a> 

              <ul className="nav navbar-nav">
                  <li><a href="/">Save</a></li>
                  <li><a href="/">Undo</a></li>
                  <li><a href="/">Redo</a></li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                  <li><a href="/">Import</a></li>
                  <li><a href="/">Model</a></li>
                  <li><a href="/">Help</a></li>
              </ul>

          </nav>
        </div>
      );
  }
};
