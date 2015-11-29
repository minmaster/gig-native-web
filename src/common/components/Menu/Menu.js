'use strict';

import Base from './MenuBase';
import Render from './MenuRender';
import React from 'react';

export default class Menu extends Base {
    constructor (props) {
        super(props);
    }

    render () {
        return Render.call(this, this.props, this.state);
    }
}

Menu.contextTypes = {
    menuActions: React.PropTypes.object.isRequired
};
