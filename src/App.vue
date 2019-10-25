<template>
  <div id='app'>
    <main :class="{ 'wrapper': isCalendar, 'main-page': !isCalendar}">
      <NavTabs v-if="isCalendar" />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavTabs from './components/NavTabs.vue';

export default {
  components: {
    NavTabs,
  },
  computed: {
    isCalendar() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style>
/* 1rem = 10px */
:root {
  --font-secondary: 'Source Sans Pro', sans-serif;
  --dark-primary: #2a2c2b;
  --dark-secondary: #000000;
  --blue: rgb(50, 99, 198);
  --blue-light: #53e3a6;
  --white: #fff;
  --danger: #dc3522;
  --XXL: 5rem;
  --XL: 4rem;
  --L: 3.3rem;
  --M: 2rem;
  --S: 1.5rem;
  --xs: 1rem;
}

*::before,
*::after,
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro&display=swap');
}

body {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Open Sans', sans-serif;
  color: var(--dark-primary);
  display: flex;
  flex-direction: column;
  line-height: 1;
  background-color: rgb(231, 231, 231);
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  flex-grow: 1 auto;
}
.main-page {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
}

.wrapper {
  width: 100vw;
  max-width: 100vw;
  margin-top: 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 576px) {
  .main-page {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .main-page {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .main-page {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .main-page {
    max-width: 1140px;
  }
}

input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type='search'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0.5rem;
}
</style>
