<template>
  <article>
    <router-link
        :to='`/day-view/${state.currentYear}-${get.displayedMonthNum}-${state.addZero(day)}`'
      >
    <div
      class='day day-pos'
      :id='`${state.currentYear}${get.displayedMonthNum}${state.addZero(day)}`'
    >
      <div
        class="hasMeeting"
        v-if="dayHasMeeting(state.currentYear, get.displayedMonthNum, state.addZero(day))
        && !get.smallViewPort"
      >
        <div class="meeting" v-for="meeting in meetings" :key="meeting.id">
          {{ meeting.startTime }}
        </div>
      </div>
      <div
        class="hasMeeting meeting-small"
        v-if="dayHasMeeting(state.currentYear, get.displayedMonthNum, state.addZero(day))
        && get.smallViewPort"></div>
      <span v-bind:class='{ highlight: highlightToday(day, get.displayedMonthNum) }'>
        {{ day }}
      </span>
      <span>
        {{ getNameOfDay(state.currentYear, get.displayedMonthNum, day) }}
      </span>
    </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'day',
  computed: {
    get() {
      return this.$store.getters;
    },
    state() {
      return this.$store.state.calendar;
    },
    meetings() {
      return this.$store.state.events.events
        .filter(event => event.type === 'Meeting');
    },
  },
  props: ['day', 'highlightToday', 'dayHasMeeting'],
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
  .highlight::before {
    content: "";
    width: 100%;
    border: solid 1px var(--blue);
    position: absolute;
    bottom: -.3rem;
  }
</style>
