'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import Data from '../../data/menu.json';

var MenuStore = assign({}, EventEmitter.prototype, {
    getData: function() {
        return Data.menu;
    }
})

module.exports = MenuStore;
