import type { App } from "vue";
import { defineAsyncComponent } from "vue";
import { defu } from "defu";
import { hideAll } from "tippy.js";
import type { TooltipperOptions } from "./types";
import VTooltip from "./VTooltip";

export const tooltipOptionsInject = Symbol();

export function createTooltipPlugin(options: TooltipperOptions = {}) {
  return (app: App) => {
    options = defu(options, {
      arrow: true,
    });

    app.config.globalProperties.$hideAllTooltips = hideAll;

    app.provide(tooltipOptionsInject, options);
    app.component(
      "ToolTip",
      defineAsyncComponent(() => import("./ToolTip.vue"))
    );

    app.directive("tooltip", VTooltip);
  };
}
