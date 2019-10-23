<template>
  <article>
    <router-link
        :to='
        `/day-view/${get.prevMonthYear}-` +
        `${get.prevMonthNum}-` +
        `${state.addZero(prevDay + get.prevMonthFillerStartDate)}`'
      >
    <div
      class='day fade'
    >
      <span>{{ prevDay + get.prevMonthFillerStartDate }}</span>
      <span v-if="bigScreen">
        {{ state.getNameOfDay(
            get.prevMonthYear,
            get.prevMonthNum,
            state.addZero(prevDay + get.prevMonthFillerStartDate)
          )
        }}
      </span>
    </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'prev-month-day',
  computed: {
    get() {
      return this.$store.getters;
    },
    state() {
      return this.$store.state.calendar;
    },
    bigScreen() {
      return this.$store.state.calendar.windowWidth >= 1024;
    },
  },
  props: ['prevDay'],
};
</script>

<style>

</style>
