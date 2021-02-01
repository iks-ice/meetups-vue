<template>
  <div class="container">
    <filter-panel :filters.sync="filters" />
    <template v-if="meetups">
      <component
        :is="filters.view"
        :meetups="
          meetups | byState(filters.category) | bySearch(filters.search)
        "
      />
    </template>
    <template v-else>
      <empty-meetups />
    </template>
  </div>
</template>

<script>
  import FilterPanel from "@/components/FilterPanel.vue";
  import MeetupsList from "@/components/MeetupsList.vue";
  import MeetupsCalendar from "@/components/MeetupsCalendar.vue";
  import EmptyMeetups from "@/components/EmptyMeetups.vue";
  import { actionTypes } from "@/store/types.js";
  import { mapState, mapActions } from "vuex";

  export default {
    name: "MeetupsPage",
    components: { MeetupsList, MeetupsCalendar, FilterPanel, EmptyMeetups },
    filters: {
      byState(meetups, state) {
        if (state === "past") {
          return meetups.filter(({ date }) => Date.now() - date > 0);
        } else if (state === "future") {
          return meetups.filter(({ date }) => Date.now() - date < 0);
        } else {
          return meetups;
        }
      },
      bySearch(meetups, search) {
        return search !== ""
          ? meetups.filter(
              (meetup) =>
                JSON.stringify(meetup)
                  .toLowerCase()
                  .indexOf(search.toLowerCase()) !== -1
            )
          : meetups;
      },
    },
    inject: {
      success: "success",
      error: "error",
    },
    data() {
      return {
        error: null,
        filters: {
          search: "",
          category: "all",
          view: "MeetupsList",
        },
      };
    },
    computed: {
      ...mapState("meetups", ["meetups"]),
    },
    async mounted() {
      try {
        console.log("Meetups page mounted");
        if (!this.meetups) {
          await this.getMeetups();
        }
      } catch (error) {
        this.error(error.message);
        console.log(error);
      }
    },
    methods: {
      ...mapActions("meetups/", {
        getMeetups: actionTypes.GET_MEETUPS,
      }),
    },
  };
</script>

<style></style>
