<script setup lang="ts">
const notesHook = useNotes();
</script>

<template>
  <UApp>
    <div class="p-5 min-h-[100dvh] flex flex-col gap-3">
      <header class="flex justify-between">
        <h1 class="text-3xl font-bold">Note list:</h1>

        <UButton class="cursor-pointer">Add new note</UButton>
      </header>

      <NoteList :notes="notesHook.notes.value" />
    </div>
  </UApp>
</template>
