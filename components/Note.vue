<script setup lang="ts">
const props = defineProps<{
  id: string;
  title: string;
  content: string;
}>();

const route = useRoute();
const queryNote = route.query.note ? route.query.note.toString() : "";
const open = ref(false);

const handleClick = () => {
  navigateTo({
    query: {
      note: `${props.id}`,
    },
  });
  open.value = true;
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
</script>

<template>
  <article @click="handleClick" class="noteArticle">
    <h1 class="font-bold text-2xl">{{ props.title }}</h1>
    <p>{{ props.content }}</p>

    <UModal v-model:open="open" :title="props.title">
      <template #description>
        {{ props.content }}
      </template>
    </UModal>
  </article>
</template>
