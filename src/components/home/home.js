import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';



class Home extends Component {

  constructor() {
    super();

    this.state = {
      product: []
    }

    const ENDPOINT = 'https://mallory-furniture-admin.now.sh/api/v1/products';

    request
      .get(ENDPOINT)
      .then(response => {
        let allInfo=[];
        response.body.filter(function(e){
          if(e.featured===true) {
            allInfo.push(e)
          };
          return allInfo;
        });
        var newObj = [];
        var key=0;
        allInfo.map(each => {
          newObj.push({key: key, _id: each._id, item: each.item, price: each.price, imageLink: each.imageLink});
          key++;
          return newObj;
        })
        this.setState({
          product: newObj,
        })
      });
  }

  render() {
    return (
      <div>
        <section id="TitleCover">
          <h1 id="FirstTitle">Mallory Furniture</h1>
          <p id="SecondTitle">Your furniture is old.<br />Ours is older</p>
        </section>

        <article className="MainInfo">
          <section className="sectionInfo">

            <h2 id="MainTitle">Featured Products</h2>
            <p id="desc1">Check out some of our favourite listings</p>


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

            <div className="buttons">
              <Link to='/all-products'><p className="button1">All Products</p></Link>
            </div>

          </section>

          <section className="sectionInfo">
            <h2 id="MainTitle">Browse by Categories</h2>
            <p id="desc1">Explore by furniture type</p>

            <div className="buttons">
              <Link to='/category/Seating'><p className="button2">Seating</p></Link>
              <Link to='/category/Tables'><p className="button2">Tables</p></Link>
              <Link to='/category/Desks'><p className="button2">Desks</p></Link>
              <Link to='/category/Bedroom'><p className="button2">Bedroom</p></Link>
              <Link to='/category/Storage'><p className="button2">Storage</p></Link>
              <Link to='/category/Miscellaneous'><p className="button2">Misc</p></Link>
            </div>

          </section>
        </article>
      </div>
    );
  }
}

export default Home;
