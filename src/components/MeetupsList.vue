<template>
  <div class="transition-list meetups-list">
      <meetups-list-item
        v-for="meetup in meetups"
        :key="meetup.id"
        :meetup="meetup"
    />
  </div>
</template>

<script>
import MeetupsListItem from './MeetupsListItem.vue';
export default {
    components: {
        MeetupsListItem,
    },
    props: {
        meetups: {
            type: Array,
            default: () => [],
        }
    },
    mounted() {
        console.log(this.meetups);
    }
}
</script>

<style>

</style>