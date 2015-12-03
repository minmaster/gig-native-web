'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import Home from '../Home/Home';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Menu from '../Menu/Menu'
import Video from '../Video/Video';
import Article from '../Article/Article';
import Gallery from '../Gallery/Gallery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function () {
  return (
      <SideMenu className="sidebar" menu={<Menu navigation={this.state.nav}  />}>
        <Header />
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>

        <section>

                <Router ref="nav">
                  <Route path="/" component={Home}></Route>
                  <Route path="/videos/:id" component={Video}></Route>
                  <Route path="/articles/:id" component={Article}></Route>
                  <Route path="/gallery" component={Gallery}></Route>
                </Router>

        </section>
        </ReactCSSTransitionGroup>
      </SideMenu>
  );
}
