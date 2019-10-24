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

</style>
