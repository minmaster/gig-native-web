'use strict';

import Dispatcher from '../dispatcher/AppDispatcher';
import ArticleConstants from '../constants/ArticleConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var _article;

function setArticle (article) {
    _article = article;
}

var ArticleStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getArticle: function () {
        return _article;
    }
 })

ArticleStore.dispatchToken = Dispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case ArticleConstants.RECEIVE_ARTICLE:
            setArticle(action.article);
            break;
        default:
            return true;
            break;
    }

    ArticleStore.emitChange();

    return true;
});

module.exports = ArticleStore;
