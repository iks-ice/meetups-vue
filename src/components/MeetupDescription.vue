<template>
  <p class="meetup-description">{{ meetup.description }}</p>
</template>

<script>
  export default {
    props: {
      meetup: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style></style>
