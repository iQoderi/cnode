/**
 * Created by qoder on 16-7-13.
 */
import * as ACTIONS from  '../constants/const';

export function getList(tab,data) {
    return {
        type: ACTIONS.GET_LIST,
        tab,
        data
    }
}

