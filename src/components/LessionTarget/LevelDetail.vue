<template>
    <div class="level_detail" :id="'level_detail' + content.id">
        <div class="level_name">{{content.name}}</div>
        <div class="course_content">
            <div class="main_course" :class="this.content.main.status ? 'hover_style' : ''">
                <div class="cover_picture"></div>
                <div class="main_course_right">
                    <div class="main_course_name" :title="content.main.name">{{content.main.name}}</div>
                    <div class="progress_bar">
                        <div class="move_progress" ref="moveProgressRef">
                            <div class="progress_num">
                                <span>{{this.currentProgress}}%</span>
                            </div>
                        </div>
                    </div>
                    <img class="course_status" src="../../assets/completed.png" v-if="this.content.main.status" />
                    <img class="course_status" src="../../assets/locked.png" v-if="!this.content.main.status" />
                </div>
                <div class="mask" v-if="!this.content.main.status"/>
            </div>
            <div class="course_practice" :class="this.content.main.status ? 'hover_style' : ''">
                <img class="practice_img" src="../../assets/practice_completed.png" v-if="this.content.homework_list[0].status" />
                <img class="practice_img" src="../../assets/practice_unfishied.png" v-if="!this.content.homework_list[0].status" />
                <div class="practice_right">
                    <div class="practice" :title="this.content.homework_list[0].name">{{this.content.homework_list[0].name}}</div>
                    <div class="practice_tip">必做练习</div>
                </div>
                <img class="course_status" src="../../assets/completed.png" v-if="this.content.homework_list[0].status" />
                <img class="course_status" src="../../assets/locked.png" v-if="!this.content.homework_list[0].status" />
                <div class="mask" v-if="!this.content.main.status"/>
            </div>
            <div class="advance_practice" :class="this.content.main.status ? 'hover_style' : ''">
                <div class="advance_practice_title">
                    <div>进阶练习</div>
                    <div>0/1</div>
                </div>
                <img class="course_status" src="../../assets/completed.png" v-if="this.content.homework_list[0].status" />
                <img class="course_status" src="../../assets/locked.png" v-if="!this.content.homework_list[0].status" />
                <div class="mask" v-if="!this.content.main.status"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'devel-detial',
    props: {
        name: {
            type: String,
            default: ''
        },
        content:{
            id: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            main: {
                type: Object,
                default: {}
            },
            homework_list: {
                type: Array,
                default: []
            },
            is_finished: {
                type: Number,
                default: 0
            },
            total_advanced_practice_count: {
                type: Number,
                default: 0
            },
            finished_advanced_practice_count: {
                type: Number,
                default: 0
            }
        }
    },
    data() {
        return {
            status: 1,
            currentProgress: 20,
            canOpen: true
        }
    },
    mounted() {
        this.renderProgress(0, this.currentProgress)
    },
    methods: {
        renderProgress(slogan, progress) {
            if(slogan < progress) {
            slogan += Math.random(0, 1);
            if(this.$refs.moveProgressRef && this.$refs.moveProgressRef !== undefined) {
                this.$refs.moveProgressRef.style.width = slogan + '%';
            }
            this.timer = window.requestAnimationFrame(() => {
                this.renderProgress(slogan, progress)
            })
            } else {
            window.cancelAnimationFrame(this.timer)
            }
        }
    }
}
</script>

<style scoped>
.level_detail {
    padding: 0 3.23vw 3.44vw 2.81vw;
}
.level_name {
	margin-bottom: 1.27vw;
    font-family: MicrosoftYaHeiLight;
    font-size: 1.02vw;
    font-weight: 300;
    font-stretch: normal;
    letter-spacing: 0.1vw;
    color: #241752;
}
.course_content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.main_course {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20.03vw;
    height: 8.93vw;
    background-color: #ffffff;
    border-radius: 0.32vw;
}
.mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff;
    opacity: 0.6;
    z-index: 10;
    cursor: not-allowed;
    border-radius: 0.32vw;
}
.hover_style:hover {
    box-shadow: 0vw 0.29vw 1.17vw 0vw rgba(34, 62, 143, 0.6);
}
.cover_picture {
    margin-left: 0.81vw;
    width: 5.99vw;
    height: 6.43vw;
    background-color: #24c6b5;
    border-radius: 0.63vw;
}
.main_course_right {
    display: flex;
    flex-direction: column;
    height: 6.43vw;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 0.49vw;
}
.main_course_name {
    width: 10vw;
    word-break: break-all;
    max-height: 6vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-family: MicrosoftYaHei-Bold;
    font-size: 0.9vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.09vw;
    color: #241752;
}

.course_status {
    width: 1.33vw;
    position: absolute;
    top: 0.64vw;
    right: 0.76vw;
}

.progress_bar{
    position: relative;
    width: 11.69vw;
    height: 0.44vw;
    border-radius: 0.21vw;
    background: #e0e0e0;
}
.progress_num {
    z-index: 1;
    color: #31285d;
    font-weight: 600;
}

.progress_num >span {
    position: absolute;
    width: 2.56vw;
    text-align: center;
    top: -1vw;
    right: -0.6vw;
    margin: 0 auto;
    vertical-align: middle;
    font-family: MicrosoftYaHeiLight;
    font-size: 0.64vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.07vw;
    color: #241752;
}

.move_progress {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    z-index: 1;
    height: 0.44vw;
    background-image: linear-gradient(91deg, #21b3ff 0%, #c4588d 100%);
    box-shadow: 0vw 0.29vw 0.29vw 0vw rgba(34, 62, 143, 0.2);
    border-radius: 0.21vw;
}

.course_practice {
    position: relative;
    margin-left: 1.02vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 15.52vw;
    height: 3.93vw;
    background-color: #ffffff;
    border-radius: 0.32vw;
}
.practice_img {
    margin-left: 1.04vw;
    width: 2.63vw;
    border-radius: 0.32vw;
}

.practice_right {
    height: 2.55vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.66vw;
}
.practice {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7vw;
    font-family: MicrosoftYaHei-Bold;
    font-size: 0.77vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.08vw;
    color: #241752;
}
.practice_tip {
    text-align: center;
    width: 3.7vw;
    height: 0.76vw;
    background-color: #f3f3f3;
    border-radius: 0.32vw;
    font-family: MicrosoftYaHeiLight;
    font-size: 0.51vw;
    font-weight: 300;
    font-stretch: normal;
    line-height: 0.76vw;
    letter-spacing: 0.05vw;
    color: #afafb2;
}

.advance_practice {
    position: relative;
    margin-left: 1.04vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 10.63vw;
    height: 3.93vw;
    background-color: #ffffff;
    border-radius: 0.32vw;
}
.advance_practice_title {
    margin-left: 0.73vw;
    height: 2.55vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.advance_practice_title>div:first-child {
    font-family: MicrosoftYaHei-Bold;
    font-size: 0.77vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.08vw;
    color: #241752;
}
.advance_practice_title>div:last-child {
    font-family: MicrosoftYaHeiLight;
	font-size: 0.51vw;
	font-weight: 300;
	font-stretch: normal;
	letter-spacing: 0.05vw;
	color: #afafb2;
}
</style>