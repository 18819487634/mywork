<template>
    <div class="practice_left_tab">
        <!-- <HeaderWrap :title="this.headerTitle" :targetUrl="this.headerUrl" /> -->
        <div class="tab_header">
            <div class="menu_icon">
                <img src="../../assets/practice_menu_icon.png" @click="isShowMenu = !isShowMenu"/>
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
        <div class="level_menu" v-if="isShowMenu">
            <div class="level_menu_header">
                <img src="../../assets/menu_close.png" @click="isShowMenu = !isShowMenu" />
            </div>
            <div>
                <div class="level_list">
                    <div class="level_detail">
                        <div class="level_name" @click="this.handelMenuLevel">
                            <div class="triangle" :class="isOpenLevel ? 'rotate' : ''" />
                            {{levelList.name}}
                        </div>
                        <div class="homework_name" v-for="(item, index) in levelList.homework_list" :key="index" v-show="isOpenLevel">
                            <img v-if="item.status" src="../../assets/completed.png" />
                            <div>{{item.name}}</div>
                            <div v-if="item.type === 1" class="tips" style="color: rgb(112, 226, 191); background-color: rgba(112, 226, 191, 0.25)">入门</div>
                            <div v-if="item.type === 2" class="tips" style="color: rgb(255, 172, 94); background-color: rgba(255, 172, 94, 0.25)">中等</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="content_wrap">
            <transition name="fade">
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
            </transition>
            <div v-if="!isActive" style="height: 100%">
                <div class="file_list">
                    <div class="file_list_content" @click="this.handelFileList">
                        <img class="folder_arrow" :class="this.isShowFile ? 'rotate_arrow' : ''" src="../../assets/folder_arrow.png" />
                        <img class="folder_img" src="../../assets/folder.png" />
                        <div>root</div>
                    </div>
                    <div class="child_file" v-if="isShowFile">
                        <div v-for="(item, index) in fileList" :key="index">
                            <div>{{item.name}}</div>
                            <img class="delete_file" src="../../assets/X_icon.png" />
                        </div>
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
import PracticeLeftTab from './PracticeLeftTab.js'
export default {
    ...PracticeLeftTab
}
    
</script>

<style scoped>
@import url('./PracticeLeftTab.css')
</style>