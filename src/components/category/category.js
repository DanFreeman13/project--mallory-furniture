import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

class Category extends Component {

  getCategory = (category) => {
    var ENDPOINT = 'https://mallory-furniture-admin.now.sh/api/v1/products?category=' + category.toLowerCase()
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

  constructor(props) {
    super();

    this.state = {
      product: [],
      original: [],
    }
    this.getCategory(props.match.params.categoryName)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      product: [],
      original: [],
    })
    this.getCategory(newProps.match.params.categoryName)
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
      <article className="CategoryInfo">
        <section className="sectionInfo">

          <section id={`${this.props.match.params.categoryName}Cover`} className="CategoryCover">

          </section>

          <h2 id="MainTitle">{this.props.match.params.categoryName}</h2>
          <p id="desc1">All {this.props.match.params.categoryName} products</p>

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
                  <div className="productImage">
                    <Link to={`/product/${ each._id }`}><img src={each.imageLink} alt="Current Product" /></Link>
                  </div>

                  <article className="productDesc">
                    <p className="articleName">{each.item}</p>
                    <p className="articlePrice">${each.price}</p>
                  </article>
                </li>
              )
            })}
          </ul>


        </section>


      </article>
    );
  }
}

export default Category;
