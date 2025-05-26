<script setup lang="ts">
const notesHook = useNotes();
</script>

<template>
  <div class="p-5 flex flex-col gap-3">
    <h1 class="text-3xl font-bold">Note list:</h1>

    <NoteList :notes="notesHook.notes.value" />
  </div>
</template>
