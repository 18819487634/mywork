<template>
    <div @click="this.preventClick">
        <transition name="catalogWrap">
            <div class="spread_button" id="spreadButton" v-show="!this.isShow" @mouseover="mouseOver">
                <img class="spread_icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiM1QzVCNkIiLz4KICAgICAgICA8ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzQ3IDExbDQuODUzIDQuODUzYS43LjcgMCAwIDEgMCAuOTlsLTQuODUzIDQuODUyTTE5Ljc4MSAxMS40MzRsNC44NTMgNC44NTJhLjcuNyAwIDAgMSAwIC45OUwxOS43OCAyMi4xMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                <span>目录</span>
            </div>
        </transition>
        
        <transition name="catalogWrap">
            <div class="catalog_wrap" id="catalogWrap" v-show="this.isShow">
                <div class="catalog_content">
                    <img class="catalog_icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiM1QzVCNkIiLz4KICAgICAgICA8ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzQ3IDExbDQuODUzIDQuODUzYS43LjcgMCAwIDEgMCAuOTlsLTQuODUzIDQuODUyTTE5Ljc4MSAxMS40MzRsNC44NTMgNC44NTJhLjcuNyAwIDAgMSAwIC45OUwxOS43OCAyMi4xMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                    <div v-for="item in targetList" :key="item.id">
                        <div class="target_title" @click="handleCatlogDetail($event)">
                            <span  :class="item.level_list[0].is_finished ? '' : 'grey_color'">
                                {{item.title}}
                            </span>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyMnYyMkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuMSIgZD0iTTYuMTg3IDEzLjU5N2w0Ljg1My00Ljg1MmEuNy43IDAgMCAxIC45OSAwbDQuODUyIDQuODUyIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
                        </div>
                        <div class="level_list">
                            <div class="level_detail" v-for="val in item.level_list" :key="val.id">
                                <img src="../../assets/completed.png" v-if="val.is_finished" />
                                <!-- <a class="go_to" :href="'#' + 'level_detail' + val.id" /> -->
                                <a class="go_to" @click="goToTarget(val.id)" />
                                <span class="level_name" :class="val.is_finished ? '' : 'grey_color'">{{val.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
export default {
    name: 'lession-catalog',
    data() {
        return {
            isFold: true
        }
    },
    props: {
        targetList: {
            type: Array,
            default: []
        },
        isShow: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        isShow: {
            immediate: true,
            handler (val) {
            }
        }

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        mouseOver() {
            this.$emit('handelCatalog')
        },

        preventClick(e) {
            e.stopPropagation();
        },

        handleCatlogDetail(e) {
            const val = e.currentTarget.nextElementSibling.style.display;
            if(val !== 'none') {
                e.currentTarget.nextElementSibling.style.display = 'none'
                // e.currentTarget.lastElementChild.style.WebkitTransform = 'rotate(180deg)'
                e.currentTarget.lastElementChild.className = 'hide_errow';
            } else {
                e.currentTarget.nextElementSibling.style.display = 'block';
                // e.currentTarget.lastElementChild.style.WebkitTransform = 'rotate(360deg)'
                e.currentTarget.lastElementChild.className = 'show_errow';
            }
            if(this.isFold) {
                this.isFold = false
            } else {
                this.isFold = true
            }
        },
        goToTarget(id) {
            const val = 'level_detail' + id;
            document.getElementById(val).scrollIntoView();
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const clientWidth = document.body.clientWidth;
            if(scrollTop > document.querySelector('#progressRef').offsetTop + ((clientWidth/100)*4.62)) {
                document.getElementById('spreadButton').style.top = 6.09 + 'vw';
                document.getElementById('catalogWrap').style.top = 6.09 + 'vw';
                // this.renderProgressFixed(0, this.currentProgress)
                
            } else {
                document.getElementById('spreadButton').style.top = 2.5 + 'vw';
                document.getElementById('catalogWrap').style.top = 2.5 + 'vw';
            }
        }
    }
}
</script>

<style scoped>
.catalogWrap-enter-active {
  transition: all 0.5s ease;
}
.catalogWrap-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.catalogWrap-enter, .catalogWrap-leave-to {
  transform: translateX(400px);
  opacity: 0;
}

.catalog_wrap {
    position: fixed;
    top: 2.5vw;
    width: 22vw;
    right: 0;
    background: #4b4b56;
    box-shadow: 0 5px 5px 2px hsla(0,0%,39%,.5);
    opacity: 0.96;
    z-index: 20;
    padding-top: 4vw;
}
.spread_button {
    background: #4b4b56;
    opacity: 0.96;
    position: fixed;
    top: 2.5vw;
    right: 0;
    width: 4.5vw;
    height: 2.4vw;
    padding-left: 0.2vw;
    border-radius: 2.4vw 0 0 2.4vw;
    background-color: #4b4b56;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.spread_button>img {
    width: 1.9vw;
}
.spread_button>span {
    margin-left: 0.2vw;
    font-size: 0.9vw;
}

.catalog_content {
    padding-bottom: 2.5vw;
    overflow: auto;
}
.catalog_icon {
    position: absolute;
    top: 16px;
    left: 28px;
}
.target_title {
    position: relative;
    font-size: 18px;
    color: #fff;
    overflow: hidden;
    transition: all .1s;
    padding-left: 28px;
    padding-right: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
}
.target_title>span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.target_title>img {
    position: absolute;
    right: 35px;
    top: 0;
}
.level_detail {
    position: relative;
    padding-left: 61px;
    height: 44px;
    line-height: 44px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
.level_detail>img {
    position: absolute;
    top: 50%;
    left: 24px;
    width: 23px;
    transform: translate(0, -50%);
}
.level_list>div:last-child {
    margin-bottom: 30px;
}
.go_to {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.go_to:hover {
    background-color: #ffffff;
    opacity: .3;
    color: #fff;
    z-index: 0;
}
.grey_color {
    color: rgba(255, 255, 255, 0.4);
}
.level_hide {
    display: none;
}
.level_show {
    display: block;
}
.hide_errow {
    transform: rotate(180deg);
}
.show_errow {
    transform: rotate(360deg);
}
</style>