import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header/Header';
import Siderbar from './components/Siderbar/Siderbar';
import Contains from './components/Contains/Contains';

const Main = () => (
  <Router>
    <div>
    <Header />
    <div>
      <Siderbar />
      <Contains>
      </Contains>
    </div>
    </div>
  </Router>
);

export default Main;

