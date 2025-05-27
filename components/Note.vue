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
  if (!value) {
    navigateTo({
      query: {},
    });

    setTimeout(() => {
      editMode.value = false;
    }, 200);
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
      class="p-4 gap-3"
      :title="props.title"
      :description="props.id"
    >
      <template #content>
        <template v-if="!editMode">
          <header class="flex flex-row justify-between py-3">
            <h2 class="flex justify-center items-center">{{ props.title }}</h2>

            <div class="flex gap-3">
              <UButton focus="false" @click="handleEditMode">
                Edit
              </UButton>

              <UButton @click="handleModalClose" color="error">
                X
              </UButton>
            </div>
          </header>

          <main class="py-3">
            {{ props.content }}
          </main>
        </template>

        <template v-else>
          <header class="flex flex-row justify-between py-3">
            <h2 class="flex justify-center items-center">
              Title: {{ props.title }}
            </h2>

            <div class="flex gap-3">
              <UButton focus="false" color="error" @click="handleEditMode">
                Cancel
              </UButton>

              <UButton color="warning">
                Save
              </UButton>
            </div>
          </header>

          <main class="py-3">Content: {{ props.content }}</main>
        </template>
      </template>
    </UModal>
  </article>
</template>
