<template>
  <div>
    <!-- <img src="https://media1.tenor.com/images/6698f88ce716d840ee7834867e0e5ee5/tenor.gif"> -->
    <!-- <img src="https://media.giphy.com/media/HyDfNCZlTn5iU/giphy.gif"> -->
    <el-card v-for="item in itemData" :key="item.itemId">
      <span>{{item.title}}</span>
      <img
        :src="item.image.imageUrl"
        class="image"
        @click="tab(item.itemWebUrl)"
        width="200"
        height="250"
      >
    </el-card>
  </div>
</template>
<script>
import {getItems} from '../backend/api.js';
import store from './store.js';
export default {
  data: () => ({}),
  computed: {
    itemData() {
      return this.$store.getters.getItemData;
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