import React , {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import request from 'superagent'


import MFLogo1 from '../../images/MFlogo.png'
import Cart from '../cart/cart.js'

var counterProds = 0

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
      selected: []
    }
  }

  showCartList = () => {

    this.setState({
      show:!this.state.show
    })

  }


  addCurentId = (e) => {
    var review = e.currentTarget.baseURI;
    var start= review.length-1;
    var finish = review.length-11;
    var textId = [];
    for (var i=start; i>=finish; i--) {
      if (review[i]!== "/") {
        textId.unshift(review[i]);
      } else { textId.unshift(""); }
    }
    var prodid=textId.join("")

    //
    const ENDPOINT = `https://mallory-furniture-admin.now.sh/api/v1/products/`+prodid;

    request
    .get(ENDPOINT)
    .then(response => {
      var selectedProd = {
        key: counterProds,
        id: response.body._id,
        item: response.body.item,
        image: response.body.imageLink,
        price: response.body.price};
      this.setState({
        selected: [...this.state.selected,selectedProd]
      })
      counterProds++;
    })
    //

    return this.state

  }

  componentWillMount(props) {

    this.setState({
      selected: this.state.selected.splice([props],1)
    })
  }

  removeElement = (clicked) => {
    var position= clicked.currentTarget.parentElement.attributes.id.nodeValue;

    this.componentWillMount(position);

    clicked.currentTarget.parentElement.outerHTML=null;

    return this.state;

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
        <Cart data={this.state.selected} fnAdd={this.addCurentId} fnRv={this.removeElement}/>
      }
      </div>
    )
  }
}

export default Header;
