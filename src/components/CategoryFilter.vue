<template>
    <div class="form-check">
        <app-list :list="$options.categories" inline>
            <template v-slot:list="{ item }">
                <div class="form-check__group">
                    <input 
                        type="radio"
                        name="category-filter"
                        class="form-check__input"
                        :value="item.value"
                        @change="onChange"
                        :checked="item.value === value"
                    />
                    <label class="form-check__label">{{ item.title }}</label>
                </div>
            </template>
        </app-list>
    </div>
</template>

<script>
import AppList from '@/components/base-components/AppList.vue';
import {getCategories} from '@/utils/data.js';

export default {
    name: "CategoryFilter",
    components: {AppList},
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
    categories: getCategories(),
    methods: {
        onChange({target: {value}}) {
            this.$emit('change', value);
        }
    }
}
</script>

<style>

</style>