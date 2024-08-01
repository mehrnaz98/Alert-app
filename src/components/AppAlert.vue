<script setup>
import { computed, ref } from "vue";
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

const icon = computed(() => {
  return {
    info: IconInfo,
    success: IconSuccess,
    warning: IconWarning,
    error: IconError,
  }[props.type];
});

const closed = ref(false);
function close() {
  close.value = true;
}
</script>

<template>
  <div role="alert" :class="`alert ${alertType}`">
    <component :is="icon"></component>
    <span><slot></slot></span>
    <button @click="close">✖</button>
  </div>
</template>

<style scoped></style>
