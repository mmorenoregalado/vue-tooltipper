import type { Directive, DirectiveBinding } from "vue";
import { destroyTooltipInstance, initTooltip } from "./TooltipInstance";

const VTooltip: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    initTooltip(el, binding.value);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    initTooltip(el, binding.value);
  },
  unmounted() {
    destroyTooltipInstance();
  },
};

export default VTooltip;
