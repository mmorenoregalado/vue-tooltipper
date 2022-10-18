import type { Directive, DirectiveBinding } from "vue";
import Tooltipper from "./TooltipperInstance";
import type { TooltipperOptions } from "./types";

let tooltipInstance: Tooltipper | null = null;

const VTooltip: Directive = {
  mounted(el, binding: DirectiveBinding) {
    if (tooltipInstance) tooltipInstance.destroyTooltip();
    const options: TooltipperOptions = binding.arg as TooltipperOptions;
    tooltipInstance = new Tooltipper(el, binding.value, options);
  },
  updated(el, binding: DirectiveBinding) {
    if (tooltipInstance) tooltipInstance.destroyTooltip();
    const options: TooltipperOptions = binding.arg as TooltipperOptions;
    tooltipInstance = new Tooltipper(el, binding.value, options);
  },
  unmounted() {
    tooltipInstance?.destroyTooltip();
  },
};

export default VTooltip;
