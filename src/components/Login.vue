<template>
  <form action="">
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" required />
    </div>
    <input type="submit" value="Login" />
  </form>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
export default createComponent({
  name: "Login",
  setup() {}
});
</script>
