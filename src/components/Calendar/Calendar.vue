<template>
  <section>
    <div
      class='calendar'>
      <Month />
      <SlideTransition v-bind:name="prevOrNext">
        <DaysAndWeeks :key="displayedMonth" />
      </SlideTransition>
    </div>
  </section>
</template>

<script>
import Month from './Month.vue';
import DaysAndWeeks from './DaysAndWeeks.vue';
import SlideTransition from '../Transitions/SlideTransition.vue';

export default {
  name: 'calendar',
  components: {
    Month,
    DaysAndWeeks,
    SlideTransition,
  },
  computed: {
    state() {
      return this.$store.state.calendar;
    },
    displayedMonth() {
      return this.state.MonthIndex;
    },
    prevOrNext() {
      return this.state.prevOrNext;
    },
    smallScreen() {
      return this.$store.state.calendar.windowWidth < 1024;
    },
  },
  created() {
    this.$store.dispatch('getEvents');
    setInterval(() => {
      this.$store.commit('setWindowWidth');
    }, 2000);
  },
};
</script>

<style>
  .calendar {
    color: #000;
    font-weight: bold;
    padding: .1rem;
    position: relative;
    overflow: hidden;
    margin-top: -2px;
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 1024px;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #000;
  }

  nav {
    max-width: 990px;
  }

  @media (max-width: 374px) {
    nav a {
      margin-top: 1rem;
      font-size: 0.5rem;
    }
  }

  @media (min-width: 375px) and (max-width: 424px) {
    nav a {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 330px) {
    nav {
      width: 80%;
    }
  }

  @media (min-width: 331px) and (max-width: 500px) {
    nav {
      width: 85%;
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    nav a {
      font-size: 0.75rem;
    }
  }
</style>
