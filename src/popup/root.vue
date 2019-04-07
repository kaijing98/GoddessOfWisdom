<template>
  <div>
    <logged-in></logged-in>
    <!-- <log-in></log-in> -->
  </div>
</template>
<script>
import {getItems} from '../backend/api.js';
import store from './store.js';
import LoggedIn from './loggedIn.vue';
import LogIn from './login';

export default {
  data: () => ({}),
  computed: {
    itemData() {
      return this.$store.getters.getItemData;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    chrome.runtime.onMessage.addListener(({productTitle}) => {
      let query = productTitle.trim();
      this.$store.dispatch('retrieveItems', {query: query});
      setTimeout(() => console.log(this.$store.getters.getItemData), 5000);
    });
  },
  mounted() {},
  components: {
    LoggedIn,
    LogIn,
  },
  methods: {
    async tab(url) {
      window.open(url);
    },
    async test() {
      console.log(this.$store.getters.getItemData);
    },
  },
};
</script>
<style lang="scss">
div {
  color: blue;
}
</style>