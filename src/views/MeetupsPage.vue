<template>
    <div class="container">
        <div class="filters-panel">
            <div class="filters-panel__col">
                <date-filters v-model="date"/>
            </div>
            <div class="filters-panel__col">
                <div class="form-group form-group_inline" id="filters-panel__search">
                    <app-input v-model="search" placeholder="Поиск" inline rounded small>
                        <template #left-icon>
                            <app-icon icon="search" />
                        </template>
                    </app-input>
                </div>
                <div class="form-group form-group_inline">
                    <display-filter v-model="display" />
                </div>
            </div>
        </div> 
        <template v-if="meetups">
            <component :is="display" :meetups="meetups | byState(date) | bySearch(search)"/>
        </template>
        <template v-else-if="error">
            {{error}}
        </template>
    </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue';
import AppInput from '@/components/AppInput.vue';
import DateFilters from '@/components/DateFilter.vue';
import DisplayFilter from '@/components/DisplayFilter.vue';
import MeetupsList from '@/components/MeetupsList.vue';
import MeetupsCalendar from '@/components/MeetupsCalendar.vue';
import {fetchMeetups} from '@/utils/index.js';
export default {
    name: "MeetupsPage",
    components: {AppInput, AppIcon, DateFilters, DisplayFilter, MeetupsList, MeetupsCalendar},
    data() {
        return {
            search: '',
            date: 'all',
            display: 'MeetupsList',
            meetups: null,
            error: null,
        };
    },
    filters: {
        byState(meetups, state) {
            if(state === 'past') {
                return meetups.filter(({date}) => Date.now() - date > 0);
            }
            else if (state === 'future') {
                return meetups.filter(({date}) => Date.now() - date < 0)
            }
            else {
                return meetups;
            }
        },
        bySearch(meetups, search) {
            console.log(search);
            return search !== "" ? 
                meetups.filter(meetup => JSON.stringify(meetup).toLowerCase().indexOf(search.toLowerCase()) !== -1) : 
                meetups;
        }
    },
    methods: {

    },
    async mounted() {
        try {
            this.meetups = await fetchMeetups().then(res => res.json());
        }
        catch(error) {
            this.error = error.message;
            console.log(error);
        }
    },
}
</script>

<style>

</style>