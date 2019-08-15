<template>
    <div>
        <div class="lession_target">
            <div class="target_title" :class="this.isClose ? 'all_angle' : ''">
                <span>{{this.targetContent.title}}</span>
                <img @click="this.handelArrow" class="spread_icon" :class="this.isClose ? 'rotate_icon' : ''" src="../../assets/target_arrow.png"/>
            </div>
            <transition name="targetDetail">
                <div class="target_detail" v-show="!this.isClose">
                    <LevelDetail :content="item" v-for="item in targetContent.level_list" :key="item.id"/>
                </div>
            </transition>
        </div>
        <div v-if="targetNum === 0">
            <PurchaseBg :styleProp="buyBgStyle" :imgSrc="buyBg" :targetUrl="groupTargetUrl" :title="secondTitle" />
        </div>
    </div>
</template>
<script>
import LevelDetail from './LevelDetail.vue';
import PurchaseBg from '../PurchaseBg/PurchaseBg.vue';
export default {
    name: 'lession-target',
    props: {
        targetTitle: {
            type: String,
            default: '',
        },
        targetContent: {
            title: {
                type: String,
                default: ''
            },
            level_list: {
                type: Array,
                default: []
            }
        },
        targetNum: {
            type: Number,
            default: 0
        }
    },
    components: {
        LevelDetail,
        PurchaseBg
    },
    data() {
        return {
            isClose: false,
            list: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
            ],
            secondTitle: '购买Python基础语法课程，解锁全部内容',
            buyBg: require('../../assets/buy_bg.png'),
            buyBgStyle: 'margin-top: 1.92vw',
            groupTargetUrl: 'http://www.baidu.com',
        }
    },
    methods: {
        handelArrow() {
            const val = this.isClose;
            this.isClose = !val;
        }

    }
}
</script>

<style scoped>
.lession_target {
    width: 54.54vw;
	background-color: #f2f2f2;
    border-radius: 1.58vw;
    margin: 0 auto;
    margin-top: 1.92vw;
}
.target_title {
    border-radius: 1.58vw 1.58vw 0 0;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 3.93vw;
    background-color: #f1f1f1;
    font-size: 1.1vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.11vw;
    color: #241752;
    font-family: MicrosoftYaHei-Bold;
    padding-left: 2.86vw;
    padding-right: 2.71vw;
}
.all_angle {
    border-radius: 1.58vw;
}
.spread_icon {
    width: 1.51vw;
    cursor: pointer;
}
.rotate_icon {
    transform: rotate(180deg);
}
.target_detail {
    background-color: #f8f8f8;
    border-radius: 0 0 1.58vw 1.58vw;
}
.target_detail>div:first-child {
    padding-top: 2.54vw;
}
.target_detail>div:last-child {
    padding-bottom: 5.32vw;
}
.targetDetail-enter-active {
    transition: all 1s ease;
}
.targetDetail-leave-active {
    transition: all 0.3s cubic-bezier(0,0,1,1);
}
.targetDetail-enter, .targetDetail-leave-to {
    opacity: 0;
}

</style>