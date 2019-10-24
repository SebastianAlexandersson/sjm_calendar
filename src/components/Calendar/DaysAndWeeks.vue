<template>
  <div class='days-and-weeks'>
    <Weeks
      v-for="week in get.numWeeks"
      :key="`${week}week`"
      v-bind:week="week"
    />
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
import Weeks from './Weeks.vue';

export default {
  name: 'days',
  components: {
    PrevMonthDay,
    Day,
    Weeks,
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
  .days-and-weeks {
    display: grid;
    grid-template-columns: repeat(8, minmax(5px, 1fr));
    grid-gap: 0.5rem;
    max-width: 100%;
  }

  .day,
  .week {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .15s;
    position: relative;
  }

  .day span:last-of-type {
    font-size: 1rem;
    margin-top: 1rem;
  }

  .day span:first-child {
    position: relative;
  }

  .day:hover,
  .week:hover {
    transform: scale(1.05);
  }

  .week {
    font-size: 1rem;
    grid-column: 1;
  }

  .highlight {
    content: "";
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

  .meeting-small {
    background-color: var(--blue);
    width: .4rem;
    height: .4rem;
  }

  .fade {
    opacity: .5;
  }

  @media (max-width: 425px) {
    .day,
    .week {
      border-radius: 5px;
      padding: 1rem !important;
    }

    .day {
      font-size: .6rem;
    }

    .week {
      font-size: .5rem;
    }

    .day span:last-of-type {
      font-size: .4rem !important;
    }
  }

  @media (max-width: 520px) {
    .day,
    .week {
      padding: 1rem !important;
    }

    .day span:last-of-type {
      margin-top: .5rem;
    }

    .days-and-weeks {
      grid-gap: .25rem !important;
    }
  }

  @media (max-width: 650px) {
    .day {
      font-size: .75rem !important;
    }

    .week {
      font-size: .55rem !important;
    }
  }

  @media (max-width: 768px) {
    .day,
    .week {
      padding: 1.5rem;
    }

    .days-and-weeks {
      grid-gap: .35rem;
    }
  }

  @media (max-width: 1024px) {
    .day {
      font-size: 1rem;
    }

    .day span:last-of-type {
      font-size: .75rem;
    }

    .week {
      font-size: .75rem;
    }
  }

</style>
