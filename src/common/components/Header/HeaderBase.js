'use strict';

import { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.menuClick = this.menuClick.bind(this);
        this.state = {
            menu: false
        }
    }

    menuClick() {
        this.context.menuActions.toggle();
    }



}

module.exports = Header;
