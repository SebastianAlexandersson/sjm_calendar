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
        {{
          getNameOfDay(get.preMonthYear, get.prevMonthNum, prevDay + get.prevMonthFillerStartDate)
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
  methods: {
    getNameOfDay(year, month, day) {
      if (this.get.smallViewPort) {
        return this.state.getNameOfDay(year, month, day).slice(0, 3);
      }
      return this.state.getNameOfDay(year, month, day);
    },
  },
};
</script>

<style>

</style>
