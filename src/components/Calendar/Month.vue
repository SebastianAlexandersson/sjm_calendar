<template>
  <div class='month'>
    <div class="monthselector">
      <button @click='displayPreviousMonth' class='arrow'>&#171;</button>
      <span>{{ displayedMonth.month }} {{ year }}</span>
      <button @click='displayNextMonth' class='arrow'>&#187;</button>
    </div>
    <button
      class="button"
      @click="resetToToday"
    >
      Today
    </button>
  </div>
</template>

<script>
export default {
  name: 'month',
  computed: {
    year() {
      return this.$store.state.calendar.currentYear;
    },
    displayedMonth() {
      return this.$store.getters.displayedMonth;
    },
  },
  methods: {
    displayNextMonth() {
      this.$store.commit('setNextTransition');
      this.$store.commit('nextMonth');
    },
    displayPreviousMonth() {
      this.$store.commit('setPrevTransition');
      this.$store.commit('previousMonth');
    },
    resetToToday() {
      this.$store.commit('resetToToday');
    },
  },
};
</script>

<style>
.month {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 2rem;
  margin-bottom: 0.5rem;
  background-color: var(--blue);
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
}

.month span {
  margin: 0 1rem;
}

.arrow {
  font-weight: bold;
  cursor: pointer;
  background-color: var(--blue);
  border: none;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  padding: 0;
}

.arrow:hover {
  transform: scale(1.1);
}

.button {
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
}

.button:hover {
  transform: scale(1.05);
}

.monthselector {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

@media (max-width: 424px) {
  .month {
    font-size: 1rem !important;
    padding: 1rem .5rem !important;
  }

  .arrow {
    font-size: 1rem !important;
  }

  button.arrow {
    margin: 0;
  }
}

@media (max-width: 500px) {
  .button {
    font-size: .5rem;
    padding: .5rem 1rem;
    border-radius: 5px;
  }
}

@media (max-width: 650px) {
  .monthselector {
    width: 75%;
  }

  .month {
    padding: 1rem;
    font-size: 1.3rem;
  }

  .arrow {
    font-size: 1.3rem;
  }

  .button {
    padding: .5rem 1rem;
    border-radius: 5px;
  }
}

@media (min-width: 651px) and (max-width: 767px) {
  .month,
  .arrow {
    font-size: 1.5rem;
  }

  .button {
    padding: .5rem 1rem;
    border-radius: 5px;
  }
}

</style>
