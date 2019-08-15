<template>
    <div class="goback">
        <div>
            <a :href="this.targetUrl">
                <img class="icon" src="../../assets/goback_arrow.png"/>
                <span class="goback-text">{{this.title}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-wrap',
    props: {
        title: {
            type: String,
            default: ''
        },
        targetUrl: {
            type: String,
            default: ''
        }
    }
    
}
</script>

<style scoped>
.goback {
    background-color: #ffffff;
}
.goback div {
    width: 54.45vw;
    height: 2.5vw;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.goback div a {
    text-decoration: none;
    outline: none;
    -webkit-appearance: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.goback div a i {
    font-size: 14px;
}
.goback-text {
    margin-left: 0.5vw;
    font-family: MicrosoftYaHei;
    font-size: 0.8vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.16vw;
    color: #4b4474;
}
.icon {
  width: 0.38vw;
}
</style>