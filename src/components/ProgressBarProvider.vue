<template>
  <div>
    <progress-bar ref="progress-bar-component" />
    <slot />
  </div>
</template>

<script>
  import ProgressBar from "./ProgressBar.vue";
  export default {
    name: "ProgressBarProvider",
    components: { ProgressBar },
    provide() {
      return {
        showLoading: this.showLoading,
      };
    },
    methods: {
      showLoading(isLoading) {
        this.$refs["progress-bar-component"].showLoading(isLoading);
      },
    },
  };
</script>

<style></style>
