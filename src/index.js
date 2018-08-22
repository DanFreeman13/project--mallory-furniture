import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { HashRouter } from 'react-router-dom';

class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
