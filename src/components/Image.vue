<script setup lang="ts">
defineProps<{ flavor_name: string; url: string; btn_class: string }>();
</script>

<template>
  <a :class="btn_class" role="button" :href="url">{{ flavor_name }}</a>
</template>

<style scoped></style>
