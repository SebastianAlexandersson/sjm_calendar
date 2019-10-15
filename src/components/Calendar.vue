<template>
  <section>
    <div class="calendar" v-for="(month, index) in this.$store.state.calendar.months" :key="index">
      <div class="month">
        {{ $store.state.currentMonth}}
        <span>&#8592;</span>
        <span>{{ month.month }}</span>
        <span>&#8594;</span>
      </div>
      <div class="days">
        <div class="day" v-for="n in month.ndays" :key="n">{{ n }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "calendar",
}
</script>

<style>
  .calendar {
    
  }

  .month {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }

  .month span {
    margin: 0 1rem;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 2rem;
  }
</style>