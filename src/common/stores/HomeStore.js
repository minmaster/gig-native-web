'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import Data from '../../data/home.json';

var HomeStore = assign({}, EventEmitter.prototype, {
    getData: function() {
        return Data.home;
    }
})

module.exports = HomeStore;
