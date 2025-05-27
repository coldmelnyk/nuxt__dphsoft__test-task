<script setup lang="ts">
import type { Note } from "~/types/Note";
import { NoteActions } from "~/enums/NoteActions";

const props = defineProps<{
  openProps: { value: boolean };
}>();

const notesHook = useNotes();

const newNote: Note = reactive({
  id: "adsfadfasfsafsa",
  title: "",
  content: "",
});

const handleAddSubmit = (event: Event) => {
  event.preventDefault();

  const parsedNewNote = toRaw(newNote);
  const isNewNoteExist = parsedNewNote.title && parsedNewNote.content;

  if (isNewNoteExist) {
    notesHook.setNote(NoteActions.ADD, { ...parsedNewNote });
    props.openProps.value = false;
  }
};

const handleCancel = () => {
  props.openProps.value = false;
};

watch(props.openProps, (openProps) => {
  if (!openProps.value) {
    setTimeout(() => {
      newNote.title = "";
      newNote.content = "";
    }, 200);
  }
});
</script>

<template>
  <UModal
    class="p-4 gap-3"
    v-model:open="props.openProps.value"
    title="New note modal window"
    :description="newNote.id"
  >
    <template #content>
      <form @submit="handleAddSubmit">
        <header class="flex flex-row justify-between py-3">
          <h2 class="flex justify-center items-center gap-2">
            Title:
            <UInput v-model="newNote.title" placeholder="Enter new title" />
          </h2>
        </header>

        <main class="py-3 flex gap-2 items-center">
          Content:
          <UTextarea v-model="newNote.content" class="w-[100%]" autoresize />
        </main>

        <footer class="flex justify-between w-[100%]">
          <UButton @click="handleCancel" class="cursor-pointer" color="error">
            Cancel
          </UButton>

          <UButton type="submit" class="cursor-pointer" color="primary">
            Save
          </UButton>
        </footer>
      </form>
    </template>
  </UModal>
</template>
