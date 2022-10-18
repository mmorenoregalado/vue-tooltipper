<template>
  <span ref="tooltip"></span>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref, onUnmounted, inject } from "vue";
import { tooltipOptionsInject } from "./";
import Tooltipper from "./TooltipperInstance";
import type { PluginOptions } from "./types";

const props = defineProps({
  text: { type: String, required: true },
  options: {
    type: Object,
    default() {
      return {};
    },
  },
});

const tooltip = ref<Element | null>(null);

const tooltipOptions: PluginOptions = {
  ...inject(tooltipOptionsInject),
  ...props.options,
};

let tooltipInstance: Tooltipper | null = null;

function initTooltip() {
  if (tooltipInstance) tooltipInstance.destroyTooltip();
  tooltipInstance = new Tooltipper(
    tooltip?.value?.parentNode as Element,
    props.text,
    tooltipOptions
  );
}

onMounted(() => initTooltip());
onUpdated(() => initTooltip());
onUnmounted(() => tooltipInstance?.destroyTooltip());
</script>

<style scoped></style>
