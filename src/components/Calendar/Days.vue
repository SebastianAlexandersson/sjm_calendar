<template>
  <div class='days'>
    <div
      class='day fade'
      v-for='prevDay in getNumPrevMonthFillerDays'
      :key='`${prevDay}prevday`'
    >
      <span>{{ prevDay + prevMonthFillerStartDate }}</span>
      <span>{{ displayDayName(
                prevDay + prevMonthFillerStartDate,
                prevMonthNum,
                prevMonthYear
              )
            }}
      </span>
    </div>
    <div
      class='day'
      v-for='day in displayedMonth.ndays'
      :key='day'
      v-bind:class='{ highlight: highlightToday(day, monthNumTwoDigits) }'
      :id='`${year}-${monthNumTwoDigits}-${getTwoDigitDay(day)}`'
    >
      <span>{{ day }}</span>
      <span>{{ displayDayName(day, monthNumTwoDigits, year) }}</span>
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
    year() {
      return this.state.currentYear;
    },
    months() {
      return this.state.months;
    },
    currentDay() {
      return this.state.currentDay;
    },
    currentMonth() {
      return this.state.currentMonth;
    },
    index() {
      return this.state.MonthIndex;
    },
    displayedMonth() {
      return this.months[this.index];
    },
    monthNum() {
      return this.index + 1;
    },
    monthNumTwoDigits() {
      return this.monthNum < 10 ? `0${this.monthNum}` : this.monthNum;
    },
    whatDayIsTheFirst() {
      const format = `${this.year}${this.monthNumTwoDigits}01`;

      return this.state.moment(format, 'YYYYMMDD').format('dddd');
    },
    getNumPrevMonthFillerDays() {
      return this.state.days[this.whatDayIsTheFirst];
    },
    prevMonthNumDays() {
      return this.months[Number(this.prevMonthNum - 1)].ndays;
    },
    prevMonthYear() {
      return this.index < 1 ? (Number(this.year) - 1).toString() : this.year;
    },
    prevMonthNum() {
      const index = this.index < 1 ? 12 : this.index;
      const prevIndex = index < 10 ? `0${index}` : index.toString();
      return prevIndex;
    },
    prevMonthFillerStartDate() {
      return this.prevMonthNumDays - this.getNumPrevMonthFillerDays;
    },
  },
  methods: {
    displayDayName(day, month, year) {
      const dayFormat = this.getTwoDigitDay(day);
      const format = year + month + dayFormat;

      return this.state.moment(format, 'YYYYMMDD').format('dddd');
    },
    highlightToday(day, month) {
      return (
        Number(day) === Number(this.currentDay)
        && Number(month) === Number(this.currentMonth)
      );
    },
    getTwoDigitDay(day) {
      return day < 10 ? `0${day}` : day;
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
