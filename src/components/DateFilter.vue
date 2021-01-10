<template>
  <div class="form-check">
        <div class="form-check__group" v-for="item in filters" :key="item.id">
            <input 
                type="radio"
                name="date-filter"
                class="form-check__input"
                :value="item.value"
                @change="handleChange"
                :checked="item.value === value"
            />
            <label class="form-check__label">{{ item.title }}</label>
        </div>
    </div>
</template>

<script>
import {createIdGenerator} from '@/utils/index.js';
const genId = createIdGenerator();
const filters = [
    {
        id: genId(),
        value: 'all',
        title: 'Все',
    },
    {
        id: genId(),
        value: 'past',
        title: 'Прошедшие',
    },
    {
        id: genId(),
        value: 'future',
        title: 'Ожидаемые',
    },
    
];
export default {
    name: "DateFilter",
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    model: {
        prop: 'value',
        event: 'change',
    },
    data() {
        return {
            filters,
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('change', e.target.value)
        },
    },
}
</script>

<style>

</style>