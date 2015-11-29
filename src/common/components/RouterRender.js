'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import Home from './Home';
import Header from './Header';
import SideMenu from './SideMenu';
import Menu from './Menu'
import Video from './Video';
import Article from './Article';

export default function () {
  return (
      <SideMenu className="sidebar" menu={<Menu navigation={this.state.nav}  />}>
        <Header />
        <section>
            <Router ref="nav">
              <Route path="/" component={Home}></Route>
              <Route path="/videos/:id" component={Video}></Route>
              <Route path="/articles/:id" component={Article}></Route>
            </Router>
        </section>
      </SideMenu>
  );
}
