<script setup lang="ts">
const props = defineProps<{
  notes: Note[];
}>();
</script>

<template>
  <section class="noteList">
    <Note
      v-for="note in props.notes"
      :title="note.title"
      :content="note.content"
      :id="note.id"
    />
  </section>
</template>
