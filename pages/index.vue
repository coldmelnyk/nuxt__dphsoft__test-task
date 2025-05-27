<script setup lang="ts">
const notesHook = useNotes();
const route = useRoute();

const handleModal = (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (target.id !== "modal") {
    navigateTo({
      query: {},
    });
  }
};
</script>

<template>
  <UApp>
    <div class="p-5 min-h-[100dvh] flex flex-col gap-3">
      <h1 class="text-3xl font-bold">Note list:</h1>

      <NoteList :notes="notesHook.notes.value" />
    </div>
  </UApp>
</template>
