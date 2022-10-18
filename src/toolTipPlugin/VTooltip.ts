import type { Directive, DirectiveBinding } from "vue";
import Tooltipper from "./TooltipperInstance";

let tooltipInstance: Tooltipper | null = null;

const VTooltip: Directive = {
  mounted(el, binding: DirectiveBinding) {
    if (tooltipInstance) tooltipInstance.destroyTooltip();
    tooltipInstance = new Tooltipper(el, binding.value);
  },
  updated(el, binding: DirectiveBinding) {
    if (tooltipInstance) tooltipInstance.destroyTooltip();
    tooltipInstance = new Tooltipper(el, binding.value);
  },
  unmounted() {
    tooltipInstance?.destroyTooltip();
  },
};

export default VTooltip;
