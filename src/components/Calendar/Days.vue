<template>
  <div class='days'>
    <PrevMonthDay
      v-for='prevDay in get.prevMonthFillerDays'
      :key='`${prevDay}prevday`'
      v-bind:prevDay="prevDay"
    />
    <Day
      v-for='day in get.displayedMonth.ndays'
      :key='day'
      v-bind:day="day"
      v-bind:highlightToday="highlightToday"
      v-bind:dayHasMeeting="dayHasMeeting"
    />
  </div>
</template>

<script>
import PrevMonthDay from './PrevMonthDay.vue';
import Day from './Day.vue';

export default {
  name: 'days',
  components: {
    PrevMonthDay,
    Day,
  },
  computed: {
    state() {
      return this.$store.state.calendar;
    },
    get() {
      return this.$store.getters;
    },
    meetings() {
      return this.$store.state.events.events
        .filter(event => event.type === 'Meeting');
    },
  },
  methods: {
    highlightToday(day, month) {
      return (
        Number(day) === Number(this.state.currentDay)
        && Number(month) === Number(this.state.currentMonth)
      );
    },
    dayHasMeeting(year, month, day) {
      const formatDate = `${year}-${month}-${day}`;
      return (this.meetings.filter(meeting => meeting.start === formatDate) || []).length > 0;
    },
  },
};
</script>

<style>
  .days {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    grid-template-rows: minmax(10px, 1fr);
    grid-gap: 0.5rem;
    max-width: 100%;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 2rem;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .15s;
  }

  .day span:last-of-type {
    font-size: 1rem;
    margin-top: 1rem;
  }

  .day:hover {
    transform: scale(1.05);
  }

  .highlight {
    
  }

  .hasMeeting {
    position: absolute;
    top: 0;
    left: 0;
  }

  .meeting {
    background-color: var(--blue);
    color: #fff;
    padding: .2rem .5rem;
    font-size: .7rem;
    display: block;
    margin-bottom: .2rem;
  }

  .fade {
    opacity: .5;
  }

  @media (max-width: 374px) {
    .day span:last-of-type {
      font-size: .5rem;
    }
  }

  @media (max-width: 425px) {
    .days {
      grid-gap: .25rem;
    }
  }

  @media (max-width: 767px) {
    .day {
      padding: 1rem;
    }

    .day span:last-of-type {
      margin: 0;
      font-size: .75rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .day {
      font-size: 1rem;
    }

    .day span:last-of-type {
      margin: 0;
    }
  }
</style>
