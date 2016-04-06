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
        <div>
          <div id="glmol02" style={this.divStyle}></div> 
        <textarea id="glmol02_src">  HETATM    1  C                  -3.450  -0.135   0.363 HETATM    2  C                  -2.116  -0.033  -0.019 HETATM    3  C                  -1.805   0.087  -1.347 HETATM    4  C                  -2.806   0.106  -2.304 HETATM    5  C                  -4.116   0.005  -1.917 HETATM    6  C                  -4.463  -0.118  -0.575 HETATM    7  I                  -3.911  -0.321   2.435 HETATM    8  H                  -1.346  -0.049   0.721 HETATM    9  O                  -0.495   0.197  -1.832 HETATM   10  H                  -2.532   0.201  -3.333 HETATM   11  H                  -4.910   0.017  -2.633 HETATM   12  O                  -5.799  -0.212  -0.300 HETATM   13  C                   0.605   0.190  -1.001 HETATM   14  C                   2.873   0.179   0.629 HETATM   15  C                   2.242   1.367   0.305 HETATM   16  C                   1.117   1.375  -0.504 HETATM   17  C                   1.244  -1.002  -0.684 HETATM   18  C                   2.366  -1.011   0.121 HETATM   19  C                   4.099   0.189   1.522 HETATM   20  H                   2.619   2.294   0.684 HETATM   21  I                   0.214   3.227  -1.019 HETATM   22  I                   0.527  -2.833  -1.490 HETATM   23  H                   2.873  -1.924   0.340 HETATM   24  H                  -6.001  -0.299   0.639 HETATM   25  H                   3.926  -0.412   2.407 HETATM   26  H                   4.290   1.203   1.851 HETATM   27  C                   5.361  -0.378   0.815 HETATM   28  C                   6.589   0.047   1.611 HETATM   29  H                   5.421   0.038  -0.183 HETATM   30  N                   5.273  -1.832   0.729 HETATM   31  O                   6.865   1.378   1.588 HETATM   32  O                   7.254  -0.704   2.264 HETATM   33  H                   6.356   1.896   0.955 HETATM   34  H                   5.561  -2.266   1.590 HETATM   35  H                   5.779  -2.220  -0.046 CONECT    1    2    6    7 CONECT    2    1    3    8 CONECT    3    2    4    9 CONECT    4    3    5   10 CONECT    5    4    6   11 CONECT    6    1    5   12 CONECT    7    1 CONECT    8    2 CONECT    9    3   13 CONECT   10    4 CONECT   11    5 CONECT   12    6   24 CONECT   13    9   16   17 CONECT   14   15   18   19 CONECT   15   14   16   20 CONECT   16   13   15   21 CONECT   17   13   18   22 CONECT   18   14   17   23 CONECT   19   14   25   26   27 CONECT   20   15 CONECT   21   16 CONECT   22   17 CONECT   23   18 CONECT   24   12 CONECT   25   19 CONECT   26   19 CONECT   27   19   28   29   30 CONECT   28   27   31   32 CONECT   29   27 CONECT   30   27   34   35 CONECT   31   28   33 CONECT   32   28 CONECT   33   31 CONECT   34   30 CONECT   35   30 END</textarea>
        </div>

        <div>
        <textarea id="glmol02_src" value=" HETATM    1  C                  -3.450  -0.135   0.363 HETATM    2  C                  -2.116  -0.033  -0.019 HETATM    3  C                  -1.805   0.087  -1.347 HETATM    4  C                  -2.806   0.106  -2.304 HETATM    5  C                  -4.116   0.005  -1.917 HETATM    6  C                  -4.463  -0.118  -0.575 HETATM    7  I                  -3.911  -0.321   2.435 HETATM    8  H                  -1.346  -0.049   0.721 HETATM    9  O                  -0.495   0.197  -1.832 HETATM   10  H                  -2.532   0.201  -3.333 HETATM   11  H                  -4.910   0.017  -2.633 HETATM   12  O                  -5.799  -0.212  -0.300 HETATM   13  C                   0.605   0.190  -1.001 HETATM   14  C                   2.873   0.179   0.629 HETATM   15  C                   2.242   1.367   0.305 HETATM   16  C                   1.117   1.375  -0.504 HETATM   17  C                   1.244  -1.002  -0.684 HETATM   18  C                   2.366  -1.011   0.121 HETATM   19  C                   4.099   0.189   1.522 HETATM   20  H                   2.619   2.294   0.684 HETATM   21  I                   0.214   3.227  -1.019 HETATM   22  I                   0.527  -2.833  -1.490 HETATM   23  H                   2.873  -1.924   0.340 HETATM   24  H                  -6.001  -0.299   0.639 HETATM   25  H                   3.926  -0.412   2.407 HETATM   26  H                   4.290   1.203   1.851 HETATM   27  C                   5.361  -0.378   0.815 HETATM   28  C                   6.589   0.047   1.611 HETATM   29  H                   5.421   0.038  -0.183 HETATM   30  N                   5.273  -1.832   0.729 HETATM   31  O                   6.865   1.378   1.588 HETATM   32  O                   7.254  -0.704   2.264 HETATM   33  H                   6.356   1.896   0.955 HETATM   34  H                   5.561  -2.266   1.590 HETATM   35  H                   5.779  -2.220  -0.046 CONECT    1    2    6    7 CONECT    2    1    3    8 CONECT    3    2    4    9 CONECT    4    3    5   10 CONECT    5    4    6   11 CONECT    6    1    5   12 CONECT    7    1 CONECT    8    2 CONECT    9    3   13 CONECT   10    4 CONECT   11    5 CONECT   12    6   24 CONECT   13    9   16   17 CONECT   14   15   18   19 CONECT   15   14   16   20 CONECT   16   13   15   21 CONECT   17   13   18   22 CONECT   18   14   17   23 CONECT   19   14   25   26   27 CONECT   20   15 CONECT   21   16 CONECT   22   17 CONECT   23   18 CONECT   24   12 CONECT   25   19 CONECT   26   19 CONECT   27   19   28   29   30 CONECT   28   27   31   32 CONECT   29   27 CONECT   30   27   34   35 CONECT   31   28   33 CONECT   32   28 CONECT   33   31 CONECT   34   30 CONECT   35   30 END " />
      </div>
    </div>
    );
  }
 
}
 
Glmol.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  //mol: PropTypes.object.isRequired,
};
