<script setup>
import { computed } from "vue";
import IconInfo from "./icons/IconInfo.vue";
import IconSuccess from "./icons/IconSuccess.vue";
import IconWarning from "./icons/IconWarning.vue";
import IconError from "./icons/IconError.vue";
const props = defineProps({
  type: { type: String, default: "info" },
});

const alertType = computed(() => {
  return {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
  }[props.type];
});
</script>

<template>
  <div role="alert" :class="`alert ${alertType}`">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-6 w-6 shrink-0 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <span>New software update available.</span>
  </div>
</template>

<style scoped></style>
