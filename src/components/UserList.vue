<template>
 <ul class="list">
  <li class="list-item" v-for="user in users" :key="user">
   {{ user.name }}
  </li>
 </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUsers } from "../use/users";
export default defineComponent({
 async setup() {
  const { users } = await useUsers();

  return {
   users,
  };
 },
});
</script>

<style>
</style>