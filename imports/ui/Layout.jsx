import React, { Component } from 'react';

// COMPONENTS
import MainNav from './MainNav/MainNav.jsx';
import Properties from './Properties/Properties.jsx';
import TextEditor from './TextEditor/TextEditor.jsx';

// MOLVIEWER
import Glmol from './MolViewer/glmol.jsx';
//import ThreeDMol from './MolViewer/3dmol.jsx';


// CLASS
export default class Layout extends Component {
  render() {

    return(
      <div className="fluid">
        <MainNav />

        <div className="flex-container">
          <div className="flex-child">
            <Glmol  />
          </div>

          <div className="flex-child">
            <TextEditor mol="1CRY" /> 
          </div>
        </div>

      </div>
    )
  }
};
