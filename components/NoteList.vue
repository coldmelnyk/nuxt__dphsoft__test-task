<script setup lang="ts">
import type { Note } from '~/types/Note';

const props = defineProps<{
  notes: Note[];
}>();
</script>

<template>
  <section class="noteList">
    <Note
      v-for="note in props.notes"
      :key="note.id"
      :title="note.title"
      :content="note.content"
      :id="note.id"
    />
  </section>
</template>
