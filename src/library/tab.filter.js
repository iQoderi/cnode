/**
 * Created by qoder on 16-7-13.
 */
function tabFilter(tab) {
    switch (tab) {
        case 'share':
            return '分享';
        case 'ask':
            return '问答';
        case 'job':
            return '招聘';
        case 'good':
            return '精华';
        default:
            return tab;
    }
}

export  default tabFilter;