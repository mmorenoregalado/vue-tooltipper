import type {
  TooltipperOptions,
  TooltipInstance,
  TooltipperInstance,
} from "./types";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default class Tooltipper implements TooltipperInstance {
  tippyInstance: TooltipInstance | null = null;

  constructor(el: Element, content: string, options: TooltipperOptions = {}) {
    this.tippyInstance = tippy(el, {
      content: content,
      ...options,
    });
  }

  destroyTooltip(): void {
    this.tippyInstance?.destroy();
  }
}
