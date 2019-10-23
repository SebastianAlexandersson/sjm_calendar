<template>
  <transition v-bind:name="name">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'slide-transition',
  props: ['name'],
};
</script>

<style>
  .slide-previous-enter {
    transform: translateX(-100%);
  }

  .slide-previous-enter-active {
    transition: all ease-in-out .4s;
  }

  .slide-previous-leave-to {
    transform: translateX(0%);
    position: absolute;
  }

  .slide-previous-leave-active {
    transform: translateX(100%);
    transition: all ease-in-out .4s;
  }

  .slide-next-enter {
    transform: translateX(100%);
  }

  .slide-next-enter-active {
    transition: all ease-in-out .4s;
  }

  .slide-next-leave-to {
    transform: translateX(0%);
    position: absolute;
  }

  .slide-next-leave-active {
    transform: translateX(-100%);
    transition: all ease-in-out .4s;
  }
</style>
