'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';

var HomeActions = {

  typeKey: function(keyType, keyValue) {
    AppDispatcher.dispatch({
      type: CalculatorConstants.KEY_TYPED,
      keyType: keyType,
      keyValue: keyValue
    });
  },

  typeFormula: function(formula) {
    AppDispatcher.dispatch({
      type: CalculatorConstants.FORMULA_TYPED,
      formula: formula
    });
  }

};

module.exports = HomeActions;
