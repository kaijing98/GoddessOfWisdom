<template >
  <div></div>
</template>
<script>
import * as blockstack from 'blockstack';
export default {
  data: () => ({}),
  computed: {},
  created() {
    blockstack.redirectToSignIn();
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
div {
  color: blue;
}
</style>