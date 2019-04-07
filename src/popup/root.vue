<template>
  <div>
    <el-table>
      <el-table-column prop="itemWebUrl" label="Web Url"></el-table-column>
    </el-table>
    <el-button @click="tab">Losted</el-button>
    <el-button @click="test">Losted2</el-button>
  </div>
</template>
<script>
import {getItems} from '../backend/api.js';
export default {
  data: () => ({}),
  computed: {
    itemData() {
      return this.$store.getters.getItemData;
    },
  },
  created() {},
  mounted() {},
  methods: {
    async tab() {},
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