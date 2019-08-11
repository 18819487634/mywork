<template>
    <div class="level_detail">
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
                <div class="advance_practice_title">进阶练习</div>
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
    padding: 3.44vw 4.83vw 0 3.88vw;
}
.level_name {
	font-family: MicrosoftYaHeiLight;
	font-size: 1.4vw;
	font-weight: 300;
	font-stretch: normal;
	letter-spacing: 0.14vw;
    color: #241752;
    margin-bottom: 1.76vw;
}
.course_content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.main_course {
    position: relative;
    width: 27.38vw;
	height: 12.23vw;
	background-color: #ffffff;
    border-radius: 0.32vw;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    width: 8.2vw;
	height: 8.86vw;
	background-color: #24c6b5;
    border-radius: 0.63vw;
    margin-left: 1.1vw;
}
.main_course_right {
    display: flex;
    flex-direction: column;
    height: 8.86vw;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 0.66vw;
}
.main_course_name {
    font-family: MicrosoftYaHei-Bold;
    font-size: 1.23vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.12vw;
    color: #241752;
    width: 14vw;
    word-break: break-all;
    max-height: 6vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.course_status {
    width: 2.05vw;
    position: absolute;
    top: 0.81vw;
    right: 1.46vw;
}

.progress_bar{
    position: relative;
    width: 16.03vw;
    height: 0.66vw;
    border-radius: 0.32vw;
    background: #EEEEEE;
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
    top: -1.2vw;
    right: -0.6vw;
    margin: 0 auto;
    vertical-align: middle;
    font-family: MicrosoftYaHeiLight;
    font-size: 0.88vw;
    font-weight: 300;
    font-stretch: normal;
    letter-spacing: 0.09vw;
    color: #241752;
}

.move_progress {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    z-index: 1;
    height: 0.66vw;
	background-image: linear-gradient(91deg, #21b3ff 0%, #c4588d 100%);
	box-shadow: 0vw 0.29vw 0.29vw 0vw rgba(34, 62, 143, 0.2);
	border-radius: 0.28vw;
}

.course_practice {
    position: relative;
    margin-left: 1.39vw;
    width: 21.23vw;
	height: 6.15vw;
	background-color: #ffffff;
    border-radius: 0.32vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}
.practice_img {
    width: 3.59vw;
    border-radius: 0.32vw;
    margin-left: 1.46vw;
}

.practice_right {
    height: 3.51vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.66vw;
}
.practice {
    font-family: MicrosoftYaHei;
    font-size: 1.05vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.1vw;
    color: #949399;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 12vw;
}
.practice_tip {
    width: 5.12vw;
    height: 1.1vw;
    background-color: #f3f3f3;
    border-radius: 0.32vw;
    font-family: MicrosoftYaHeiLight;
    font-size: 0.7vw;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.1vw;
    letter-spacing: 0.07vw;
    color: #afafb2;
    text-align: center;
}

.advance_practice {
    position: relative;
    width: 14.64vw;
	height: 6.15vw;
	background-color: #ffffff;
    border-radius: 0.32vw;
    margin-left: 1.39vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}
.advance_practice_title {
    font-family: MicrosoftYaHei;
	font-size: 1.05vw;
	font-weight: 600;
	font-stretch: normal;
	letter-spacing: 0.1vw;
    color: #949399;
    margin-left: 1.02vw;
}

</style>