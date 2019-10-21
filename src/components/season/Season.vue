<template>
  <div class="hello">
    Your Location:
    <br />
    Latitude: {{ lat }}
    <br />
    Longitude: {{ lan }}
  </div>
</template>

<script>
export default {
  name: "Season",
  data() {
    return {
      lat: 0,
      lan: 0
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    showPosition(position) {
      this.lat = position.coords.latitude;
      this.lan = position.coords.longitude;
    }
  }
};
</script>
