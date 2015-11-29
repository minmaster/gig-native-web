'use strict';

import Dispatcher from '../dispatcher/AppDispatcher';
import MenuConstants from '../constants/MenuConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var _menu = [];
var _menuState = false;

function setMenu (menu) {
    _menu = menu;
}

function setStateMenu (stateMenu) {
    _menuState = stateMenu;
}

var MenuStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getMenu: function () {
        return _menu;
    },

    getStateMenu: function () {
        return _menuState;
    }
 })

MenuStore.dispatchToken = Dispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case MenuConstants.RECEIVE_MENU:
            setMenu(action.menu);
            break;

        case MenuConstants.RECEIVE_STATE_MENU:
            setStateMenu(action.stateMenu);
            break;

        default:
            return true;
            break;
    }

    MenuStore.emitChange();

    return true;
});

module.exports = MenuStore;
