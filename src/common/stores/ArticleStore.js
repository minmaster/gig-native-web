'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import Data from '../../data/articles.json';

var articles = Data.articles;

var ArticleStore = assign({}, EventEmitter.prototype, {
    getItems: function() {
        return articles;
    },
    getItem: function(id) {
        return articles.filter(function (el) {
            return (el.id === id);
        });
    }
})

module.exports = ArticleStore;
