/**
 * Created by qoder on 16-7-13.
 */
import {combineReducers} from 'redux';

import list from './list.reducers';

const cnodeReducers = combineReducers({
    list
});


export  default cnodeReducers;
