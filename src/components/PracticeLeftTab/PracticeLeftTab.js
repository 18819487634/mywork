import HeaderWrap from '../HeaderWrap/HeaderWrap.vue';

export default {
    name: 'practice-left-tab',
    props: {
        levelList: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            isActive: false,
            headerTitle: '返回课程中心',
            headerUrl:'http://www.baidu.com',
            fileList: [
                {
                    name: '123.py',
                },
                {
                    name: 'qwe.py',
                },
                {
                    name: 'asd.py',
                },{
                    name: '123.py',
                },
                {
                    name: 'qwe.py',
                },
                {
                    name: 'asd.py',
                },
                {
                    name: '123.py',
                },
                {
                    name: 'qwe.py',
                },
                {
                    name: 'asd.py',
                },{
                    name: '123.py',
                },
                {
                    name: 'qwe.py',
                },
                {
                    name: 'asd.py',
                },
                {
                    name: '123.py',
                },
                {
                    name: 'qwe.py',
                },
                {
                    name: 'asd.py',
                },{
                    name: '123.py',
                },
                {
                    name: 'qwe.py',
                },
                {
                    name: 'asd.py',
                },
                {
                    name: '123.py',
                },
            ],
            isShowFile: false,      //  展示文件列表
            isShowMenu: false,      //  展示菜单
            isOpenLevel: false           //  菜单中level列表是否展开
        }
    },
    components: {
        HeaderWrap
    },
    mounted() {
        console.log(this.levelList)
    },
    methods: {
        handelTab(val) {
            if(val === 1) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        },
        handelFileList() {
            if(this.isShowFile) {
                this.isShowFile = false
            } else {
                this.isShowFile = true
            }
        },
        handelMenuLevel() {
            if(this.isOpenLevel) {
                this.isOpenLevel = false
            } else {
                this.isOpenLevel = true
            }
        }
    }
}