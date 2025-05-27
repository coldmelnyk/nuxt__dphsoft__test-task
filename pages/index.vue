<script setup lang="ts">
const notesHook = useNotes();
const open = reactive({
  value: false,
});

const handleAddModal = () => {
  open.value = true;
}
</script>

<template>
  <UApp>
    <section class="p-5 min-h-[100dvh] flex flex-col gap-3">
      <header class="flex justify-between">
        <h1 class="text-3xl font-bold">Note list:</h1>

        <UButton @click="handleAddModal" class="cursor-pointer">Add new note</UButton>
      </header>

      <NoteList :notes="notesHook.notes.value" />

      <AddModal :openProps="open" />
    </section>
  </UApp>
</template>
