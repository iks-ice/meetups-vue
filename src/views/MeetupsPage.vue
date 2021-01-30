<template>
  <div class="container">
  <filter-panel :filters.sync="filters" />
  <template v-if="meetups">
    <component
    :is="filters.view"
    :meetups="meetups | byState(filters.category) | bySearch(filters.search)"
    />
  </template>
  <!-- <template v-else-if="error">
    {{ error }}
  </template> -->
  </div>
</template>

<script>
import FilterPanel from "@/components/FilterPanel.vue";
import MeetupsList from "@/components/MeetupsList.vue";
import MeetupsCalendar from "@/components/MeetupsCalendar.vue";
// import {fetchMeetups} from "@/utils/index.js";
import http from "@/utils/http-client.js";
export default {
  name: "MeetupsPage",
  components: { MeetupsList, MeetupsCalendar, FilterPanel},
  // props: {
  //   meetups: {
  //     type: Array,
  //     required: true,
  //   }
  // },
  filters: {
    byState(meetups, state) {
      if(state === "past") {
        return meetups.filter(({date}) => Date.now() - date > 0);
      }
      else if (state === "future") {
        return meetups.filter(({date}) => Date.now() - date < 0);
      }
      else {
        return meetups;
      }
    },
    bySearch(meetups, search) {
      return search !== "" ?
        meetups.filter(meetup => JSON.stringify(meetup).toLowerCase().indexOf(search.toLowerCase()) !== -1) :
        meetups;
    }
  },
  data() {
    return {
      meetups: null,
      error: null,
      filters: {
        search: "",
        category: "all",
        view: "MeetupsList",
      }
    };
  },
  // inject: {
  //   showLoading: "showLoading",
  // },
  async mounted() {
    try {
      //this.showLoading(true);
      this.meetups = await http("/meetups");
    }
    catch(error) {
      this.error = error;
    }
    // finally {
    //   this.showLoading(false);
    // }
  },
  // beforeRouteEnter(to, from, next) {
  //     showLoading(true);
  //     fetchMeetups().then(res => res.json())
  //         .then(meetups => next(vm => vm.setData('meetups', meetups)))
  //         .catch(err => next(vm => vm.setData('error', err.message)))
  //         .finally(() => showLoading(false));
  // },
};
</script>

<style>

</style>