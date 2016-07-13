/**
 *
 * Created by qoder on 16-7-13.
 */
import APIHost from '../constants/APIHost';
function reqMaker(path) {
    return APIHost + path;
}

const Req = {
    topic: reqMaker('topics'),
    topicDetail: reqMaker('topics/:id')
};

export  default Req;

