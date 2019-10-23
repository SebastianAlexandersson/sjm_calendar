<template>
  <div class="small-screen-header">
    <div class="small-header">W</div>
    <div class="small-header">Mon</div>
    <div class="small-header">Tue</div>
    <div class="small-header">Wed</div>
    <div class="small-header">Thu</div>
    <div class="small-header">Fri</div>
    <div class="small-header">Sat</div>
    <div class="small-header">Sun</div>
  </div>
</template>

<script>
export default {
  name: 'small-screen-header',
};
</script>

<style>
  .small-screen-header {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin-bottom: .5rem;
    grid-gap: .5rem;
  }

  .small-header {
    font-size: .7rem;
    padding: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
  }

  @media (max-width: 503px) {
    .small-header {
      padding: 1rem .25rem;
      font-size: .5rem;
    }

    .small-screen-header {
      grid-gap: .25rem;
    }
  }
</style>
