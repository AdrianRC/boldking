<template>
  <div id="app" class="flex flex-col content-center mt-4 font-sans">
    <h1 class="text-3xl font-semibold text-center uppercase">Boldking</h1>
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
