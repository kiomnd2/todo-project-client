<template>
  <div id="app">
    <div>
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./view/components/AppHeader";

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      // counter : 0
    };
  },
};
</script>

<style></style>
