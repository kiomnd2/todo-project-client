<template>
  <div id="app">
    <div>
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
