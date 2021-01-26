<template>
    <component :is="tag">
        <slot name="list" v-for="item in list" :item="item" />

        <slot />
    </component>
</template>
<script>
export default {
    name: "AppList",
    props: {
        list: {
            type: Array,
            required: true,
        },
        tag: {
            type: String,
            default: 'span',
        },
    },
}
</script>
