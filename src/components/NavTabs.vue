<template>
  <nav>
    <router-link to="/" :class="{'active-tab': isCalendarActive}">
      <span>Calendar</span>
    </router-link>
    <router-link to="/Todos" :class="{'active-tab': isTodosActive}">
      <span>Todos</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-tabs',
  computed: {
    isCalendarActive() {
      return this.$route.path === '/';
    },
    isTodosActive() {
      return this.$route.path === '/Todos';
    },
  },
};
</script>

<style>
nav {
  width: 95%;
  margin: auto;
  z-index: 10;
  position: relative;
}

nav a {
  display: inline-block;
  width: 50%;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(19, 19, 146);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 6;
}

nav > a,
nav > a:visited {
  color: lightblue;
}

.active-tab {
  background-color: var(--blue);
}

nav > a.active-tab,
nav > a.active-tab:visited {
  color: #fff;
}

@media (max-width: 374px) {
  nav a {
    margin-top: 1rem;
    font-size: 0.5rem;
  }
}

@media (min-width: 375px) and (max-width: 424px) {
  nav a {
    font-size: 0.6rem;
  }
}

@media (max-width: 330px) {
  nav {
    width: 80%;
  }
}

@media (min-width: 331px) and (max-width: 500px) {
  nav {
    width: 85%;
  }
}

@media (min-width: 425px) and (max-width: 767px) {
  nav a {
    font-size: 0.75rem;
  }
}

@media (min-width: 501px) and (max-width: 1024px) {
  nav {
    width: 90%;
  }
}
</style>
