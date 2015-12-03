import _ from 'lodash';

module.exports = {
    getCurrentRoute: function(navigation) {
        return _.takeRight(navigation)[0];
    }



}
