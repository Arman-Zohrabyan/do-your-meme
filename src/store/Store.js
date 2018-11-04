import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import vk from './vk/reducer';


class Store {
  /**
   * Gets reducers objects.
   *
   * @return {Object}  Reducers by default
   */
  static getInitialReducers() {
    return {
      vk,
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
