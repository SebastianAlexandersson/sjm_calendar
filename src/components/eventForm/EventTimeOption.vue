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
      // times: [
      //   { hour: 0, min: 0 },
      //   { hour: 01, min: 0 },
      //   { hour: 02, min: 0 },
      //   { hour: 03, min: 0 },
      //   { hour: 04, min: 0 },
      //   { hour: 05, min: 0 },
      //   { hour: 06, min: 0 },
      //   { hour: 07, min: 0 },
      //   { hour: 08, min: 0 },
      //   { hour: 09, min: 0 },
      //   { hour: 10, min: 0 },
      //   { hour: 12, min: 0 },
      //   { hour: 13, min: 0 },
      //   { hour: 14, min: 0 },
      //   { hour: 15, min: 0 },
      //   { hour: 17, min: 0 },
      //   { hour: 18, min: 0 },
      //   { hour: 19, min: 0 },
      //   { hour: 20, min: 0 },
      //   { hour: 21, min: 0 },
      //   { hour: 22, min: 0 },
      //   { hour: 23, min: 0 },
      //   { hour: 24, min: 0 }
      // ],
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