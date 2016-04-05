import React, { Component } from 'react';
import MainNav from './MainNav/MainNav.jsx';
import Molly from './Molly.jsx';

export default class Layout extends Component {
  render() {
    return(
      <div className="container-fluid">
        <MainNav />

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
                      Supercell
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
      </div>
    )
  }
};
