<script setup>
import AppAlert from "./components/AppAlert.vue";
function handleClose() {
  console.log("closed");
}
</script>

<template>
  <div class="p-5">
    <AppAlert type="info">New software update available.</AppAlert>
    <AppAlert type="success">Your purchase has been confirmed!</AppAlert>
    <AppAlert type="warning">Warning: Invalid email address!</AppAlert>
    <AppAlert type="error" @closed="handleClose"
      >Error! Task failed successfully.</AppAlert
    >
  </div>
</template>

<style scoped></style>
