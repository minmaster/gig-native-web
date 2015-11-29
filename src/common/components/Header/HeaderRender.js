'use strict';

import React from 'react';

export default function () {
  return (
    <header>
        <button className="left btn-menu" onClick={this.menuClick.bind(this)}></button>
        <h1>CokeStream</h1>
        <button className="right dashboard"></button>
    </header>
  );
}
