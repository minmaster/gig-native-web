'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import Home from './Home'

export default function () {
  return (
      <Router>
        <Route path="/" component={Home}></Route>
      </Router>
  );
}
