<template>
    <div class="bg_img" :style="this.styleProp">
        <img :src="this.imgSrc"/>
        <div class="content">
            <div>{{this.title}}</div>
            <div class="button" v-if="this.hasButton" @click="this.goToTarget">{{this.buttonText}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'purchase-bg',
    props: {
        imgSrc: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        hasButton: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            default: ''
        },
        targetUrl: {
            type: String,
            default: ''
        },
        styleProp: {
            type: String,
            default: ''
        }
    },
    mounted() {
        console.log(this.imgSrc)
    },
    methods: {
       goToTarget() {
           console.log(this.targetUrl)
           if(this.targetUrl !== '') {
                window.open(this.targetUrl, 'viewport')
            }
       }
    }
}
</script>
<style scoped>
.bg_img {
    width: 74.74vw;
    height: 14.64vw;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
}
.bg_img>img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.content {
    width: 100%;
    font-family: MicrosoftYaHei-Bold;
    font-size: 2.1vw;
    font-weight: 600;
    letter-spacing: 0.21vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    text-align: center;
}
.button {
    width: 25.62vw;
    height: 3.59vw;
    background-image: linear-gradient(-90deg, #f542d5 0%, #ed7c55 35%, #f2b68c 65%, #f7f0c2 100%);
    border-radius: 1.78vw;
    margin: 0 auto;
    margin-top: 1.9vw;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>


