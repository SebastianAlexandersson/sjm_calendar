<template>
  <div class="days-and-weeks">
    <Weeks />
    <Days />
  </div>
</template>

<script>
import Days from './Days.vue';
import Weeks from './Weeks.vue';

export default {
  name: 'days-and-weeks',
  components: {
    Days,
    Weeks,
  },
};
</script>

<style>
  .days-and-weeks {
    display: flex;
    max-width: 100%;
  }
</style>
