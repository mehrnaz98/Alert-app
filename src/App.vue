<script setup>
import AppAlert from "./components/AppAlert.vue";
</script>

<template>
  <div class="p-5">
    <AppAlert type="info"></AppAlert>
    <AppAlert type="success"></AppAlert>
    <AppAlert type="warning"></AppAlert>
    <AppAlert type="error"></AppAlert>
  </div>
</template>

<style scoped></style>
