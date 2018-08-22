import React , {Component} from 'react';
import { Link } from 'react-router-dom';

import MFLogo2 from '../../images/MFlogo-black.png'

class Bottom extends Component {
  render () {
    return (
      <section id="bottomSection">
        <div className="MF_logo">
          <Link to='/'><img src={MFLogo2} alt="MF Logo" /></Link>
        </div>

        <hr />

        <table id="bottomCategories">
          <thead>
            <tr>
              <th className="Company">Company</th>
              <th className="Categories">Categories</th>
              <th className="Social">Social</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><Link to="/about">About</Link></td>
              <td><Link to="/category/Seating">Seating</Link></td>
              <td className="linkToSocial">
                <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://pinterest.com"><i className="fab fa-pinterest-p"></i></a>
              </td>
            </tr>
            <tr>
              <td><Link to="/404">Press</Link></td>
              <td><Link to="/category/Tables">Tables</Link></td>
              <td></td>
            </tr>
            <tr>
              <td><Link to="/terms">Terms + Conditions</Link></td>
              <td><Link to="/category/Miscellaneous">Misc</Link></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </section>
    )
  }
}

export default Bottom;
