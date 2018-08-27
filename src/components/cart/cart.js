import React, { Component } from 'react';



class Cart extends Component {

  render() {
    return(
      <div autoFocus id="shoppingCartList" >
        <header><h2>Your Cart List</h2></header>
        <aside><button onClick={this.props.fnAdd}></button><p>Add Current Item to cart</p></aside>
          <ul id="cartList">
            {this.props.data.map(selectedProd => {
              return (
                <li key={ selectedProd.key } id={selectedProd.key} className="tag">
                <i className="fas fa-times" id={selectedProd.id} onClick={this.props.fnRv}></i>
                  <div className='selectedImageCart'>
                    <img src={selectedProd.image} alt="Selected Product"/>
                  </div>
                  <div className='selectedInfoCart'>
                  {selectedProd.item}
                  </div>
                </li>
              )
            }
            )}

            <li className="carList_background"></li>
          </ul>
      </div>
    )
  }
}

export default Cart;
