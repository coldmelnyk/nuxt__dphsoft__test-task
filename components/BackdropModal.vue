<script setup lang="ts">
const props = defineProps<{
  queryNote: string;
}>();
</script>

<template>
  <div
    class="block p-5 border rounded-3xl border-amber-700 text-center"
    id="modal"
    v-if="props.queryNote"
  >
    {{ props.queryNote }}
  </div>
</template>
