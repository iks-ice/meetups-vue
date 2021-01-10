<template>
    <div class="progress" :style="{width: `${progress}%`}"/>
</template>

<script>
export default {
    name: "ProgressBar",
    props: {
        progress: {
            type: [Number, String],
            default: 0,
        },
    },
}
</script>

<style scoped>
    .progress {
        position: fixed;
        top: 0%;
        left: 0%;
        height: 4px;
        opacity: .8;
        transition: width .2s;
        background: blue;
    }
</style>