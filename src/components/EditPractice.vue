<template>
    <div style="height: 100%">
        <PracticeLeftTab :levelList="target_list[0].level_list[0]" />
    </div>
</template>

<script>
import PracticeLeftTab from './PracticeLeftTab/PracticeLeftTab.vue'
export default {
    name: 'EditPractice',
    components: {
        PracticeLeftTab
    },
    data() {
        return {
            target_list: [
                    {
                    title: '目标一：别叫我萌新',
                    level_list: [
                        {
                        id: '1',
                        name: '第0关 Print（）函数与变量',
                        main: {
                            id: '2',
                            name: '课堂：千寻的名字',
                            status: 1,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '3'
                        },
                        homework_list: [
                            {
                                id: '4',
                                name: '打印皮卡丘',
                                status: 1,
                                type: 1,
                                cover_picture: require('../assets/practice_completed.png'),
                                practice_id: '5'
                            },
                            {
                                id: '44',
                                name: '打印无脸男',
                                status: 0,
                                type: 2,
                                cover_picture: require('../assets/practice_completed.png'),
                                practice_id: '55'
                            },
                        ],
                        is_finished: 1,
                        total_advanced_practice_count: 1,
                        finished_advanced_practice_count: 2
                        },
                        {
                        id: '6',
                        name: '第1关 数据类型与转换',
                        main: {
                            id: '7',
                            name: '课堂：萌新的进化',
                            status: 1,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '8'
                        },
                        homework_list: [
                            {
                            id: '9',
                            name: '程序员的有一人饮酒醉',
                            status: 1,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '10'
                            }
                        ],
                        is_finished: 0,
                        total_advanced_practice_count: 1,
                        finished_advanced_practice_count: 2
                        }
                    ]
                    },
                    {
                    title: '目标二：做出我的第一个项目',
                    level_list: [
                        {
                        id: '11',
                        name: '第2关 列表和字典',
                        main: {
                            id: '12',
                            name: '课堂：收纳的艺术',
                            status: 0,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '13'
                        },
                        homework_list: [
                            {
                            id: '14',
                            name: '君子爱“数”，取之有道。',
                            status: 0,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '15'
                            }
                        ],
                        is_finished: 0,
                        total_advanced_practice_count: 1,
                        finished_advanced_practice_count: 2
                        },
                        {
                        id: '16',
                        name: '第3关 for循环和while循环',
                        main: {
                            id: '17',
                            name: '课堂：消灭该死的重复（上）',
                            status: 0,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '18'
                        },
                        homework_list: [
                            {
                            id: '19',
                            name: '数数字',
                            status: 0,
                            type: 1,
                            cover_picture: require('../assets/practice_completed.png'),
                            practice_id: '20'
                            }
                        ],
                        is_finished: 0,
                        total_advanced_practice_count: 1,
                        finished_advanced_practice_count: 2
                        }
                    ]
                    }
            ],
        }
    }
}
</script>

<style scoped>

</style>