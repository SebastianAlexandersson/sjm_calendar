<template>
  <nav>
    <router-link
      to="/"
      :class="{'active-tab': isCalendarActive}"
    >
      <span>Calendar</span>
    </router-link>
    <router-link
      to="/Todos"
      :class="{'active-tab': isTodosActive}"
    >
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
  }

  nav a {
    display: inline-block;
    width: 50%;
    text-align: center;
    padding: .5rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgb(19, 19, 146);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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


</style>
