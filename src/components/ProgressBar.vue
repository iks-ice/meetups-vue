<template>
    <div ref="progress-bar-wrap" class="progress--layout">
        <div ref="progress-bar" class="progress" />
        <div class="transparent"/>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    data(){
        return {
            width: 35,
            interval: null,
            time: null,
        };
    },
    methods: {
        step: () => Math.random().toFixed(1)*10,
        showLoading (isLoading) {
            if (isLoading) {
                this.interval = setInterval(() => {
                    this.width = this.width + this.step();
                    this.$refs['progress-bar-wrap'].style.display = 'block';
                    this.$refs['progress-bar'].style.width = `${this.width}%`;
                    if(this.width > 100) {
                        clearInterval(this.interval);
                    }
                }, 200);
            }
            if (!isLoading) {
                clearInterval(this.interval);
                this.$refs['progress-bar'].style.width = '100%';
                this.time = setTimeout(() => {
                    this.$refs['progress-bar-wrap'].style.display = 'none';
                    this.width = 35;
                    clearTimeout(this.timeInterval);
                }, 200);
            }
        }
    },
}
</script>

<style scoped>
.progress--layout {
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
}
    .progress {
        height: 4px;
        transition: width .2s;
        background: blue;
    }
    .transparent {
        width: 100%;
        height: 100vh;
        background-color: #fff;
        opacity: 0.5;
    }
</style>