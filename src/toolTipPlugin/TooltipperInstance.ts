import type {
  PluginOptions,
  TooltipInstance,
  TooltipperInstance,
} from "./types";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default class Tooltipper implements TooltipperInstance {
  tippyInstance: TooltipInstance | null = null;

  constructor(el: Element, content: string, options: PluginOptions = {}) {
    if (this.tippyInstance) this.tippyInstance?.destroy();
    this.tippyInstance = tippy(el, {
      content: content,
      ...options,
    });
  }

  destroyTooltip(): void {
    this.tippyInstance?.destroy();
  }
}
