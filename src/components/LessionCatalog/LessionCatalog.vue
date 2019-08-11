<template>
    <div>
        <transition name="spread-button">
            <div class="spread_button" v-if="!this.isShow" @mouseover="mouseOver">
                <img class="spread_icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiM1QzVCNkIiLz4KICAgICAgICA8ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzQ3IDExbDQuODUzIDQuODUzYS43LjcgMCAwIDEgMCAuOTlsLTQuODUzIDQuODUyTTE5Ljc4MSAxMS40MzRsNC44NTMgNC44NTJhLjcuNyAwIDAgMSAwIC45OUwxOS43OCAyMi4xMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                <span>目录</span>
            </div>
        </transition>
        
        <transition name="catalog-wrap">
            <div class="catalog_wrap" v-if="this.isShow">
                <div class="catalog_content">
                    <img class="catalog_icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM0IDM0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiM1QzVCNkIiLz4KICAgICAgICA8ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMzQ3IDExbDQuODUzIDQuODUzYS43LjcgMCAwIDEgMCAuOTlsLTQuODUzIDQuODUyTTE5Ljc4MSAxMS40MzRsNC44NTMgNC44NTJhLjcuNyAwIDAgMSAwIC45OUwxOS43OCAyMi4xMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                    <div v-for="item in targetList" :key="item.id">
                        <div class="target_title">{{item.title}}</div>
                        <div class="level_detail" v-for="val in item.level_list" :key="val.id">
                            <div class="level_name">{{val.name}}</div>
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
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        mouseOver() {
            this.$emit('handelCatalog')
        }
    }
}
</script>

<style scoped>

.catalog-wrap-enter-active {
  transition: all 0.5s ease 0s;
}
.catalog-wrap-leave-active {
  transition: all 0.5s ease 0s;
}
/* .catalog_detail-enter, .catalog_detail-leave-to {
  transform: translateX(10px);
  opacity: 0;
} */

.spread-button-enter-active {
    transition: all 0.4s ease 0s;
}

.spread-button-leave-active {
  transition: all 0.5s ease 0s;
}


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