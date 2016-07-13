/**
 * Created by qoder on 16-7-13.
 */
import {GET_LIST} from '../constants/const';

const initialState = {
    title: '最新',
    data: []
};

const list = function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                title: action.tab.title,
                data: action.data
            };
        
        default:
            return initialState;
    }
};


export  default  list;
