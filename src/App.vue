<template>
  <div id="app">
    <div class="wrapper bg-grey">
      <!-- <progress-bar-provider> -->
        <meetups-header :navigations="$options.navigations" />
        <main class="main">
          <router-view :meetups_="[1,2,3]"/>
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
:root {
  --body-color: #34423f;
  --white: #fff;
  --grey: #cbd4e9;
  --grey-light: #f8f9fc;
  --grey-2: #dee1e1;
  --grey-3: #ced4d3;
  --grey-8: #5e706c;
  --blue: #4c6bb6;
  --blue-2: #688dc0;
  --blue-light: #b8c5e2;
  --blue-extra: #eaedf7;
  --red: #db3851;
  --red-light: #e8656f;
  --green: #24a37e;
  --green-light: #dff2ec;
  --default-cover: url('/images/undraw_conference_speaker_6nt7.svg');
}

</style>
