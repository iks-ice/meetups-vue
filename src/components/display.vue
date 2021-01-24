<template>
   <div class="page-tabs">
        <button
        v-for="item in filters"
        :key="item.id"
            type="button"
            class="page-tabs__tab"
            :class="{'page-tabs__tab_active': item.value === value}"
            @click="$emit('click', item.value)"
        >
            <app-icon :icon="item.icon"/>
        </button>
   </div>
</template>

<script>
import AppIcon from '.base-components/AppIcon.vue';
import {createIdGenerator} from '@/utils/index.js';
const genId = createIdGenerator();
export default {
    name: "DisplayFilter",
    components: {AppIcon},
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    model: {
        prop: 'value',
        event: 'click',
    },
    data() {
        return {
            filters: [
                {
                    id: genId(),
                    value: 'list',
                    icon:'list',
                },
                {
                    id: genId(),
                    value: 'calendar',
                    icon: 'calendar',
                },
                
            ],
        };
    },
}
</script>

<style>

</style>