import React, { Component } from 'react';
import MainNav from './MainNav/MainNav.jsx';
import MolViewer from './MolViewer/MolViewer.jsx';
import Properties from './Properties/Properties.jsx';
import Supercell from './Supercell/Supercell.jsx';

export default class Layout extends Component {
  render() {
    return(
      <div className="fluid">
        <MainNav />

        <div className="flex-container">
          <div className="flex-child">
            Flex One
          </div>
          <div className="flex-child">
            Flex Two
          </div>
        </div>

      </div>
    )
  }
};
