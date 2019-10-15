<template>
  <div class="meetingList">
    <h1>Meetings</h1>
    <div v-for="meeting in this.$store.state.events.events" :key="meeting.id">
      <h3 class>{{meeting.text}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingList"
};
</script>

<style scoped>
.meetingList {
  padding: 3rem;
}
</style>>