<template>
  <div>
    <meetup-cover :title="meetup.title" :link="link" />
    <div class="container">
      <div class="meetup">
        <div class="meetup__content">
          <div class="content-tabs">
            <div class="content-tabs__nav">
              <router-link
                :to="{ name: 'description' }"
                class="content-tabs__tab"
              >
                <h3>Описание</h3>
              </router-link>
              <router-link :to="{ name: 'agenda' }" class="content-tabs__tab">
                <h3>Программа</h3>
              </router-link>
            </div>
          </div>
          <router-view :meetup="meetup" />
        </div>
        <div v-if="meetup" class="meetup__aside">
          <meetup-info
            :organizer="meetup.organizer"
            :place="meetup.place"
            :date="date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MeetupCover from "./MeetupCover.vue";
  import MeetupInfo from "./MeetupInfo.vue";
  import { getMeetupCoverLink } from "@/utils/index.js";
  export default {
    name: "MeetupView",
    components: {
      MeetupCover,
      MeetupInfo,
    },
    props: {
      meetup: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        selected: "",
      };
    },
    computed: {
      link() {
        return getMeetupCoverLink(this.meetup.imageId);
      },
      date() {
        return new Date(this.meetup.date);
      },
    },
  };
</script>

<style></style>
