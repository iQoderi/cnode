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
    topicDetail: reqMaker('topic/')
};

export  default Req;

