var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/VideoConstants');

// Define actions object
var VideoActions = {
    receiveProduct: (data) => {
        AppDispatcher.handleAction({
            actionType: VideoConstans.RECEIVE_DATA,
            data: data
        })
    }

}

module.exports = VideoActions;
