<template>
  <div class="week" :style="{ 'grid-row': week}">
  <span>{{ formatWeek(week) }}</span>
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
    lastWeek() {
      return this.get.getLastWeek;
    },
  },
  props: ['week'],
  methods: {
    formatWeek(week) {
      if (Number(this.get.getLastWeek) === 53) {
        return week + this.weekFormat > 53 ? 1 : week + this.weekFormat;
      }
      if (Number(this.get.getFirstWeek) === 53) {
        return week === 1 ? 53 : week + this.weekFormat - 53;
      }
      if (Number(this.get.getFirstWeek) === 52) {
        return week === 1 ? 52 : week + this.weekFormat - 52;
      }
      return week + this.weekFormat > 52 ? 1 : week + this.weekFormat;
    },
  },
};
</script>

<style>

</style>
