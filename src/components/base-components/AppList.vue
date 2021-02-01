<template>
  <component :is="tag">
    <slot v-for="item in list" name="list" :item="item" />

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
        default: "span",
      },
    },
  };
</script>
