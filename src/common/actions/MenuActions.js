'use strict';

import Api from '../utils/api';
import Parameters from '../utils/parameters';
import Dispatcher from '../dispatcher/AppDispatcher';
import MenuConstants from '../constants/MenuConstants';

var url = Parameters.url;
console.log(url);

// Define the ActionCreator.
var MenuActions = {
    getMenu: function () {
        Api
            .get(url + 'src/data/menu.json')
            .then(function (data) {
                // Dispatch an action containing the categories.
                Dispatcher.handleViewAction({
                    actionType: MenuConstants.RECEIVE_MENU,
                    menu: data.menu
                });
            });
    },
    changeStateMenu: function(stateMenu) {
        Dispatcher.handleViewAction({
            actionType: MenuConstants.RECEIVE_STATE_MENU,
            stateMenu: stateMenu
        });
    }
};

module.exports = MenuActions;
