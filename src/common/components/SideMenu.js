'use strict';

import Render from './SideMenuRender';
import React from 'react';

import { Component } from 'react';

export default class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    render () {
        return Render.call(this, this.props, this.state);
    }

    getChildContext() {
        return {
            menuActions: this.getMenuActions(),
        };
    }

    getMenuActions() {
        return {
            close: this.closeMenu.bind(this),
            toggle: this.toggleMenu.bind(this),
            open: this.openMenu.bind(this),
        };
    }

    closeMenu() {
        this.setState({
            menu: false
        })
    }

    toggleMenu() {
        this.setState({
            menu: !this.state.menu
        })
    }

    openMenu() {
        this.setState({
            menu: true
        })
    }


}

SideMenu.childContextTypes = {
    menuActions: React.PropTypes.object.isRequired,
};
