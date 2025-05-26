<script setup lang="ts">
defineProps<{
  notes: Note[];
}>();
</script>

<template>
  <section class="grid grid-cols-4 gap-2">
    <Note v-for="note in notes" :title="note.title" :content="note.content" />
  </section>
</template>
