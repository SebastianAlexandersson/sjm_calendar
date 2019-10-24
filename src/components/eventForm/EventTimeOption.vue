<template>
  <!-- <div v-for="time in timeStamps"> -->
  <!-- <p>{{time.name}}</p> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'EventTimeOption',
  data() {
    return {
      timeStamps: [{ name: 'apa', age: 3 }, { name: 'apa', age: 3 }, { name: 'apa', age: 3 }]

      // hour: 0,
      // min: 0,
      // timeStamps: []
    };
  },
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
    },

    values() {
      //
    }
  },
  methods: {
    renderTimes() {
      //
    }
  }
};
</script>

<style>
</style>