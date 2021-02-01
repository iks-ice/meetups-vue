<template>
  <router-link
    :to="{ name: 'meetup', params: { meetupId: meetup.id } }"
    class="meetups-list__item"
  >
    <div class="meetups-list__col">
      <div
        class="meetups-list__cover"
        :style="{
          '--bg-url': `${this.meetup.imageId ? 'url(' + imgSrc + ')' : ''}`,
        }"
      >
        <h5>{{ meetup.title }}</h5>
      </div>
    </div>
    <div class="meetups-list__col">
      <div class="meetups-list__description">
        <!-- <span class="meetups-list__badge">{{isOrganizer ? "Организую" : "Участвую"}}</span> -->
        <ul class="info-list">
          <li>
            <app-icon alt="user" icon="user" class="icon info-list__icon" />
            {{ meetup.organizer }}
          </li>
          <li>
            <app-icon alt="user" icon="map" class="icon info-list__icon" />
            {{ meetup.place }}
          </li>
          <li>
            <app-icon alt="user" icon="cal-lg" class="icon info-list__icon" />
            <time :datetime="meetup.date">
              {{ time }}
            </time>
          </li>
        </ul>
      </div>
    </div>
  </router-link>
</template>

<script>
  import { getMeetupCoverLink } from "@/utils/index.js";
  import { AppIcon } from "@/components/base-components";
  const loggedUser = "Eugeny F.";
  export default {
    name: "MeetupsListItem",
    components: { AppIcon },
    props: {
      meetup: Object,
    },
    computed: {
      isOrganizer() {
        return this.meetup.organizer === loggedUser;
      },
      imgSrc() {
        const { imageId } = this.meetup;
        return imageId ? getMeetupCoverLink(imageId) : null;
      },
      time() {
        const locale = navigator.language;
        const formatter = new Intl.DateTimeFormat(locale, {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
        return formatter.format(new Date(this.meetup.date));
      },
    },
  };
</script>

<style></style>
