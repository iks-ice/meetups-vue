<template>
  <ul class="info-list">
    <li>
      <app-icon class="icon info-list__icon" alt="icon" icon="user" />
      {{ organizer }}
    </li>
    <li>
      <app-icon class="icon info-list__icon" alt="icon" icon="map" />
      {{ place }}
    </li>
    <li>
      <app-icon class="icon info-list__icon" alt="icon" icon="cal-lg" />
      <time :datetime="date">{{ time }}</time>
    </li>
  </ul>
</template>

<script>
  import { createFormatter } from "@/utils/index.js";
  import AppIcon from "./base-components/AppIcon.vue";
  export default {
    name: "MeetupInfo",
    components: { AppIcon },
    props: {
      organizer: {
        type: String,
        required: true,
      },
      place: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
    computed: {
      time() {
        return createFormatter({
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(this.date);
      },
    },
  };
</script>

<style></style>
