<template>
  <div>
    <h1>{{summer.text}}</h1>
  </div>
</template>

<script>
const { text, icon } = seasonConfig;
export default {
  name: "SeasonView",
  data() {
    return {
      seasonConfig: {
        summer: {
          text: "Let's go to the beach",
          icon: "🌞"
        },
        winter: {
          text: "Burrrr it's cold, but I love it!!",
          icon: "❄️"
        }
      }
    };
  },
  props: {
    lat: String
  },
  created() {},
  methods: {
    getSeason(lat, month) {
      if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
      } else {
        return lat > 0 ? "winter" : "summer";
      }
    }
  }
};
</script>

<style>
</style>