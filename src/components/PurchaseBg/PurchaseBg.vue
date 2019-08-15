<template>
    <div class="bg_img" :style="this.styleProp" @click="this.goToTarget">
        <img :src="this.imgSrc" />
        <div class="content">
            <div>{{this.title}}</div>
            <div class="button" v-if="this.hasButton">
                {{this.buttonText}}
                <img src="../../assets/compose_arrow.png" />
            </div>
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
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    width: 54.45vw;
    height: 10.63vw;
    border-radius: 1.58vw;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: MicrosoftYaHei-Bold;
    font-size: 1.54vw;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0.15vw;
    color: #ffffff;
}
.button {
    position: relative;
    margin: 0 auto;
    margin-top: 1.22vw;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 18.59vw;
    height: 2.66vw;
    background-image: linear-gradient(-90deg, #f542d5 0%, #ed7c55 35%, #f2b68c 65%, #f7f0c2 100%);
    border-radius: 1.26vw;
    font-family: MicrosoftYaHei;
    font-size: 1.17vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.23vw;
    color: #fefefe;
}
.button>img {
    width: 1.07vw;
    position: absolute;
    right: 1.41vw;
    top: 50%;
    transform: translate(0, -50%);
}
</style>


