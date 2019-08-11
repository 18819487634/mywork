<template>
    <div class="lession_target">
        <div class="target_title" :class="this.isClose ? 'all_angle' : ''">
            <span>{{this.targetContent.title}}</span>
            <img @click="this.handelArrow" class="spread_icon" :class="this.isClose ? 'rotate_icon' : ''" src="../../assets/target_arrow.png"/>
        </div>
        <div class="target_detail" v-show="!this.isClose">
            <LevelDetail :content="item" v-for="item in targetContent.level_list" :key="item.id"/>
        </div>
    </div>
</template>
<script>
import LevelDetail from './LevelDetail.vue'
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
        }
    },
    components: {
        LevelDetail
    },
    data() {
        return {
            isClose: false,
            list: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
            ]
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
    width: 74.74vw;
	background-color: #f2f2f2;
    border-radius: 1.58vw;
    margin: 0 auto;
    margin-top: 5.42vw;
}
.target_title {
    padding: 1.76vw 3.73vw 2.05vw 3.95vw;
    background-color: #e2e3e4;
    border-radius: 1.58vw 1.58vw 0 0;
    font-family: MicrosoftYaHei;
	font-size: 1.58vw;
	font-weight: 600;
	font-stretch: normal;
	letter-spacing: 0.16vw;
    color: #241752;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.all_angle {
    border-radius: 1.58vw;
}
.spread_icon {
    width: 2.05vw;
    cursor: pointer;
}
.rotate_icon {
    transform: rotate(180deg);
}
.target_detail {
    background-color: #f2f2f2;
	border-radius: 1.58vw;
}
.target_detail>div:last-child {
    padding-bottom: 3.66vw;
}
</style>