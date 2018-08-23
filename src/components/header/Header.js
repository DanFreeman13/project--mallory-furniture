import React , {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

import MFLogo1 from '../../images/MFlogo.png'


class Header extends Component {

  constructor(props) {
    super();

    this.state = {
      category: [
        {key: 0, name: "Seating", classUsed: 'mainHeader_elem'},
        {key: 1, name: 'Tables', classUsed: 'mainHeader_elem'},
        {key: 2, name: 'Desks', classUsed: 'mainHeader_elem'},
        {key: 3, name: 'Storage', classUsed: 'mainHeader_elem'},
        {key: 4, name: 'Bedroom', classUsed: 'mainHeader_elem'},
        {key: 5, name: 'Miscellaneous', classUsed: 'mainHeader_elem'}],
      show: false,
      otherState: '.mainHeader_elem'
    }
  }

  showCartList = () => {

    this.setState({
      show:!this.state.show
    })

  }

  render () {
    return (
      <div id="header">
      <nav id='mainHeader'>
        <Link to="/" id="topLogo"><img src={MFLogo1} alt="MFlogo" /></Link>

        <ul className="mainHeader_list 1">
          <li className="mainHeader_elem">
          <NavLink
            to='/about' activeStyle={
            {fontWeight: 'bold', color: '#fff'}
          }>About</NavLink>
          </li>
          <li className="mainHeader_elem">
          <NavLink to='/terms' activeStyle={
            {fontWeight: 'bold', color: '#fff'}}
            >Terms+Conditions</NavLink>
          </li>
        </ul>

        <ul className="mainHeader_list 2">
          <li className="mainHeader_elem">
          <NavLink to='/all-products' activeStyle={
            {fontWeight: 'bold', color: '#fff'}}
            >All</NavLink>
          </li>
          {this.state.category.map(elements => {
            return(
              <li key={elements.key} className='mainHeader_elem'>
              <NavLink to={`/category/${ elements.name }`} activeStyle={{fontWeight: 'bold',
              color: '#fff'
              }}>{elements.name}</NavLink>
              </li>)
          })}
        </ul>

        <a id="shopping" onClick={ this.showCartList }><i className="fas fa-shopping-cart"></i></a>


      </nav>

      { this.state.show &&
        <div autoFocus id="shoppingCartList" >
          <header><h2>Your Cart List</h2></header>
            <ul id="cartList">
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="tag">No elements selected yet</li>
              <li className="carList_background"></li>
            </ul>
        </div>
      }
      </div>
    )
  }
}

export default Header;
