<template>
  <div class="weeks">
    <div class="week" v-for="week in get.numWeeks" :key="`${week}week`">
      <span>{{ week + weekFormat > 52 ? 1 : week + weekFormat }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weeks',
  computed: {
    get() {
      return this.$store.getters;
    },
    weekFormat() {
      return Number(this.get.getFirstWeek) - 1;
    },
  },
};
</script>

<style>
.weeks {
  display: grid;
  grid-gap: 0.5rem;
}

.week {
  font-size: 1rem;
  padding: 2em 3em;
  background-color: #fff;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
}

.week:nth-last-child() {
  margin-bottom: 0;
}

@media (max-width: 374px) {
  .week {
    padding: .75rem !important;
  }
}

@media (max-width: 425px) {
  .weeks {
    grid-gap: .25rem;
    margin-right: -.25rem;
  }
}

@media (max-width: 767px) {
  .week {
    font-size: .75rem;
    padding: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .week {
      font-size: 1rem;
      padding: 2rem;
    }
}


</style>
