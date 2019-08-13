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
        },
        isTry: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            recentLevel: '第9关 课堂：深夜食堂营业记'
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