<template>
  <option value></option>
</template>

<script>
export default {
  name: 'EventTimeOption',
  props: {
    value: String,
    time: String
  },
  created() {
    this.$store.dispatch('getEvents');
  },
  computed: {
    getEvents() {
      return this.$store.state.events.events;
    }
  }
};
</script>

<style>
</style>