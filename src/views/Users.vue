<template>
 <div class="card">
  <h1>Пользователи</h1>

  <p style="color: red" v-if="error">{{ error }}</p>

  <Suspense v-else>
   <template #default>
    <UserList />
   </template>
   <template #fallback>
    <p>Loading</p>
   </template>
  </Suspense>
 </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from "vue";
import UserList from "../components/UserList.vue";
export default defineComponent({
 components: { UserList },
 setup() {
  const error = ref<null | unknown>(null);

  onErrorCaptured((e) => {
   error.value = e;
   return true;
  });

  return {
   error,
  };
 },
});
</script>
