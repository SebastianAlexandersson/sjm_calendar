<template>
  <section>
    <div class='calendar'>
      <Month />
      <div class="days-and-weeks">
        <Weeks />
        <Days />
      </div>
    </div>
  </section>
</template>

<script>
import Month from './Month.vue';
import Days from './Days.vue';
import Weeks from './Weeks.vue';

export default {
  name: 'calendar',
  components: {
    Month,
    Days,
    Weeks,
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
  color: #fff;
  margin-top: 2rem;
}

.days-and-weeks {
  display: flex;
}
</style>
