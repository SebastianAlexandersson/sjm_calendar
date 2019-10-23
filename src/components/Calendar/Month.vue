<template>
  <div class='month'>
    <div class="monthselector">
      <span @click='displayPreviousMonth' class='arrow'>&#171;</span>
      <span>{{ displayedMonth.month }} {{ year }}</span>
      <span @click='displayNextMonth' class='arrow'>&#187;</span>
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

@media (max-width: 374px) {
  .month {
    padding: .5rem !important;
    font-size: .75rem !important;
  }

  .button {
    font-size: .5rem !important;
    padding: .25rem;
  }
}

@media (max-width: 767px) {
  .month {
    font-size: 1rem;
    padding: 1rem;
  }

  .button {
    padding: .25rem .5rem;
    border-radius: 5px;
    font-size: .75rem;
  }

  .monthselector {
    width: 75%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .month {
    font-size: 1.5rem;
  }

  .button {
    padding: .5rem 1rem;
    border-radius: 5px;
  }
}
</style>
