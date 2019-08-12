<template>
    <div @click="this.preventClick" id="test">
        <transition name="catalogWrap">
            <div class="spread_button" v-if="!this.isShow" @mouseover="mouseOver">
                <img class="spread_icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiM1QzVCNkIiLz4KICAgICAgICA8ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzQ3IDExbDQuODUzIDQuODUzYS43LjcgMCAwIDEgMCAuOTlsLTQuODUzIDQuODUyTTE5Ljc4MSAxMS40MzRsNC44NTMgNC44NTJhLjcuNyAwIDAgMSAwIC45OUwxOS43OCAyMi4xMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                <span>目录</span>
            </div>
        </transition>
        
        <transition name="catalogWrap">
            <div class="catalog_wrap" v-if="this.isShow">
                <div class="catalog_content">
                    <img class="catalog_icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiM1QzVCNkIiLz4KICAgICAgICA8ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzQ3IDExbDQuODUzIDQuODUzYS43LjcgMCAwIDEgMCAuOTlsLTQuODUzIDQuODUyTTE5Ljc4MSAxMS40MzRsNC44NTMgNC44NTJhLjcuNyAwIDAgMSAwIC45OUwxOS43OCAyMi4xMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                    <div v-for="item in targetList" :key="item.id">
                        <div class="target_title" @click="handleCatlogDetail($event)">
                            <span>{{item.title}}</span>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyMnYyMkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuMSIgZD0iTTYuMTg3IDEzLjU5N2w0Ljg1My00Ljg1MmEuNy43IDAgMCAxIC45OSAwbDQuODUyIDQuODUyIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
                        </div>
                        <div :id="'level' + item.level_list.length">
                            <div class="level_detail" v-for="val in item.level_list" :key="val.id">
                                <div class="level_name">{{val.name}}</div>
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
            immediate: true,    // 这句重要
            handler (val) {
                console.log('isShow Value:' + val);
            }
        }

    },
    mounted() {
    },
    methods: {
        mouseOver() {
            this.$emit('handelCatalog')
        },

        preventClick(e) {
            e.stopPropagation();
        },

        handleCatlogDetail(e) {
            const val = window.getComputedStyle(e.currentTarget.nextElementSibling, 'display');
            if(val !== 'none') {
                e.currentTarget.nextElementSibling.style.display = 'none';
            } else {
                e.currentTarget.nextElementSibling.style.display = 'block';
            }
            if(this.isFold) {
                this.isFold = false
            } else {
                this.isFold = true
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

/* .catalogWrap-enter-active {
  transition: all 0.5s ease 0s;
}
.catalogWrap-leave-active {
  transition: all 0.5s ease 0s;
} */
/* .catalog_detail-enter, .catalog_detail-leave-to {
  transform: translateX(10px);
  opacity: 0;
} */

.catalog_wrap {
    position: fixed;
    top: 3.47vw;
    width: 22vw;
    right: 0;
    background: #4b4b56;
    -webkit-box-shadow: 0 5px 5px 2px hsla(0,0%,39%,.5);
    box-shadow: 0 5px 5px 2px hsla(0,0%,39%,.5);
    opacity: 0.96;
    z-index: 10;
    padding-top: 4vw;
}
.spread_button {
    background: #4b4b56;
    opacity: 0.96;
    position: fixed;
    top: 3.47vw;
    right: 0;
    width: 84px;
    height: 44px;
    padding-left: 5px;
    border-radius: 22px 0 0 22px;
    background-color: #4b4b56;
    -webkit-box-shadow: -2px 2px 10px 0 rgba(0,0,0,.21);
    box-shadow: -2px 2px 10px 0 rgba(0,0,0,.21);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.spread_button>span {
    margin-left: 10px;
}

.catalog_content {
    padding-bottom: 2.5vw;
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
    -webkit-transition: all .1s;
    transition: all .1s;
    padding-left: 28px;
    padding-right: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
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
}
</style>