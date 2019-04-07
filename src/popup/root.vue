<template>
  <div>
    <el-table data="itemData">
      <el-table-column prop="itemWebUrl" label="Web Url"></el-table-column>
    </el-table>
    <el-button @click="tab">Losted</el-button>
    <el-button @click="test">Losted2</el-button>
  </div>
</template>
<script>
import {getItems} from '../backend/api.js';
import store from './store.js';
export default {
  data: () => ({}),
  computed: {
    itemData() {
      console.log(this.$store.getters.getItemData);
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
    async tab() {},
    async test() {
      // console.log(chrome.runtime);

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