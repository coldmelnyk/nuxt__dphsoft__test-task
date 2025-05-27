<script setup lang="ts">
const props = defineProps<{
  id: string;
  title: string;
  content: string;
}>();

const route = useRoute();
const queryNote = route.query.note ? route.query.note.toString() : "";
const open = ref(false);
const editMode = ref(false);

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

onMounted(() => {
  if (queryNote === props.id) {
    open.value = true;
  }
});

watch(open, (value) => {
  if (value === false) {
    navigateTo({
      query: {},
    });
  }
});

watch(editMode, (value) => {
  console.log(value);
});
</script>

<template>
  <article @click="handleClick" class="noteArticle">
    <h1 class="font-bold text-2xl">{{ props.title }}</h1>
    <p>{{ props.content }}</p>

    <UModal
      v-model:open="open"
      class="p-4"
      :title="props.title"
      :description="props.id"
    >
      <template #content>
        <header class="flex flex-row justify-between">
          <h2>{{ props.title }}</h2>

          <div class="flex gap-3">
            <template v-if="!editMode">
              <UButton @click="handleEditMode">Edit</UButton>
              <UButton @click="handleModalClose" color="error">X</UButton>
            </template>

            <template v-else>
              <UButton color="error" @click="handleEditMode">Cancel</UButton>
              <UButton color="warning">Save</UButton>
            </template>
          </div>
        </header>
        {{ props.content }}
      </template>
    </UModal>
  </article>
</template>
