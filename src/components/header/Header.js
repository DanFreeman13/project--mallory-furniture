import React , {Component} from 'react';
import { Link } from 'react-router-dom';

import MFLogo1 from '../../images/MFlogo.png'


class Header extends Component {

  constructor() {
    super();

    this.state = {
      category: [{key: 0, name: "Seating"},{key: 1, name: 'Tables'},{key: 2, name: 'Desks'},{key: 3, name: 'Storage'},{key: 4, name: 'Bedroom'},{key: 5, name: 'Miscellaneous'}]
    }
  }

  render () {
    return (
      <nav id='mainHeader'>
        <Link to="/" id="topLogo"><img src={MFLogo1} alt="MFlogo" /></Link>

        <ul className="mainHeader_list 1">
          <li className="mainHeader_elem"><Link to='/about'>About</Link></li>
          <li className="mainHeader_elem"><Link to='/terms'>Terms+Conditions</Link></li>
        </ul>

        <ul className="mainHeader_list 2">
          <li className="mainHeader_elem"><Link to='/all-products'>All</Link></li>
          {this.state.category.map(elements => {
            return(<li key={elements.key} className="mainHeader_elem"><Link to={`/category/${ elements.name }`}>{elements.name}</Link></li>)
          })}
        </ul>

        <a id="shopping" href=""><i className="fas fa-shopping-cart"></i></a>
      </nav>
    )
  }
}

export default Header;
