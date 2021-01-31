<template>
  <div id="app">
    <div class="wrapper bg-grey">
      <!-- <progress-bar-provider> -->
        <meetups-header :navigations="$options.navigations" />
        <main class="main">
          <router-view />
        </main>
        <meetups-footer />
      <!-- </progress-bar-provider> -->
    </div>
    <app-toaster ref="toaster"/>
  </div>
</template>

<script>
import MeetupsHeader from '@/components/MeetupsHeader';
import MeetupsFooter from '@/components/MeetupsFooter';
// import ProgressBarProvider from '@/components/ProgressBarProvider';
import {getNavigations} from '@/utils/data.js';
import AppToaster from '@/components/base-components/AppToaster.vue';
export default {
  name: 'App',
  components: {
    MeetupsHeader,
    MeetupsFooter,
    AppToaster,
    // ProgressBarProvider,
  },
  navigations: getNavigations(),
  provide() {
    return {
      success: this.success,
      error: this.error,
    };
  },
  methods: {
    success(message) {
      this.$refs['toaster'].success(message);
    },
    error(message) {
      this.$refs['toaster'].error(message);
    }
  }
};
</script>

<style scoped>

</style>
