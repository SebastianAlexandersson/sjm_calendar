<template>
  <article>
    <router-link
        :to='
        `/day-view/${get.prevMonthYear}-` +
        `${get.prevMonthNum}-` +
        `${state.addZero(prevDay + get.prevMonthFillerStartDate)}`'
      >
    <div
      class='day fade day-pos'
    >
      <span>{{ prevDay + get.prevMonthFillerStartDate }}</span>
      <span>
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
  },
  props: ['prevDay'],
};
</script>

<style>

</style>
