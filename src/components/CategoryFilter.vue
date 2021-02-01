<template>
  <div class="form-check">
    <app-list :list="$options.categories" inline>
      <template #list="{ item }">
        <div class="form-check__group">
          <input
            type="radio"
            name="category-filter"
            class="form-check__input"
            :value="item.value"
            :checked="item.value === value"
            @change="onChange"
          />
          <label class="form-check__label">{{ item.title }}</label>
        </div>
      </template>
    </app-list>
  </div>
</template>

<script>
  import { AppList } from "@/components/base-components/";
  import { getCategories } from "@/utils/data.js";

  export default {
    name: "CategoryFilter",
    components: { AppList },
    model: {
      prop: "value",
      event: "change",
    },
    props: {
      value: {
        type: String,
        required: true,
      },
    },
    categories: getCategories(),
    methods: {
      onChange({ target: { value } }) {
        this.$emit("change", value);
      },
    },
  };
</script>

<style></style>
