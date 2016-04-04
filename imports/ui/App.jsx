import React, { Component } from 'react';
 
import Molly from './Molly.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  renderMainNav() {
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
      )
  } 


  renderMolly() {
    return (
      <Molly name="Molly" />
    )
  }

  renderLayout() {
    return(

      // TWO COL LAYOUTS
      <div className="row-fluid">
        <div className="col-md-1">
          <ul className="list-group">
            <li className="list-group-item">
              Icon
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <Molly name="Molly" />
        </div>
        <div className="col-md-5">
              <div className="row-fluid">
                <div className="col-md-12">
                  <div className="supercell">
                    <pre>
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
                    </pre>
                  </div>
                </div>
              </div>
              <div className="row-fluid">
                <div className="col-md-12">
                  Properties

<table className="table table-striped"> <thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td> </tr> </tbody> </table>


                </div>
              </div>
        </div>
      </div>
    )
  }
 
  render() {
    return (
      <div className="container-fluid">

        { this.renderMainNav()  }
        { this.renderLayout()  }

      </div>
    );
  }
}
