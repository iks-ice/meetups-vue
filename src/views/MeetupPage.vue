<template>
  <meetup-view v-if="meetup" :meetup="meetup" />
</template>

<script>
import {fetchMeetup} from '@/utils/index.js';
import MeetupView from '@/components/MeetupView.vue';
export default {
    name: "MeetupPage",
    components: {MeetupView},
    data(){
        return {
            meetup: null,
        };
    },
    async beforeRouteEnter(to, from, next) {
        const m = await fetchMeetup(to.params.meetupId).then(res => res.json());
        next(vm => vm.setData(m));
    },
    methods: {
        setData(m) {
            this.meetup = m;
        }
    }
}
</script>

<style>

</style>