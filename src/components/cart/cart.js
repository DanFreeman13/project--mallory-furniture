import React, { Component } from 'react';



class Cart extends Component {

  removeElement = (e) => {
    e.currentTarget.parentElement.outerHTML = null;
  }


  render() {
    return(
      <div autoFocus id="shoppingCartList" >
        <header><h2>Your Cart List</h2></header>
          <ul id="cartList">
            <li className="tag">No elements selected yet<i className="fas fa-times" onClick={this.removeElement}></i></li>
            <li className="tag">No elements selected yet 1<i className="fas fa-times" onClick={this.removeElement}></i></li>
            <li className="tag">No elements selected yet 2<i className="fas fa-times" onClick={this.removeElement}></i></li>
            <li className="tag">No elements selected yet 3<i className="fas fa-times" onClick={this.removeElement}></i></li>
            <li className="tag">No elements selected yet 4<i className="fas fa-times" onClick={this.removeElement}></i></li>

            <li className="carList_background"></li>
          </ul>
      </div>
    )
  }
}

export default Cart;
