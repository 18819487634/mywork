<template>
    <div class="lession-title">
        <div class="title">
           <div class="title-content">
                <span>{{this.title}}</span>
                <div class="trial-time" v-if="this.isTry">试用期</div>
           </div>
        </div>
        <div>
            <div class="progress-wrap">
                <span class="progress-text">课程进度</span>
                <div class="progress-bar">
                    <div class="move-progress" ref="moveProgressRef">
                        <img class="progress-arrow" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxODIgMzIiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTAwJSIgeDI9IjUuOTI1JSIgeTE9IjUwJSIgeTI9IjUwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9Ii4yOTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNzAzIDI1bC0xNS0xNS4wNDJhNS43NDggNS43NDggMCAwIDEgLjE0Ni04LjMwN2MyLjQwOC0yLjI1NSA2LjI0Ni0yLjE5MiA4LjU3My4xNDFsMTguNzMzIDE4Ljc4NWE2LjIyNSA2LjIyNSAwIDAgMSAwIDguODQ2TDEwLjQyMiA0OC4yMDhjLTIuMzI3IDIuMzMzLTYuMTY1IDIuMzk2LTguNTczLjE0MWE1Ljc0OCA1Ljc0OCAwIDAgMS0uMTQ2LTguMzA3bDE1LTE1LjA0MnptMzggMGwtMTUtMTUuMDQyYTUuNzQ4IDUuNzQ4IDAgMCAxIC4xNDYtOC4zMDdjMi40MDgtMi4yNTUgNi4yNDYtMi4xOTIgOC41NzMuMTQxbDE4LjczMyAxOC43ODVhNi4yMjUgNi4yMjUgMCAwIDEgMCA4Ljg0Nkw0OC40MjIgNDguMjA4Yy0yLjMyNyAyLjMzMy02LjE2NSAyLjM5Ni04LjU3My4xNDFhNS43NDggNS43NDggMCAwIDEtLjE0Ni04LjMwN2wxNS0xNS4wNDJ6bTM4IDBsLTE1LTE1LjA0MmE1Ljc0OCA1Ljc0OCAwIDAgMSAuMTQ2LTguMzA3YzIuNDA4LTIuMjU1IDYuMjQ2LTIuMTkyIDguNTczLjE0MWwxOC43MzMgMTguNzg1YTYuMjI1IDYuMjI1IDAgMCAxIDAgOC44NDZMODYuNDIyIDQ4LjIwOGMtMi4zMjcgMi4zMzMtNi4xNjUgMi4zOTYtOC41NzMuMTQxYTUuNzQ4IDUuNzQ4IDAgMCAxLS4xNDYtOC4zMDdsMTUtMTUuMDQyem0zOCAwbC0xNS0xNS4wNDJhNS43NDggNS43NDggMCAwIDEgLjE0Ni04LjMwN2MyLjQwOC0yLjI1NSA2LjI0Ni0yLjE5MiA4LjU3My4xNDFsMTguNzMzIDE4Ljc4NWE2LjIyNSA2LjIyNSAwIDAgMSAwIDguODQ2bC0xOC43MzMgMTguNzg1Yy0yLjMyNyAyLjMzMy02LjE2NSAyLjM5Ni04LjU3My4xNDFhNS43NDggNS43NDggMCAwIDEtLjE0Ni04LjMwN2wxNS0xNS4wNDJ6bTM4IDBsLTE1LTE1LjA0MmE1Ljc0OCA1Ljc0OCAwIDAgMSAuMTQ2LTguMzA3YzIuNDA4LTIuMjU1IDYuMjQ2LTIuMTkyIDguNTczLjE0MWwxOC43MzMgMTguNzg1YTYuMjI1IDYuMjI1IDAgMCAxIDAgOC44NDZsLTE4LjczMyAxOC43ODVjLTIuMzI3IDIuMzMzLTYuMTY1IDIuMzk2LTguNTczLjE0MWE1Ljc0OCA1Ljc0OCAwIDAgMS0uMTQ2LTguMzA3bDE1LTE1LjA0MnoiIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtOSkiLz4KPC9zdmc+Cg=="/>
                        <div class="progress-num">
                            <img src="../../assets/prgress_tip.png"/>
                            <span>{{currentProgress}}%</span>
                        </div>
                    </div>
                </div>
                <div class="recent-level">
                    <span class="level-text">
                        <span>最近解锁关卡:&nbsp;</span>
                        <span :title="this.recentLevel">{{this.recentLevel}}</span>
                    </span>
                    <button class="button">继续闯关</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import LessionDetailTitle from './LessionDetailTitle.js'
export default {
    ...LessionDetailTitle
}
</script>

<style scoped>
@import url('./LessionDetailTitle.css')
</style>