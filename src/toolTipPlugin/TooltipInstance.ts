import type { PluginOptions, TooltipInstance } from "./types";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

let tippyInstance: TooltipInstance | null = null;

export function initTooltip(
  el: HTMLElement,
  content: string,
  options: PluginOptions = {}
) {
  if (tippyInstance) tippyInstance.destroy();
  tippyInstance = tippy(el, {
    content: content,
    ...options,
  });
}

export function destroyTooltipInstance(): void {
  tippyInstance?.destroy();
}
