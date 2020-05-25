<template>
  <div id="app">
    <div>
      {{ getCounter }}
      <button @click="addCounter">+</button>
      <button @click="subCounter">-</button>
      <button @click="addTen">10</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      // counter : 0
    };
  },
  computed: mapGetters(['getCounter']),
  methods: {
    ...mapMutations(['addCounter', 'subCounter']),
    addTen() {
      this.$store.commit('addCounter', { value: 10 });
    },
  },
};
</script>

<style></style>
