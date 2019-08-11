<template>
    <div class="lession-title">
        <div class="title">
            {{title}}
        </div>
        <div class="progress-wrap">
            <span>课程进度</span>
            <div class="progress-bar">
                <div class="move-progress" ref="moveProgressRef">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxODIgMzIiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTAwJSIgeDI9IjUuOTI1JSIgeTE9IjUwJSIgeTI9IjUwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9Ii4yOTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNzAzIDI1bC0xNS0xNS4wNDJhNS43NDggNS43NDggMCAwIDEgLjE0Ni04LjMwN2MyLjQwOC0yLjI1NSA2LjI0Ni0yLjE5MiA4LjU3My4xNDFsMTguNzMzIDE4Ljc4NWE2LjIyNSA2LjIyNSAwIDAgMSAwIDguODQ2TDEwLjQyMiA0OC4yMDhjLTIuMzI3IDIuMzMzLTYuMTY1IDIuMzk2LTguNTczLjE0MWE1Ljc0OCA1Ljc0OCAwIDAgMS0uMTQ2LTguMzA3bDE1LTE1LjA0MnptMzggMGwtMTUtMTUuMDQyYTUuNzQ4IDUuNzQ4IDAgMCAxIC4xNDYtOC4zMDdjMi40MDgtMi4yNTUgNi4yNDYtMi4xOTIgOC41NzMuMTQxbDE4LjczMyAxOC43ODVhNi4yMjUgNi4yMjUgMCAwIDEgMCA4Ljg0Nkw0OC40MjIgNDguMjA4Yy0yLjMyNyAyLjMzMy02LjE2NSAyLjM5Ni04LjU3My4xNDFhNS43NDggNS43NDggMCAwIDEtLjE0Ni04LjMwN2wxNS0xNS4wNDJ6bTM4IDBsLTE1LTE1LjA0MmE1Ljc0OCA1Ljc0OCAwIDAgMSAuMTQ2LTguMzA3YzIuNDA4LTIuMjU1IDYuMjQ2LTIuMTkyIDguNTczLjE0MWwxOC43MzMgMTguNzg1YTYuMjI1IDYuMjI1IDAgMCAxIDAgOC44NDZMODYuNDIyIDQ4LjIwOGMtMi4zMjcgMi4zMzMtNi4xNjUgMi4zOTYtOC41NzMuMTQxYTUuNzQ4IDUuNzQ4IDAgMCAxLS4xNDYtOC4zMDdsMTUtMTUuMDQyem0zOCAwbC0xNS0xNS4wNDJhNS43NDggNS43NDggMCAwIDEgLjE0Ni04LjMwN2MyLjQwOC0yLjI1NSA2LjI0Ni0yLjE5MiA4LjU3My4xNDFsMTguNzMzIDE4Ljc4NWE2LjIyNSA2LjIyNSAwIDAgMSAwIDguODQ2bC0xOC43MzMgMTguNzg1Yy0yLjMyNyAyLjMzMy02LjE2NSAyLjM5Ni04LjU3My4xNDFhNS43NDggNS43NDggMCAwIDEtLjE0Ni04LjMwN2wxNS0xNS4wNDJ6bTM4IDBsLTE1LTE1LjA0MmE1Ljc0OCA1Ljc0OCAwIDAgMSAuMTQ2LTguMzA3YzIuNDA4LTIuMjU1IDYuMjQ2LTIuMTkyIDguNTczLjE0MWwxOC43MzMgMTguNzg1YTYuMjI1IDYuMjI1IDAgMCAxIDAgOC44NDZsLTE4LjczMyAxOC43ODVjLTIuMzI3IDIuMzMzLTYuMTY1IDIuMzk2LTguNTczLjE0MWE1Ljc0OCA1Ljc0OCAwIDAgMS0uMTQ2LTguMzA3bDE1LTE1LjA0MnoiIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtOSkiLz4KPC9zdmc+Cg=="/>
                    <div class="progress-text">
                        {{currentProgress}}%
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lession-detail-title',
    props: {
        currentProgress: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ''
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

<style>
.lession-title {
    width: 1128px;
    border-radius: 8px;
    -webkit-box-shadow: 0 0 10px 5px #eee;
    box-shadow: 0 0 10px 5px #eee;
    font-family: PingFang SC,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,Hiragino Sans GB,Microsoft YaHei,Source Han Sans SC,WenQuanYi Micro Hei,sans-serif;
}
.progress-wrap{
    position: relative;
    height: 197px;
    width: 1128px;
    padding: 40px;
    border-radius: 0 0 8px 8px;
    background-color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
}
  
#progress-wrap>span {
    position: absolute;
    top: 11px;
    left: 39px;
    color: #1b1243;
    opacity: .4;
}
.progress-bar{
    position: relative;
    width: 1048px;
    height: 24px;
    border-radius: 4px;
    background: #EEEEEE;
}
.progress-text {
    position: absolute;
    z-index: 1;
    right: -24px;
    top: -41px;
    width: 52px;
    height: 32px;
    line-height: 32px;
    background-color: #ffcb7c;
    color: #31285d;
    text-align: center;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
}

.move-progress {
    position: absolute;
    left: 0;
    top: -4px;
    width: 0;
    height: 32px;
    border-radius: 4px;
    z-index: 1;
    background-image: linear-gradient(90deg,#5f61f0 45%,#6ccfff);
}

.move-progress>img {
    float: right;
    margin-right: 10px;
    opacity: .4;
}
</style>