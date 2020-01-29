<template>
  <form class="mt-6" @submit="submit">
    <div>
      <label for="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Please input"
        pattern="^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$"
        minlength="8"
        title="May only contain alphanumeric characters and underscores or hyphens as internal separators"
        required
        v-model="username"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Please input"
        minlength="8"
        title="Must contain at least one number"
        pattern=".*[0-9].*"
        required
        v-model="password"
      />
    </div>
    <div class="w-24 h-24" :class="statusClass">{{ message }}</div>
    <input
      type="submit"
      value="Login"
      :disabled="!isSubmitEnabled"
      class="disabled:opacity-25 bg-green-400"
    />
  </form>
</template>

<script lang="ts">
import { createComponent, ref, computed } from "@vue/composition-api";
import { validate, submit as post } from "../../api";

enum Status {
  Fail,
  Neutral,
  Success
}

export default createComponent({
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    const message = ref("");
    const status = ref(Status.Neutral);

    const isSubmitEnabled = computed(() => {
      const minLength = 8;
      return (
        username.value.length >= minLength && password.value.length >= minLength
      );
    });

    async function submit(evt: Event) {
      evt.preventDefault();
      try {
        await validate(username.value);
        const res = await post({
          username: username.value,
          password: password.value
        });
        message.value = "Success!";
        status.value = Status.Success;
      } catch (err) {
        message.value = err;
        status.value = Status.Fail;
      }
    }

    const statusClass = computed(() => {
      switch (status.value) {
        case Status.Success:
          return "bg-green-500";
        case Status.Fail:
          return "bg-red-500";
        default:
          return "bg-white";
      }
    });

    return {
      username,
      password,
      submit,
      message,
      statusClass,
      isSubmitEnabled
    };
  }
});
</script>
