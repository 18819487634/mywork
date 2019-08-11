<template>
  <div class="lession-detail" @click="this.close">
    <!-- 头部返回 -->
    <HeaderWrap :title="this.headerTitle" />
    <LessionCatalog @handelCatalog="this.handleCatalog" :targetList="target_list" :isShow="this.isShow" />
    <!-- 课程详情标题 -->
    <LessionDetailTitle :currentProgress="20" :title="this.title" />
    <!-- 购买背景 -->
    <PurchaseBg :imgSrc="this.groupImg" :hasButton="true" :buttonText="this.buttonText" :targetUrl="this.groupTargetUrl" :title="this.firstTitle" />
    <!-- 课程目标详情 -->
    <LessionTarget :targetContent="item" v-for="(item, key) in target_list" :key="key" />
    <!-- 购买背景 -->
    <PurchaseBg :styleProp="this.buyBgStyle" :imgSrc="this.buyBg" :targetUrl="this.groupTargetUrl" :title="this.firstTitle" />
  </div>
</template>

<script>
import HeaderWrap from'./HeaderWrap/HeaderWrap.vue';
import LessionDetailTitle from './LessionDetailTitle/LessionDetailTitle.vue';
import PurchaseBg from './PurchaseBg/PurchaseBg.vue';
import LessionTarget from './LessionTarget/LessionTarget';
import LessionCatalog from './LessionCatalog/LessionCatalog.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      headerTitle: '返回课程中心',
      title: 'Python基础语法',
      groupImg: require('../assets/buy_group_bg.png'),
      groupTargetUrl: 'http://www.baidu.com',
      firstTitle: 'Python基础语法+Python爬虫精进',
      buttonText: '组合购买减300',
      secondTitle: '购买Python基础语法课程，解锁全部内容',
      buyBg: require('../assets/buy_bg.png'),
      buyBgStyle: 'margin-top: 4.32vw',
      isShow: false,
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
                }
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
      ]
    }
  },
 
  components: {
    LessionDetailTitle,
    PurchaseBg,
    LessionTarget,
    HeaderWrap,
    LessionCatalog
  },
 
  methods: {
    handleCatalog() {
      this.isShow = true
    },
    close() {
      this.isShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lession-detail {
  overflow-y: scroll;
  height: 100%;
  background-color: #f7f7fb;
  font-family: PingFang SC,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,Hiragino Sans GB,Microsoft YaHei,Source Han Sans SC,WenQuanYi Micro Hei,sans-serif;
  padding-bottom: 18.16vw;
}

</style>
