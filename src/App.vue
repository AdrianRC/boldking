<template>
  <div id="app">
    <Login />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "@/components/Login.vue";

export default Vue.extend({
  name: "app",
  components: {
    Login
  }
});
</script>
