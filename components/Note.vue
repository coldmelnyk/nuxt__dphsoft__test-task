<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>

<template>
  <article
    class="flex flex-col gap-2 p-4 rounded-3xl border-blue-400 border min-h-30 max-h-50 max-w-100 justify-center items-center"
  >
    <h1 class="font-bold text-2xl">{{ title }}</h1>
    <p>{{ content }}</p>
  </article>
</template>
