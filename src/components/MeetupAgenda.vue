<template>
  <div class="meetup-agenda">
    <div v-for='item in meetup.agenda' :key='item.id' class="meetup-agenda__item">
      <meetup-agenda-item :agendaItem='item' />
    </div>
  </div>
</template>

<script>
import MeetupAgendaItem from './MeetupAgendaItem.vue';
export default {
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

</style>
