<template>
    <div>
        <meetup-cover :title="meetup.title" :link="link"/>
        <div class="container">
            <div class="meetup">
            <div class="meetup__content">
                <h3>Описание</h3>
                <meetup-description :description='meetup.description'/>

                <h3>Программа</h3>
                <meetup-agenda :agenda='meetup.agenda'/>
            </div>
            <div v-if='meetup' class="meetup__aside">
                <meetup-info :organizer='meetup.organizer' :place='meetup.place' :date='date'/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import MeetupCover from './MeetupCover.vue';
import MeetupDescription from './MeetupDescription.vue';
import MeetupAgenda from './MeetupAgenda.vue';
import MeetupInfo from './MeetupInfo.vue';
import { getMeetupCoverLink} from '@/utils/index.js';
export default {
    name: 'MeetupView',
    components: {
        MeetupCover,
        MeetupDescription,
        MeetupAgenda,
        MeetupInfo,
    },

    props: {
        meetup: {
            type: Object,
            required: true,
        },
    },
    computed: {
        link() {
            return getMeetupCoverLink(this.meetup.imageId);
        },
        date() {
            return new Date(this.meetup.date);
        },
    },
}
</script>

<style>

</style>

