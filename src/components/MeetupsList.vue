<template>
  <app-list :list="meetups" class="transition-list meetups-list">
    <template #list="{ item }">
      <meetups-list-item :meetup="item" />
    </template>
  </app-list>
</template>

<script>
  import MeetupsListItem from "./MeetupsListItem.vue";
  import { AppList } from "@/components/base-components";
  export default {
    components: {
      MeetupsListItem,
      AppList,
    },
    props: {
      meetups: {
        type: Array,
        default: () => [],
      },
    },
    mounted() {
      console.log(this.meetups);
    },
  };
</script>

<style></style>
