<template>
  <div class='days'>
    <div
      class='day fade'
      v-for='prevDay in get.prevMonthFillerDays'
      :key='`${prevDay}prevday`'
    >
      <router-link
        :to='
        `/day-view/${get.prevMonthYear}-` +
        `${get.prevMonthNum}-` +
        `${state.addZero(prevDay + get.prevMonthFillerStartDate)}`
        '
      >
        <span>{{ prevDay + get.prevMonthFillerStartDate }}</span>
      </router-link>
      <span>
        {{ state.getNameOfDay(
            get.prevMonthYear,
            get.prevMonthNum,
            state.addZero(prevDay + get.prevMonthFillerStartDate)
          )
        }}
      </span>
    </div>
    <div
      class='day'
      v-for='day in get.displayedMonth.ndays'
      :key='day'
      v-bind:class='{ highlight: highlightToday(day, get.displayedMonthNum) }'
      :id='`${state.currentYear}${get.displayedMonthNum}${state.addZero(day)}`'
    >
      <router-link
        :to='`/day-view/${state.currentYear}-${get.displayedMonthNum}-${state.addZero(day)}`'
      >
        <span>{{ day }}</span>
      </router-link>
      <span>
        {{ state.getNameOfDay(
            state.currentYear,
            get.displayedMonthNum,
            state.addZero(day)
          )
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'days',
  computed: {
    state() {
      return this.$store.state.calendar;
    },
    get() {
      return this.$store.getters;
    },
  },
  methods: {
    highlightToday(day, month) {
      return (
        Number(day) === Number(this.state.currentDay)
        && Number(month) === Number(this.state.currentMonth)
      );
    },
  },
};
</script>

<style>
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.5rem;
  background-color: #fff;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 2rem;
  background-color: var(--blue);
}

.day span:last-of-type {
  font-size: 1rem;
  margin-top: 1rem;
}

.highlight {
  background-color: #156d64;
}

.fade {
  opacity: .5;
}
</style>
