<script setup>
import AppAlert from "./components/AppAlert.vue";
function handleClose() {
  console.log("closed");
}
</script>

<template>
  <div class="p-5">
    <AppAlert type="info"></AppAlert>
    <AppAlert type="success"></AppAlert>
    <AppAlert type="warning"></AppAlert>
    <AppAlert type="error @close=handleClose"></AppAlert>
  </div>
</template>

<style scoped></style>
