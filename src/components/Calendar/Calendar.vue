<template>
  <section>
    <div class='calendar'>
      <Month />
      <Days />
    </div>
  </section>
</template>

<script>
import Month from './Month';
import Days from './Days';

export default {
  name: 'calendar',
  components: {
    Month,
    Days
  },
  computed: {
    state() {
      return this.$store.state.calendar;
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('getEvents');
  }
};
</script>

<style>
.calendar {
  color: #fff;
  margin-top: 2rem;
}
</style>