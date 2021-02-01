<template>
  <div class="form-group" :class="{ 'form-group_inline': inline }">
    <label class="checkbox">
      <input type="checkbox" :value="value" v-bind="$attrs" v-on="listeners" />
      {{ label }}
      <span></span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "AppCheckbox",
    inheritAttrs: false,
    model: {
      value: "value",
      event: "change",
    },
    props: {
      label: {
        type: String,
        default: "",
      },
      inline: {
        type: Boolean,
        default: false,
      },
      value: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          change: (e) => this.$emit("change", e.target.checked),
        };
      },
    },
  };
</script>

<style></style>
