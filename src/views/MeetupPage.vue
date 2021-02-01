<template>
  <meetup-view v-if="meetup" :meetup="meetup" />
</template>

<script>
  import { fetchMeetup } from "@/utils/index.js";
  import MeetupView from "@/components/MeetupView.vue";
  export default {
    name: "MeetupPage",
    components: { MeetupView },
    props: {
      meetupId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        meetup: null,
      };
    },
    // inject: {
    //     showLoading: 'showLoading',
    // },
    async mounted() {
      try {
        //this.showLoading(true);
        this.meetup = await fetchMeetup(this.meetupId).then((res) =>
          res.json()
        );
      } catch (error) {
        this.error = error;
      }
      // finally {
      //     this.showLoading(false);
      // }
    },
    // beforeRouteEnter(to, from, next) {
    //     showLoading(true);
    //     fetchMeetup(to.params.meetupId).then(res => res.json())
    //         .then(meetup => next(vm => vm.setData('meetup', meetup)))
    //         .catch(err => next(vm => vm.setData('error', err)))
    //         .finally(() => showLoading(false));
    // }
  };
</script>

<style></style>
