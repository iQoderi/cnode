/**
 * Created by qoder on 16-7-13.
 */
import SideMenu from '../components/sidemenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
    getList
}from '../actions/cnode.action';

function mapStateToProps(state) {
    return {
        list: state.list
    }
}


function mapDispatchToProps(dispatch) {
    let actionMap = {
        action: bindActionCreators({
            getList
        },dispatch)
    };
    
    return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
