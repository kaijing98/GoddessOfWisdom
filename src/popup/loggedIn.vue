<template>
  <div>
    <!-- <img src="./logo.jpg" width="450" height="250"> -->
    <div style="margin-bottom: 20px">
      <div style="display: flex; flexDirection: row; margin-right: 30px; margin-bottom: 5px;">
        <img
          src="https://previews.dropbox.com/p/thumb/AAZCtEHs1DGkp9x9dfkrQgl2f4HlL044zlXyz58hQIbr2ton5w78LWRUYNEI_r46sQVpU_xthyiKcLPOOI6cZZw-jBLb_tizPrx7APLUMBgANdEJ9y1gBf1-WSkvp9wpXw7VplusuVHcCwYFU4XsTDyfQQ_oaONY3h2GDrQ0uK3KlTUk-QxRaJkU-10yUdgn8BNn7kHwz96BGCR5v7K-yUk2N12ADwp489WD15VcqW7PxMjPbswIvgCrLy1KK3K_KNW70g978udDhE7VraQL21Wndq2UNfek_ycn8XBFafj7q7U2g-m7Ph698WvzWhbdTRgmCFSmDDaeQ24GJ4Ax1PjL/p.jpeg?size_mode=5"
          width="80"
          height="80"
          style="border-radius: 90px; margin-right: 30px"
        >
        <div style="margin-top: 10px">
          <span style="font-size: 21px; color: rgb(40,40,40); font-weight: bold">Ashleigh Xu</span>
          <span style="font-size: 25px;">Level 10</span>
        </div>
      </div>
      <img src="https://media.giphy.com/media/HyDfNCZlTn5iU/giphy.gif" width="300" height="250">
      <img src="./title.jpg" width="300" height="50">
    </div>
    <el-card v-for="item in itemData" :key="item.itemId">
      <!-- <span>{{item.title}}</span> -->
      <div style="display: flex; justify-content: center;">
        <img
          :src="item.image.imageUrl"
          class="image"
          @click="tab(item.itemWebUrl)"
          width="240"
          height="250"
          style="border-radius: 5px;"
        >
      </div>
      <div style="padding: 14px;">
        <img
          src="./corgi.png"
          v-for="index in Math.floor(Math.random() * (5 - 1 + 1)) + 1"
          :key="index"
          class="image"
          width="25"
          height="35"
        >
      </div>
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
    getRandomNumber() {
      let min = 1;
      let max = 5;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
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