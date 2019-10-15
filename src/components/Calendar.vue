<template>
  <section>
    <div class="calendar">
      <div class="month">
        <span>&#8592;</span>
        <span>{{ displayedMonth }}</span>
        <span>&#8594;</span>
      </div>
      <div class="days">
        <div class="day"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "calendar",
  computed: {
    state() {
      return this.$store.state.calendar
    },
    displayedMonth() {
      return this.state.months[this.state.months.indexOf(this.state.currentMonth)]
    }
  }
}
</script>

<style>
  .calendar {
  }

  .month {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    padding: 2rem;
    margin-bottom: .5rem;
    background-color: var(--blue)
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
    font-size: 1.5rem;
    padding: 2rem;
    background-color: var(--blue)
  }
</style>