<template>
  <div>
    <el-button @click="signIn">Sign in with blockstack</el-button>
  </div>
</template>

<script>
import * as blockstack from 'blockstack';
export default {
  created() {
    if (blockstack.isUserSignedIn()) {
      window.close();
    }
  },
  methods: {
    signIn() {
      chrome.runtime.sendMessage({
        type: 'text',
      });
      chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
          console.log(tab.id);
          chrome.tabs.sendMessage(tab.id, {redirect: true}, function(response) {
            // alert(response);
          });
        });
      });
    },
  },
};
</script>

<style>
</style>
