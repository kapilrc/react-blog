import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostDetail from './PostDetail';
import About from './About';
import Contact from './Contact';
import _404 from './_404';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/posts/:id" component={PostDetail}></Route>
    </Route>
    <Route path="/home" component={App}></Route>
    <Route path="/about-us" component={About}></Route>
    <Route path="/contact-us" component={Contact}></Route>
    <Route path="*" component={_404}></Route>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();