<template>
  <section>
    <div class='calendar'>
      <Month />
      <DaysAndWeeks />
    </div>
  </section>
</template>

<script>
import Month from './Month.vue';
import DaysAndWeeks from './DaysAndWeeks.vue';

export default {
  name: 'calendar',
  components: {
    Month,
    DaysAndWeeks,
  },
  computed: {
    state() {
      return this.$store.state.calendar;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch('getEvents');
  },
};
</script>

<style>
  .calendar {
    color: #000;
    margin-top: 2rem;
    font-weight: bold;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #000;
  }
</style>
