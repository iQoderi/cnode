/**
 * Created by qoder on 16-7-13.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import  cnodeReducer from '../reducers';

// const createStoreWithThunk = applyMiddleware(thunk)(createStore);


const configStore = function (initialStore) {

    const store = createStore(cnodeReducer, initialStore);

    return store;
};


export  default configStore;

