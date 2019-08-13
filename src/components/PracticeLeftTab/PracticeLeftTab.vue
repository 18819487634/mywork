<template>
    <div class="practice_left_tab">
        <!-- <HeaderWrap :title="this.headerTitle" :targetUrl="this.headerUrl" /> -->
        <div class="tab_header">
            <div class="menu_icon">
                <img src="../../assets/practice_menu_icon.png" />
            </div>
            <div class="tab_title">
                <div class="tab_text" :class="isActive ? 'active_bar' : ''" @click="handelTab(1)">
                    步骤
                </div>
                <div class="tab_text" :class="!isActive ? 'active_bar' : ''" @click="handelTab(2)">
                    文件
                </div>
            </div>
            
        </div>
        <div class="content">
            <div v-if="isActive" class="step_content">
                <section class="step_component">
                    <ul class="step_ul">
                        <li class="step_li">
                            <div class="title">
                                <div class="step_num">
                                    1
                                </div>
                                <div class="step_text">题目要求</div>
                            </div>
                            <div class="question_desc">
                                <p>
                                    除了文字和数字之外，我们还可以灵活运用print()函数，
                                </p>
                            </div>
                        </li>
                        <li class="step_li">
                            <div class="title">
                                <div class="step_num">
                                    2
                                </div>
                                <div class="step_text">题目讲解</div>
                            </div>
                            <div class="question_desc">
                                <p>
                                    1.复制题目要求打印的“皮卡丘”（皮卡丘字符画会在【书写代码】步骤里直接提供）
                                </p>
                            </div>
                        </li>
                        <li class="step_li">
                            <div class="title">
                                <div class="step_num">
                                    3
                                </div>
                                <div class="step_text">书写代码</div>
                                <div class="question_desc">
                                    <p>
                                        第一句话：1人我编程累碎掉的节操满地堆
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="operation">
                        <span class="btn">
                            <i class="text">进入下一关</i>
                        </span>
                    </div>
                </section>
            </div>
            <div v-if="!isActive">
                <div class="file_list">
                    <div>
                        <img src="../../assets/folder_errow.png" />
                        <img src="../../assets/folder.png" />
                        <div>Root</div>
                    </div>
                </div>
                <div class="operation">
                    <span class="btn">
                        <i class="text">新建文件 +</i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderWrap from '../HeaderWrap/HeaderWrap.vue';
export default {
    name: 'practice-left-tab',
    data() {
        return {
            isActive: false,
            headerTitle: '返回课程中心',
            headerUrl:'http://www.baidu.com',
        }
    },
    components: {
        HeaderWrap
    },
    methods: {
        handelTab(val) {
            if(val === 1) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        }
    }
    
}
</script>

<style scoped>
.practice_left_tab {
    position: relative;
    left: 0;
    width: 34.7vw;
    height: 100%;
    background-color: #f6f6f6;
    z-index: 10;
}
.tab_header {
    height: 2.56vw;
}
.menu_icon {
    width: 5.09vw;
    text-align: center;
    vertical-align: middle;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #cdcdcd;
    cursor: pointer;
}
.menu_icon>img {
    width: 2.13vw;
}
.tab_title {
    float: left;
    height: 2.56vw;
    width: 29.6vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #ebebeb;
}
.tab_text {
    position: relative;
    font-family: MicrosoftYaHei;
    font-size: 1.17vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #2d2d2d;
    width: 7vw;
    text-align: center;
    cursor: pointer;
    height: 2.56vw;
    line-height: 2.56vw;
}
.active_bar {
    color: #1497f9;
}
.active_bar::before {
    position: absolute;
    bottom: 0;
    content: " ";
    height: 0.13vw;
    border-radius: 0.07vw;
    background-color: #1497f9;
    -webkit-transition: .2s;
    transition: all 1s ease-in-out;
    width: 100%;
    left: 0;
}

.step_content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
}
.step_component {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    overflow-y: auto;
}
.step_ul {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 2.37vw 0 0 3.08vw;
    -webkit-transition: .3s;
    transition: .3s;
    scroll-behavior: smooth;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    list-style: none;
    margin: 0;
}

.step_ul>li:last-child {
    border: none;
    margin-bottom: 7vw;
}

.step_li {
    position: relative;
    padding-bottom: 3.56vw;
    border-left: 0.13vw solid rgba(20, 151, 249, 0.5);
    padding-left: 1.87vw;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.title {
    font-family: MicrosoftYaHei;
    font-size: 0.73vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #000000;
}
.step_num {
    width: 1.34vw;
    height: 1.34vw;
    border-radius: 50%;
    background: #1497f9;
    font-size: 1.02vw;
    text-align: center;
    position: absolute;
    top: -0.2vw;
    left: -0.7vw;
    color: #ffffff;
}

.question_desc {
    font-family: MicrosoftYaHei;
    font-size: 0.73vw;
    font-weight: 300;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #000000;
}
.question_desc>p {
    margin: 1.5vw 0 0;
}


.operation {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: -ms-flexbox;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    height: 7vw;
    background-color: #ffffff;
    box-shadow: 0vw 0vw 1vw 0vw rgba(34, 62, 143, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn {
    flex-shrink: 0;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-transition: all .2s;
    transition: all .2s;
    width: 16.5vw;
    height: 2.69vw;
    line-height: 2.69vw;
    background-color: #80f4d5;
    border-radius: 1.25vw;
    text-align: center;
}
.text {
    display: inline-block;
    text-align: center;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: MicrosoftYaHei;
    font-size: 1.32vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    color: #3e3e3e;
    font-style: inherit;
}

::-webkit-scrollbar {
    width: 0.01vw;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
    border-radius: 0.01vw;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 0.01vw;
    /* background: #f6f6f6; */
    background: #ffffff;
}

.practice_left_tab {  
    scrollbar-face-color:#f6f6f6; /*面子*/  
    scrollbar-arrow-color:#f6f6f6; /*箭头*/  
    scrollbar-3dlight-color:#f6f6f6; /*最外左*/  
    scrollbar-highlight-color:#f6f6f6; /*左二*/  
    scrollbar-shadow-color:#f6f6f6; /*右二*/  
    scrollbar-darkshadow-color:#f6f6f6; /*右一*/  
    scrollbar-track-color:#f6f6f6; /*滑道*/  
} 


</style>