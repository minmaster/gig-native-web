'use strict';

import Api from '../utils/api';
import Parameters from '../utils/parameters';
import Dispatcher from '../dispatcher/AppDispatcher';
import ArticleConstants from '../constants/ArticleConstants';

var url = Parameters.url;

// Define the ActionCreator.
var ArticleActions = {
    getArticle: function (id) {
        Api
            .get(url + 'src/data/articles.json')
            .then(function (data) {

                var articles = data.articles;

                articles.filter((el) => {
                    if (el.id == id) {
                        Dispatcher.handleViewAction({
                            actionType: ArticleConstants.RECEIVE_ARTICLE,
                            article: el
                        });
                    }
                });

            });
    }
};

module.exports = ArticleActions;
