<template>
  <div
    class="meetup-cover"
    :style="{ '--bg-url': link ? 'url(' + link + ')' : '' }"
  >
    <h1 class="meetup-cover__title">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "Meetup title",
      },
    },
  };
</script>

<style></style>
