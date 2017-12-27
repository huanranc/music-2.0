import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header/Header';
import Siderbar from './components/Siderbar/Siderbar';
import Contains from './components/Contains/Contains';
import ContainsBody from './components/Contains/ContainsBody';
import Play from './components/Play/play';

const Main = () => (
  <Router>
    <div className="wrap">
    <Header />
    <div className="wrap-body">
      <Siderbar />
      <Contains>
      </Contains>
      <Play />
    </div>
    </div>
  </Router>
);

export default Main;

