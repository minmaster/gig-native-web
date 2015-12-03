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
        document.body.style.overflow = 'auto';
    }

    toggleMenu() {
        this.setState({
            menu: !this.state.menu
        })

        if (!this.state.menu) {
            window.scrollTo(0,0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    openMenu() {
        this.setState({
            menu: true
        })
        document.body.style.overflow = 'hidden';
    }


}

SideMenu.childContextTypes = {
    menuActions: React.PropTypes.object.isRequired,
};
