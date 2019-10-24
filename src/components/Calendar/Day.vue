<template>
  <article>
    <router-link
        :to='`/day-view/${state.currentYear}-${get.displayedMonthNum}-${state.addZero(day)}`'
      >
    <div
      class='day'
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
      <span>{{ day }}</span>
      <span>
        {{
          state.getNameOfDay(
            state.currentYear,
            get.displayedMonthNum,
            state.addZero(day)
          )
        }}
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
};
</script>

<style>
  .smallScreenDay {
    padding: .5rem;
  }
</style>
