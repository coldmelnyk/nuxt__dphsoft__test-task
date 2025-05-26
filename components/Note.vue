<script setup lang="ts">
const props = defineProps<{
  id: string;
  title: string;
  content: string;
}>();

const handleClick = (event) => {
  navigateTo({
    query: {
      note: `${props.id}`,
    },
  });
};
</script>

<template>
  <article @click="handleClick" class="noteArticle">
    <h1 class="font-bold text-2xl">{{ props.title }}</h1>
    <p>{{ props.content }}</p>
  </article>
</template>
