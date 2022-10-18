import type { HideAll, Instance, Props } from "tippy.js";
import type ToolTip from "./ToolTip.vue";

export type PluginOptions = Partial<Props>;

export type TooltipInstance = Instance;

export * from "./index";

declare module "vue" {
  interface ComponentCustomProperties {
    $hideAllToolTips: HideAll;
  }

  interface GlobalComponents {
    ToolTip: typeof ToolTip;
  }
}
