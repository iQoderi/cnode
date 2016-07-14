/**
 * Created by qoder on 16-7-11.
 */
import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    Navigator,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    Alert,
    ToastAndroid,
    TouchableNativeFeedback,
    Switch
} from 'react-native';
import CommonStyle from '../../style/index.style';
import Req from '../../config/requestConfig';
import TopicDetail from '../../components/topic.webView';
import MenuItem from './MenuItem';
import AboutWebView from '../about.webView';
import tabFilter from '../../library/tab.filter';


const cLogo = require('../../images/cnodelogo.png');
const github = require('../../images/github.png');
const More = require('../../images/more.png');
const Edit = require('../../images/edit.png');

const datas = [
    {
        name: '最新',
        tab: ''
    },
    {
        name: "精华",
        tab: 'good'
    },
    {
        name: '分享',
        tab: 'share'
    },
    {
        name: '问答',
        tab: "ask"
    },
    {
        name: '招聘',
        tab: 'job'

    }
];


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            openSmallTail: true,
            openSaveTraffic: true
        };
    }

    _onDrawer() {
        this.refs.drawer.openDrawer();
    }

    _offDrawer() {
        this.refs.drawer.closeDrawer();
    }

    _goSetting() {
        const {getList}=this.props.action;
        this._offDrawer();
        getList({title: '设置'}, []);
    }

    _onRefresh(title = '最新', tab = '') {
        this.setState({
            isRefreshing: true
        });
        const {getList}=this.props.action;
        const {list}=this.props;
        let reqUrl = `${Req.topic}?tab=${tab}`;
        fetch(reqUrl)
            .then((res)=> {
                return res.json();
            })
            .then((json)=> {
                if (json.success) {
                    this.setState({
                        isRefreshing: false
                    });

                    const topicTab = {
                        title: title,
                        value: tab
                    };


                    getList(topicTab, json.data);
                    ToastAndroid.show('获取内容成功', ToastAndroid.SHORT);
                    storage.save({
                        key: 'topicList',
                        rawData: json.data

                    });
                } else {
                    ToastAndroid.show('获取内容失败', ToastAndroid.LONG);
                }
            });
    }

    _pullRefresh() {
        const {list}=this.props;
        this._onRefresh(list.title, list.tab);
    }

    _tabTopic(name, tab) {
        this._offDrawer();
        this._onRefresh(name, tab)
    }

    _SmallTailChange(value) {
        this.setState({
            openSmallTail: value
        });
    }

    _SaveTraffic(value) {
        this.setState({
            openSaveTraffic: value
        });
    }

    _readTopic(id) {
        const {navigator}=this.props;
        fetch(Req.topicDetail + id)
            .then((res)=> {
                return res.json();
            })
            .then((json)=> {
                if (json.success) {
                    navigator.push({
                        name: 'TopicDetail',
                        component: TopicDetail,
                        content: json.data.id
                    })
                } else {
                    ToastAndroid.show('获取文章详情失败', ToastAndroid.LONG);
                }
            });
    }

    _goAbout(name, content) {
        const {navigator}=this.props;
        navigator.push({
            name: name,
            component: AboutWebView,
            content: content
        })
    }

    componentDidMount() {
        this._pullRefresh();
    }

    render() {
        const {list}=this.props;
        const qoder = 'https://github.com/iQoderi';
        const CNodeUrl = 'http://cnodejs.org/about';
        const MenuItems = datas.map((data, index)=> {
            return <MenuItem
                name={data.name}
                tab={data.tab}
                key={index}
                press={()=>{this._tabTopic(data.name,data.tab)}}/>
        });
        const navigationView = (
            <View style={[CommonStyle.flex,{backgroundColor:'#f5f5f5'}]}>
                <View style={styles.navBar2}>
                    <Image source={cLogo} style={{width:150}}/>
                </View>
                <View>
                    <MenuItem name="登陆" tab="login"/>
                    <MenuItem name="板块" style={{height: 40, backgroundColor: '#e8e8e8'}}/>
                    {MenuItems}
                    <MenuItem name="其他" style={{height: 40, backgroundColor: '#e8e8e8'}}/>
                    <MenuItem name="设置"
                              tab="setting"
                              press={this._goSetting.bind(this)}/>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemText}>
                        <Image source={github} style={styles.image2}/>
                        <Text>github.com/iQoderi</Text>
                    </View>
                </View>
            </View>
        );

        const topics = list.data.map((each, index)=> {
            let element = (<TouchableNativeFeedback
                key={index}
                id={each.id}
                author_id={each.author_id}
                background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}
                onPress={()=>{this._readTopic(each.id)}}>
                <View style={[styles.cell]}>
                    <Text style={[styles.topic_color]}>{each.title}</Text>
                    <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                        <Text
                            style={[(each.top||each.good)?styles.put_top:styles.topiclist_tab]}>{each.top ? '置顶' : (each.good ? '精华' : tabFilter(each.tab))}</Text>
                        <Text style={styles.author}>{each.author.loginname}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>);
            return element;
        });

        const Setting = (
            <View style={[styles.flex,styles.wrapper]}>
                <View style={[styles.item,styles.borderTop]}>
                    <Text style={styles.itemFont}>小尾巴</Text>
                    <View style={styles.rightSpan}>
                        <Switch
                            onValueChange={(value)=>{this._SmallTailChange(value)}}
                            value={this.state.openSmallTail}/>
                    </View>
                </View>
                <View style={[styles.item]}>
                    <Text style={styles.itemFont}>省流量</Text>
                    <View style={styles.rightSpan}>
                        <Switch
                            onValueChange={(value)=>{this._SaveTraffic(value)}}
                            value={this.state.openSaveTraffic}/>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>关于</Text>
                </View>
                <View style={[styles.item,styles.borderTop]}>
                    <Text style={styles.itemFont}>当前版本</Text>
                    <View style={styles.rightSpan}>
                        <Text style={[styles.smallFont]}>1.0.0</Text>
                    </View>
                </View>
                <View style={[styles.item]}>
                    <Text style={styles.itemFont}>意见反馈</Text>
                    <View style={styles.rightSpan}>
                        <Text style={[styles.smallFont,styles.right]}>Email</Text>
                    </View>
                </View>
                <TouchableNativeFeedback
                    onPress={()=>{this._goAbout('关于作者',qoder)}}
                    background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                    <View style={[styles.item]}>
                        <Text style={styles.itemFont}>关于作者</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={()=>{this._goAbout('关于CNode社区',CNodeUrl)}}
                    background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                    <View style={[styles.item]}>
                        <Text style={styles.itemFont}>关于CNode社区</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.center}>
                    <Text style={styles.smallFont}>&copy;2016 Qoder</Text>
                </View>

            </View>
        );
        return (
            <DrawerLayoutAndroid
                ref="drawer"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerWidth={280}
                keyboardDismissMode="on-drag"
                renderNavigationView={()=>navigationView}>
                <View style={{flex:1}}>
                    <View>
                        <View style={[styles.navBar]}>
                            <TouchableOpacity
                                onPress={this._onDrawer.bind(this)}>
                                <Image source={More} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>{list.title}</Text>
                            </TouchableOpacity>
                            {list.title === '设置' ? <Text>""</Text> : (
                                <View style={styles.editImage}>
                                    <TouchableOpacity>
                                        <Image source={Edit} style={styles.image}/>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View>
                    {list.title === '设置' ? Setting : (
                        <ScrollView
                            refreshControl={
                            <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._pullRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="下拉刷新..."
                            titleColor="#666"
                            colors={['#009100']}
                            progressBackgroundColor="#fff"/>}>
                            {topics}
                        </ScrollView>
                    )}
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        height: 50,
        backgroundColor: '#444',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 32,
        height: 32
    },
    editImage: {
        flex: 1,
        marginRight: 15,
        alignItems: 'flex-end'
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold'

    },
    cell: {
        padding: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    topic_color: {
        color: '#333',
        fontSize: 16
    },
    put_top: {
        backgroundColor: '#80bd01',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        width: 40,
        borderRadius: 5,
        textAlign: 'center',
        color: '#FFF'
    },
    topiclist_tab: {
        backgroundColor: "#ccc",
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        width: 40,
        borderRadius: 5,
        textAlign: 'center',
        color: '#e8e8e8'
    },
    author: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666'
    },
    navBar2: {
        height: 50,
        backgroundColor: '#444'
    },
    bottomItem: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: "row"
    },
    bottomItemText: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 40,
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
        flexDirection: 'row'
    },
    image2: {
        width: 35,
        height: 35,
        marginRight: 20
    },
    flex: {
        flex: 1
    },
    wrapper: {
        paddingTop: 10
    },
    item: {
        height: 45,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: 'center'
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8'
    },
    itemFont: {
        fontSize: 16
    },
    titleText: {
        fontSize: 14,
        color: '#666',
    },
    title: {
        paddingLeft: 20,
        height: 35,
        flexDirection: "row",
        alignItems: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    rightSpan: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    smallFont: {
        color: '#666',
        fontSize: 12
    }
});

export  default SideMenu;