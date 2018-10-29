import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import test from './test/testReducer';


class Store {
  /**
   * Gets reducers objects.
   *
   * @return {Object}  Reducers by default
   */
  static getInitialReducers() {
    return {
      test,
    };
  }

  /**
   * Initializes store object.
   *
   * @param  {Object} initialReducers Initial reducers
   * @param  {Object} initialState    Initial state
   * @return {Object}                 Store object
   */
  static init(initialState = {}) {
    return createStore(combineReducers(
      Store.getInitialReducers()),
    initialState,
    applyMiddleware(thunkMiddleware)
    );
  }
}

export default Store;
