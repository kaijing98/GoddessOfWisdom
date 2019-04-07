<template>
  <div>
    <el-card v-for="item in itemData" :key="item.itemId">
      <img :src="item.image.imageUrl" class="image" @click="tab(item.itemWebURL)">
      <span>{{item.itemWebURL}}</span>
      <!-- <el-button @click="tab(item.itemWebURL)">Losted</el-button> -->
      <span>{{item}}</span>
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
      console.log(url);
      // window.open(url);
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