<script setup lang="ts">
const notesHook = useNotes();
const route = useRoute();

const handleModal = (event) => {
  if (event.target.id !== "modal") {
    navigateTo({
      query: {},
    });
  }
};
</script>

<template>
  <div @click="handleModal" class="p-5 min-h-[100dvh] flex flex-col gap-3">
    <h1 class="text-3xl font-bold">Note list:</h1>

    <NoteList :notes="notesHook.notes.value" />

    <div
      class="block p-5 border rounded-3xl border-amber-700 text-center"
      id="modal"
      v-if="route.query.note"
    >
      {{ route.query.note }}
    </div>
  </div>
</template>
