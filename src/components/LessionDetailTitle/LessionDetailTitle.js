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
            recentLevel: '第9关 课堂：深夜食堂营业记',
            isFixed: false,
            isShowFixed: false
        }
    },
  
    mounted() {
        this.renderProgress(0, this.currentProgress);
        // this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
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
        },

        renderProgressFixed(slogan, progress) {
            if(this.isShowFixed) {
                return
            }
            if(document.getElementById('moveProgressRefFixed')) {
                this.isShowFixed = true
                this.handleProgress(slogan, progress)
            }
        },
        handleProgress(slogan, progress) {
            if(slogan < progress) {
                slogan += Math.random(0, 1);
                const val = slogan + '%';
                if(document.getElementById('moveProgressRefFixed')) {
                    document.getElementById('moveProgressRefFixed').style.width = val
                }
                this.timer = window.requestAnimationFrame(() => {
                    this.handleProgress(slogan, progress)
                })
            } else {
                window.cancelAnimationFrame(this.timer)
            }
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const clientWidth = document.body.clientWidth;
            if(scrollTop > document.querySelector('#progressRef').offsetTop + ((clientWidth/100)*4.62)) {
                this.isFixed = true
                // this.renderProgressFixed(0, this.currentProgress)
            } else {
                this.isFixed = false
                this.isShowFixed = false
            }
        }
    }
}