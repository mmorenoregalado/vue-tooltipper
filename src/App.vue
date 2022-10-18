<script setup lang="ts">
import { ref } from "vue";

const tooltipText = ref("Hello world");
</script>

<template>
  <h1>Custom Vue.js 3 Plugins</h1>
  <input type="text" v-model="tooltipText" />
  <br />
  <span
    >Hover Over Me
    <ToolTip :text="tooltipText" :options="{ placement: 'bottom' }"
  /></span>
  <br />
  <br />
  <span v-tooltip="tooltipText">Tooltip with Vue Directive</span>
  <br />
  <br />
  <button @click="$hideAllTooltips()">Hide All</button>
</template>
