import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

class All extends Component {

  constructor() {
    super();

    this.state = {
      product: [],
      original: [],
    }

    const ENDPOINT = 'https://mallory-furniture-admin.now.sh/api/v1/products';
    var key=0;
    request
      .get(ENDPOINT)
      .then(response => {
        response.body.map(each => {
          var objectNew = {key: key, _id: each._id, item: each.item, price: each.price, imageLink: each.imageLink, onSale: each.onSale};
          key++;
          this.setState({
            product: [...this.state.product,objectNew]
          })
          return this.state
        })
        this.setState({
          original: this.state.product
        })
      });
  }

  filterState = (event) =>{
    var one = event.currentTarget.textContent.split(' ')
    var two = one[0].toLowerCase();
    var newString = [...two,one[1]]
    newString = newString.join('');
    var original = this.state.original;

    if(newString==='onSale') {

      const filterProduct = original.filter( e => e.onSale===true);

      this.setState({
        product: filterProduct
      })

    } else {
      this.setState({
        product: []
      });
      this.setState({
        product: original,
      })
    }
    return this.state;
  }


  render() {
    return (
      <article className="AllInfo">
        <section className="sectionInfo">

          <h2 id="MainTitle">All Products</h2>
          <p id="desc1">All available listings</p>

          <div id="FilterControls">
            <div className="controlButtons">
              <button className="button3" onClick={this.filterState}>All Items</button>
              <button className="button4" onClick={this.filterState}>On Sale</button>
            </div>

            <p id="counterTitle"><strong>{this.state.product.length}</strong>items showing</p>
          </div>

          <ul id="ProductList">
            {this.state.product.map(each => {
              return(

                <li key={each.key} className="individualProduct">
                  <Link to={`/product/${ each._id }`}>
                    <div className="productImage">
                      <img src={each.imageLink} alt="Current Product" />
                    </div>

                    <article className="productDesc">
                      <p className="articleName">{each.item}</p>
                      <p className="articlePrice">${each.price}</p>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>


        </section>


      </article>
    );
  }
}

export default All;
