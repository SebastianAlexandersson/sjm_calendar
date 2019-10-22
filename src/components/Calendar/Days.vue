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
      <div
        class="hasMeeting"
        v-if="dayHasMeeting(state.currentYear, get.displayedMonthNum, state.addZero(day))"
      >
        <div class="meeting" v-for="meeting in meetings" :key="meeting.id">
          {{ meeting.startTime }}
        </div>
      </div>
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
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.5rem;
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
  border: 2px solid rgb(59, 59, 59);
}

.fade {
  opacity: .5;
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
  font-size: .8rem;
  display: block;
  margin-bottom: .2rem;
}
</style>
