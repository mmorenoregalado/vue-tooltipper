# vue-tooltipper

A Vue3 plugin that makes it a easy to create tooltips for your projects. This plugin is simply a wrapper for the
[Tippy.js](https://atomiks.github.io/tippyjs/) library.

## Getting Started

To install in your project use next.

```sh
npm install vue-tooltipper
```

Then you must configure in your main.ts or main.js file of your project and place the following

```javascript
import {createTooltipPlugin} from "vue-tooltipper";
import "vue-tooltipper/styles.css";

createApp(App).use(createTooltipPlugin()).mount('#app')
```

Tippy.js is a very complete library and you will be able to make use of all its options, just by passing to the
createTooltipPlugin()function the options you want to add; for example, by default the option to show the arrow of
the tooltip is disabled, so to activate it you only need to change that option to ```arrow=true```.

```javascript
createApp(App).use(createTooltipPlugin({arrow: true})).mount('#app')
```

The same is for any other option. Here you have a link to the [Tippy.js](https://atomiks.github.io/tippyjs/) library
with the supported options which
you can
add to your plugin configuration.

With this you will be able to place the ToolTip component anywhere your project needs it, without the need to
register it, and the way to do it is as follows.

```html

<div class="card">
    <button type="button" @click="count++">count is {{ count }}
        <ToolTip text="Tooltipper"/>
    </button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
    </p>
</div>
```

You can pass the text to be displayed by the ToolTip component with the ```text``` property
