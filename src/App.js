import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header.js';
import Bottom from './components/bottom/Bottom.js';

import Home from './components/home/home.js'
import About from './components/about/about.js';
import Terms from './components/terms/terms.js';
import All from './components/all-products/all.js';

import Error from './components/404.js';

import Category from './components/category/category.js';
import Product from './components/product/singleproduct.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <div id="AppContainer">

        <Header />

        <div className="whiteSpaceContainer">
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/terms' component={ Terms } />
            <Route exact path='/all-products' component={ All } />
            <Route path='/category/:categoryName' component={ Category } />
            <Route path='/product/:productId' component={ Product } />
            <Route component={Error} />
          </Switch>

          <Bottom />

        </div>

      </div>
    );
  }
}

export default App;
