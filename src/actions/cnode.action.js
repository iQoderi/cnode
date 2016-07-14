/**
 * Created by qoder on 16-7-13.
 */
import * as ACTIONS from  '../constants/const';

const initialTab = {
    name: '最新',
    value: ''
};
export function getList(tab = initialTab, data) {
    return {
        type: ACTIONS.GET_LIST,
        tab,
        data
    }
}

