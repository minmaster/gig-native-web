'use strict';

import React from 'react';
import classNames from 'classnames';

export default function () {

    var btnClass = classNames('menu-view', this.props.className, {
        'active': this.state.menu
    });


  return (
    <div className={btnClass}>
        { this.props.menu }
        <div className="content">
            { this.props.children }
        </div>
    </div>
  );
}
