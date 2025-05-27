<script setup lang="ts">
import { NoteActions } from "~/enums/NoteActions";

const props = defineProps<{
  id: string;
  title: string;
  content: string;
}>();

const route = useRoute();
const notesHook = useNotes();
const queryNote = route.query.note ? route.query.note.toString() : "";
const open = ref(false);
const editMode = ref(false);
const editedNote = ref({ ...props });

const handleClick = () => {
  navigateTo({
    query: {
      note: `${props.id}`,
    },
  });
  open.value = true;
};

const handleModalClose = () => {
  open.value = false;
};

const handleEditMode = () => {
  editMode.value = !editMode.value;
};

const handleDeleteNote = () => {
  open.value = false;

  setTimeout(() => {
    notesHook.setNote(NoteActions.DELETE, props);
  }, 270);
};

const handleSaveSubmit = (event: Event) => {
  event.preventDefault();

  const newNote = toRaw(editedNote.value);
  notesHook.setNote(NoteActions.EDIT, newNote);

  open.value = false;
};

onMounted(() => {
  if (queryNote === props.id) {
    open.value = true;
  }
});

watch(open, (value) => {
  if (!value) {
    navigateTo({
      query: {},
    });

    setTimeout(() => {
      editMode.value = false;
    }, 200);
  }
});
</script>

<template>
  <article @click="handleClick" class="noteArticle">
    <h1 class="font-bold text-2xl">{{ props.title }}</h1>
    <p>{{ props.content }}</p>

    <UModal
      v-model:open="open"
      class="p-4 gap-3"
      :title="props.title"
      :description="props.id"
    >
      <template #content>
        <template v-if="!editMode">
          <header class="flex flex-row justify-between py-3">
            <h2 class="flex justify-center items-center">{{ props.title }}</h2>

            <div class="flex gap-3">
              <UButton
                class="cursor-pointer"
                @click="handleModalClose"
                color="warning"
              >
                Cancel
              </UButton>

              <UButton class="cursor-pointer" @click="handleEditMode">
                Edit
              </UButton>
            </div>
          </header>

          <main class="py-3">
            {{ props.content }}
          </main>
        </template>

        <template v-else>
          <form @submit="handleSaveSubmit">
            <header class="flex flex-row justify-between py-3">
              <h2 class="flex justify-center items-center gap-2">
                Title:
                <UInput
                  v-model="editedNote.title"
                  name="newTitle"
                  placeholder="Enter new title"
                />
              </h2>

              <div class="flex gap-3">
                <UButton
                  class="cursor-pointer"
                  color="warning"
                  @click="handleEditMode"
                >
                  Cancel
                </UButton>

                <UButton
                  class="cursor-pointer"
                  color="error"
                  @click="handleDeleteNote"
                >
                  Delete
                </UButton>

                <UButton type="submit" class="cursor-pointer" color="success">
                  Save
                </UButton>
              </div>
            </header>

            <main class="py-3 flex gap-2 items-center">
              Content:
              <UTextarea
                v-model="editedNote.content"
                name="newContent"
                class="w-[100%]"
                autoresize
              />
            </main>
          </form>
        </template>
      </template>
    </UModal>
  </article>
</template>
