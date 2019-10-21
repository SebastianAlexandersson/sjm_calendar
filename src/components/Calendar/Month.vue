<template>
  <div class='month'>
    <span @click='displayPreviousMonth' class='arrow'>&#171;</span>
    <span>{{ displayedMonth.month }} {{ year }}</span>
    <span @click='displayNextMonth' class='arrow'>&#187;</span>
  </div>
</template>

<script>
export default {
  name: 'month',
  computed: {
    year() {
      return this.$store.state.calendar.currentYear;
    },
    displayedMonth() {
      return this.$store.getters.displayedMonth;
    },
  },
  methods: {
    displayNextMonth() {
      this.$store.commit('nextMonth');
    },
    displayPreviousMonth() {
      this.$store.commit('previousMonth');
    },
  },
};
</script>

<style>
.month {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 2rem;
  margin-bottom: 0.5rem;
  background-color: var(--blue);
  font-weight: bold;
}

.month span {
  margin: 0 1rem;
}

.arrow {
  font-weight: bold;
  cursor: pointer;
}
</style>
