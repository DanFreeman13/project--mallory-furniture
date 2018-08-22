import React, { Component } from 'react';
import request from 'superagent';

class Product extends Component {

  constructor(props) {
    super();

    this.state = {
      item: "",
      image: "",
      price: 0,
      condition: "",
      meassure: {width: 0, height: 0, length: 0}
    }

    const ENDPOINT = `https://mallory-furniture-admin.now.sh/api/v1/products/`+props.match.params.productId;

    request
    .get(ENDPOINT)
    .then(response => {
      this.setState({
        item: response.body.item,
        image: response.body.imageLink,
        price: response.body.price,
        condition: response.body.condition,
        meassure: {width: response.body.width, height: response.body.height, length: response.body.length }
      })
    })

  }


  render(props) {
    return (
      <article className="SelectedInfo">
        <section className="productInfo">

          <div className="singleProductImage">
            <img src={this.state.image} alt="SingleProduct" />
          </div>

          <div className="selectedProductInfo">
            <div id="Info">
              <p id="SelectedTitle">{this.state.item}</p>
              <p className="PriceTitle">${this.state.price}</p>
            </div>
            <div id="productStats">
              <div className="descColumn">
                <p id="stat" >Condition</p>
                <p className="statCond">{this.state.condition}</p>
              </div>
              <div className="descColumn">
                <p id="stat">Meassurements</p>
                <p className="statCond"> W:{this.state.meassure.width}, H:{this.state.meassure.height}, L:{this.state.meassure.length} </p>
              </div>
              <button id="addToCart">Add to Cart</button>
            </div>

          </div>

        </section>


      </article>
    );
  }
}

export default Product;
