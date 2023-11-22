

<script setup lang="ts">
const appConfig = useAppConfig()
// const { data } = await useFetch('/api/test')
interface ApiResponse {
  body: {
    message: string;
  }
}
async function submit() {
  const { body } = await $fetch<ApiResponse>('/api/test', {
    method: 'post',
    body: { test: 123 }
  })
  console.log(body)
}

// const result = data.value?.message


</script>
<template>
  <div>
    <v-btn @click="submit">테스트 호출</v-btn>
    <!-- {{ result }} -->
  </div>
</template>
<style scoped></style>