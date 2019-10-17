<template>
  <section>
    <div class="calendar">
      <div class="month">
        <span @click="displayPreviousMonth" class="arrow">&#171;</span>
        <span>{{ displayedMonth.month }}</span>
        <span @click="displayNextMonth" class="arrow">&#187;</span>
      </div>
      <div class="days">
        <div class="day" v-for="day in displayedMonth.ndays" :key="day">
          <span>{{ day }}</span>
          <span>{{ displayDayName(day, monthNum, year) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "calendar",
  computed: {
    year() {
      return this.$store.state.calendar.currentYear
    },
    months() {
      return this.$store.state.calendar.months
    },
    index() {
      return this.$store.state.calendar.currentMonthIndex
    },
    displayedMonth() {
      return this.months[this.index]
    },
    monthNum() {
      return this.index + 1
    },
    events() {
      return this.$store.state.events.events
    },
  },
  methods: {
    displayNextMonth() {
      this.$store.commit("nextMonth")
    },
    displayPreviousMonth() {
      this.$store.commit("previousMonth")
    },
    displayDayName(day, month, year) {
      if(month < 10) {
        month = "0" + month
      }
      if(day < 10) {
        day = "0" + day
      }
      const format = year + month + day

      return this.$store.state.calendar.moment(format, "YYYYMMDD").format("dddd")
    }
  },
  created() {
    this.$store.dispatch("getEvents")
  }
}
</script>

<style>
  .calendar {
    color: #fff;
    margin-top: 2rem;
  }

  .month {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 2rem;
    margin-bottom: .5rem;
    background-color: var(--blue);
    font-weight: bold; 
  }

  .month span {
    margin: 0 1rem;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: .5rem;
    background-color: #fff;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 2rem;
    background-color: var(--blue)
  }

  .day span:last-of-type {
    font-size: 1rem;
    margin-top: 1rem;
  }

  .arrow {
    font-weight: bold;
    cursor: pointer;
  }
</style>