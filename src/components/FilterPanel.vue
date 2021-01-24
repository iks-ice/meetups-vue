<template>
  <div class="filters-panel">
        <div class="filters-panel__col">
            <category-filter v-model="filters.category"/>
        </div>
        <div class="filters-panel__col">
            <div class="form-group form-group_inline" id="filters-panel__search">
                <app-input v-model="filters.search" placeholder="Поиск" inline rounded small>
                    <template #left-icon>
                        <app-icon icon="search" />
                    </template>
                </app-input>
            </div>
            <div class="form-group form-group_inline">
                <view-switch v-model="filters.view" />
            </div>
        </div>
    </div> 
</template>

<script>
import AppIcon from '@/components/base-components/AppIcon.vue';
import AppInput from '@/components/base-components/AppInput.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';
import ViewSwitch from '@/components/ViewSwitch.vue';
export default {
    name: 'FilterPanel',
    components: {AppInput, AppIcon, CategoryFilter, ViewSwitch},
    props: {
        filters: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            filters_: {...this.filters},
        };
    },
    watch: {
        filters_: {
            deep: true,
            handler() {
                this.$emit('update:filters', {...this.filters_});
            }
        }
    }
}
</script>

<style>

</style>