import { o as get_current_component, c as create_ssr_component, a as compute_rest_props, b as add_attribute, v as validate_component, j as escape, h as compute_slots, d as spread, e as escape_object, f as escape_attribute_value, k as subscribe, l as each, p as add_styles, g as createEventDispatcher$1, q as onDestroy } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { s as settings, p as progress, c as catalog, v as volumeStats, b as volumes, d as volumeSettings } from "../../../../chunks/misc.js";
import "panzoom";
import { w as writable } from "../../../../chunks/index.js";
import { d as clamp, c as afterNavigate, e as beforeNavigate, M as Modal, U as UserSettingsSolid, S as Settings, g as fireExstaticEvent, R as Range } from "../../../../chunks/Settings.js";
import "@zip.js/zip.js";
import "../../../../chunks/db.js";
import { I as Input } from "../../../../chunks/Input.js";
import * as dom from "@floating-ui/dom";
import { twJoin, twMerge } from "tailwind-merge";
import { F as Frame, B as Button } from "../../../../chunks/Listgroup.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n != null ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  let middleware;
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  placement && (referenceEl = referenceEl);
  {
    dispatch("show", referenceEl, open);
  }
  middleware = [
    dom.flip(),
    dom.shift(),
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-r", $$props.border && arrowSide === "top" && "border-t border-l ", $$props.border && arrowSide === "right" && "border-t border-r ", $$props.border && arrowSide === "left" && "border-b border-l ");
  return `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${open && referenceEl ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
    }
  })}` : ``} `;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render(
    $$result,
    Object.assign({}, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, {
      class: "dark:!border-gray-600 " + $$props.class
    }),
    {},
    {
      default: () => {
        return `${$$slots.title || title ? `<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : ` <h3 class="font-semibold text-gray-900 dark:text-white">${escape(title)}</h3> `}</div>` : ``} <div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} `;
});
const ChervonDoubleLeftSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "chervon double left solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 12 10" }
    ],
    {}
  )}><g fill="currentColor"><path d="M4.995 10a1 1 0 0 1-.707-.293L.292 5.712a.999.999 0 0 1 0-1.412L4.288.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.999.999 0 0 1 4.995 10Z"></path><path d="M10.989 10a1 1 0 0 1-.707-.293L6.286 5.712a.999.999 0 0 1 0-1.412L10.282.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.998.998 0 0 1 10.989 10Z"></path></g></svg> `;
});
const ChervonDoubleRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "chervon double right solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 12 10" }
    ],
    {}
  )}><g fill="currentColor"><path d="M7.005 10A1 1 0 0 1 6.3 8.295l3.29-3.289L6.3 1.717A.999.999 0 1 1 7.712.305L11.707 4.3a.999.999 0 0 1 0 1.412L7.712 9.707a1 1 0 0 1-.707.293Z"></path><path d="M1.011 10a1 1 0 0 1-.706-1.705l3.29-3.289-3.29-3.289A.999.999 0 1 1 1.718.305L5.714 4.3a.999.999 0 0 1 0 1.412L1.718 9.707A1 1 0 0 1 1.01 10Z"></path></g></svg> `;
});
const ChevronLeftSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "chevron left solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 6 10" }
    ],
    {}
  )}><path fill="currentColor" d="M4.99 10a.998.998 0 0 1-.706-.293L.292 5.712a1 1 0 0 1 0-1.412L4.284.305a.998.998 0 1 1 1.411 1.412L2.41 5.007l3.286 3.288A.999.999 0 0 1 4.99 10Z"></path></svg> `;
});
const ChevronRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "chevron right solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 6 10" }
    ],
    {}
  )}><path fill="currentColor" d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z"></path></svg> `;
});
const panzoomStore = writable(void 0);
const Panzoom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const cropperStore = writable(void 0);
const textToUpdate = writable("オレを押して!");
const translatedText = writable("Tap text to translate");
const TextBoxes_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".textBox.svelte-j4ovul.svelte-j4ovul{color:black;padding:0;position:absolute;line-height:1.1em;font-size:16pt;white-space:nowrap;border:1px solid rgba(0, 0, 0, 0);z-index:11}.textBox.svelte-j4ovul p.svelte-j4ovul{display:none;white-space:nowrap;letter-spacing:0.1em;line-height:1.1em;margin:0;background-color:rgb(255, 255, 255);font-weight:var(--bold);z-index:11}",
  map: null
};
const TextBoxes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textBoxes;
  let fontWeight;
  let display;
  let border;
  let contenteditable;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let { page: page2 } = $$props;
  let { src } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$1);
  textBoxes = page2.blocks.map((block) => {
    const { img_height, img_width } = page2;
    const { box, font_size, lines, vertical } = block;
    let [_xmin, _ymin, _xmax, _ymax] = box;
    const xmin = clamp(_xmin, 0, img_width);
    const ymin = clamp(_ymin, 0, img_height);
    const xmax = clamp(_xmax, 0, img_width);
    const ymax = clamp(_ymax, 0, img_height);
    const width = xmax - xmin;
    const height = ymax - ymin;
    const area = width * height;
    const textBox = {
      left: `${xmin}px`,
      top: `${ymin}px`,
      width: `${width}px`,
      height: `${height}px`,
      fontSize: $settings.fontSize === "auto" ? `${font_size}px` : `${$settings.fontSize}pt`,
      writingMode: vertical ? "vertical-rl" : "horizontal-tb",
      lines,
      area
    };
    return textBox;
  }).sort(({ area: a }, { area: b }) => {
    return b - a;
  });
  fontWeight = $settings.boldFont ? "bold" : "400";
  display = $settings.displayOCR ? "block" : "none";
  border = $settings.textBoxBorders ? "1px solid red" : "none";
  contenteditable = $settings.textEditable;
  $settings.ankiConnectSettings.triggerMethod || "both";
  $$unsubscribe_settings();
  return `${each(textBoxes, ({ fontSize, height, left, lines, top, width, writingMode }, index) => {
    return `<div class="textBox svelte-j4ovul" role="none"${add_attribute("contenteditable", contenteditable, 0)}${add_styles({
      width,
      height,
      left,
      top,
      "font-size": fontSize,
      "font-weight": fontWeight,
      display,
      border,
      "writing-mode": writingMode
    })}>${each(lines, (line) => {
      return `<p class="svelte-j4ovul">${escape(line)}</p>`;
    })} </div>`;
  })}`;
});
const MangaPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let { page: page2 } = $$props;
  let { src } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  url = src ? `url(${URL.createObjectURL(src)})` : "";
  return `<div draggable="false" class="relative"${add_styles({
    "width": `${page2.img_width}px`,
    "height": `${page2.img_height}px`,
    "background-image": url
  })}>${validate_component(TextBoxes, "TextBoxes").$$render($$result, { page: page2, src }, {}, {})}</div>`;
});
function restrictPosition(position, imageSize, cropSize, zoom) {
  return {
    x: restrictPositionCoord(position.x, imageSize.width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, imageSize.height, cropSize.height, zoom)
  };
}
function restrictPositionCoord(position, imageSize, cropSize, zoom) {
  const maxPosition = imageSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}
function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
const Cropper_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-12kodkg{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;user-select:none;touch-action:none;cursor:move}.image.svelte-12kodkg{max-width:100%;max-height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;will-change:transform}.cropperArea.svelte-12kodkg{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);box-shadow:0 0 0 9999em;box-sizing:border-box;color:rgba(0, 0, 0, 0.5);border:1px solid rgba(255, 255, 255, 0.5);overflow:hidden}.grid.svelte-12kodkg:before{content:' ';box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.5);position:absolute;top:0;bottom:0;left:33.33%;right:33.33%;border-top:0;border-bottom:0}.grid.svelte-12kodkg:after{content:' ';box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.5);position:absolute;top:33.33%;bottom:33.33%;left:0;right:0;border-left:0;border-right:0}.round.svelte-12kodkg{border-radius:50%}",
  map: null
};
const Cropper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { crop = { x: 0, y: 0 } } = $$props;
  let { zoom = 1 } = $$props;
  let { aspect = 4 / 3 } = $$props;
  let { minZoom = 1 } = $$props;
  let { maxZoom = 3 } = $$props;
  let { cropSize = null } = $$props;
  let { cropShape = "rect" } = $$props;
  let { showGrid = true } = $$props;
  let { zoomSpeed = 1 } = $$props;
  let { crossOrigin = null } = $$props;
  let { restrictPosition: restrictPosition$1 = true } = $$props;
  let cropperSize = null;
  let imageSize = {
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0
  };
  let containerEl = null;
  let imgEl = null;
  let dragStartPosition = { x: 0, y: 0 };
  let dragStartCrop = { x: 0, y: 0 };
  let rafDragTimeout = null;
  let rafZoomTimeout = null;
  createEventDispatcher$1();
  onDestroy(() => {
    cleanEvents();
  });
  const cleanEvents = () => {
    if (typeof document !== "undefined") {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onDragStopped);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onDragStopped);
    }
  };
  const getMousePoint = (e) => ({
    x: Number(e.clientX),
    y: Number(e.clientY)
  });
  const getTouchPoint = (touch) => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY)
  });
  const onMouseMove = (e) => onDrag(getMousePoint(e));
  const onTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      onPinchMove(e);
    } else if (e.touches.length === 1) {
      onDrag(getTouchPoint(e.touches[0]));
    }
  };
  const onDrag = ({ x, y }) => {
    if (rafDragTimeout)
      window.cancelAnimationFrame(rafDragTimeout);
    rafDragTimeout = window.requestAnimationFrame(() => {
      if (x === void 0 || y === void 0 || !cropperSize)
        return;
      const offsetX = x - dragStartPosition.x;
      const offsetY = y - dragStartPosition.y;
      const requestedPosition = {
        x: dragStartCrop.x + offsetX,
        y: dragStartCrop.y + offsetY
      };
      crop = restrictPosition$1 ? restrictPosition(requestedPosition, imageSize, cropperSize, zoom) : requestedPosition;
    });
  };
  const onDragStopped = () => {
    cleanEvents();
  };
  const onPinchMove = (e) => {
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    const center = getCenter(pointA, pointB);
    onDrag(center);
    if (rafZoomTimeout)
      window.cancelAnimationFrame(rafZoomTimeout);
    rafZoomTimeout = window.requestAnimationFrame(() => {
      getDistanceBetweenPoints(pointA, pointB);
    });
  };
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.crop === void 0 && $$bindings.crop && crop !== void 0)
    $$bindings.crop(crop);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.aspect === void 0 && $$bindings.aspect && aspect !== void 0)
    $$bindings.aspect(aspect);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.maxZoom === void 0 && $$bindings.maxZoom && maxZoom !== void 0)
    $$bindings.maxZoom(maxZoom);
  if ($$props.cropSize === void 0 && $$bindings.cropSize && cropSize !== void 0)
    $$bindings.cropSize(cropSize);
  if ($$props.cropShape === void 0 && $$bindings.cropShape && cropShape !== void 0)
    $$bindings.cropShape(cropShape);
  if ($$props.showGrid === void 0 && $$bindings.showGrid && showGrid !== void 0)
    $$bindings.showGrid(showGrid);
  if ($$props.zoomSpeed === void 0 && $$bindings.zoomSpeed && zoomSpeed !== void 0)
    $$bindings.zoomSpeed(zoomSpeed);
  if ($$props.crossOrigin === void 0 && $$bindings.crossOrigin && crossOrigin !== void 0)
    $$bindings.crossOrigin(crossOrigin);
  if ($$props.restrictPosition === void 0 && $$bindings.restrictPosition && restrictPosition$1 !== void 0)
    $$bindings.restrictPosition(restrictPosition$1);
  $$result.css.add(css);
  return ` <div class="container svelte-12kodkg" data-testid="container"${add_attribute("this", containerEl, 0)}><img class="image svelte-12kodkg"${add_attribute("src", image, 0)} alt="" style="${"transform: translate(" + escape(crop.x, true) + "px, " + escape(crop.y, true) + "px) scale(" + escape(zoom, true) + ");"}"${add_attribute("crossorigin", crossOrigin, 0)}${add_attribute("this", imgEl, 0)}> ${``} </div>`;
});
const Cropper_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cropperStore, $$unsubscribe_cropperStore;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_cropperStore = subscribe(cropperStore, (value) => $cropperStore = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let open = false;
  let loading = false;
  afterNavigate(() => {
    close();
  });
  beforeNavigate((nav) => {
    if (open) {
      nav.cancel();
      close();
    }
  });
  function close() {
    loading = false;
    cropperStore.set({ open: false });
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "Crop image", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$cropperStore?.image && !loading ? `<div class="flex flex-col gap-2"><div class="relative w-full h-[55svh] sm:h-[65svh]">${validate_component(Cropper, "Cropper").$$render(
            $$result,
            {
              zoomSpeed: 0.5,
              maxZoom: 10,
              image: $cropperStore?.image
            },
            {},
            {}
          )}</div> ${$settings.ankiConnectSettings.grabSentence && $cropperStore?.sentence ? `<p><b data-svelte-h="svelte-1rospi9">Sentence:</b> ${escape($cropperStore?.sentence)}</p>` : ``} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Crop`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "light" }, {}, {
            default: () => {
              return `Close`;
            }
          })}</div>` : `<div class="text-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_cropperStore();
  $$unsubscribe_settings();
  return $$rendered;
});
const SettingsButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settingsHidden = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<button class="hover:text-primary-700 hover:mix-blend-normal mix-blend-difference z-10 fixed opacity-50 hover:opacity-100 right-10 bottom-5 p-10 m-[-2.5rem]">${validate_component(UserSettingsSolid, "UserSettingsSolid").$$render($$result, {}, {}, {})}</button> ${validate_component(Settings, "Settings").$$render(
      $$result,
      { hidden: settingsHidden },
      {
        hidden: ($$value) => {
          settingsHidden = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
/**
 * @license BSD-3-Clause
 * Copyright (c) 2023, ッツ Reader Authors
 * All rights reserved.
 */
function countChars(line) {
  const isNotJapaneseRegex = /[^0-9A-Z○◯々-〇〻ぁ-ゖゝ-ゞァ-ヺー０-９Ａ-Ｚｦ-ﾝ\p{Radical}\p{Unified_Ideograph}]+/gimu;
  const cleaned = line.replace(isNotJapaneseRegex, "");
  return Array.from(cleaned).length;
}
function getCharCount(pages, currentPage) {
  let charCount = 0;
  let lineCount = 0;
  if (pages && pages.length > 0) {
    const max = currentPage || pages.length;
    for (let i = 0; i < max; i++) {
      const blocks = pages[i].blocks;
      blocks.forEach((block) => {
        lineCount += block.lines.length;
        block.lines.forEach((line) => {
          charCount += countChars(line);
        });
      });
    }
  }
  return { charCount, lineCount };
}
const Reader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let volume;
  let pages;
  let page$1;
  let index;
  let showSecondPage;
  let manualPage;
  let pageDisplay;
  let charDisplay;
  let charCount;
  let maxCharCount;
  let totalLineCount;
  let $settings, $$unsubscribe_settings;
  let $$unsubscribe_panzoomStore;
  let $textToUpdate, $$unsubscribe_textToUpdate;
  let $progress, $$unsubscribe_progress;
  let $pageStore, $$unsubscribe_pageStore;
  let $catalog, $$unsubscribe_catalog;
  let $translatedText, $$unsubscribe_translatedText;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_panzoomStore = subscribe(panzoomStore, (value) => value);
  $$unsubscribe_textToUpdate = subscribe(textToUpdate, (value) => $textToUpdate = value);
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  $$unsubscribe_pageStore = subscribe(page, (value) => $pageStore = value);
  $$unsubscribe_catalog = subscribe(catalog, (value) => $catalog = value);
  $$unsubscribe_translatedText = subscribe(translatedText, (value) => $translatedText = value);
  let { volumeSettings: volumeSettings2 } = $$props;
  beforeNavigate(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    if (volume) {
      const { charCount: charCount2, lineCount } = getCharCount(pages, page$1);
      fireExstaticEvent("mokuro-reader:reader.closed", {
        title: volume.mokuroData.title,
        volumeName: volume.mokuroData.volume,
        currentCharCount: charCount2,
        currentPage: page$1,
        totalPages: pages.length,
        totalCharCount: maxCharCount || 0,
        currentLineCount: lineCount,
        totalLineCount
      });
    }
  });
  if ($$props.volumeSettings === void 0 && $$bindings.volumeSettings && volumeSettings2 !== void 0)
    $$bindings.volumeSettings(volumeSettings2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    volume = $catalog?.find((item) => item.id === $pageStore.params.manga)?.manga.find((item) => item.mokuroData.volume_uuid === $pageStore.params.volume);
    pages = volume?.mokuroData.pages || [];
    page$1 = $progress?.[volume?.mokuroData.volume_uuid || 0] || 1;
    index = page$1 - 1;
    volumeSettings2.singlePageView || volumeSettings2.hasCover && !volumeSettings2.singlePageView && index === 0 ? 1 : 2;
    showSecondPage = () => {
      if (!pages) {
        return false;
      }
      if (volumeSettings2.singlePageView || index + 1 >= pages.length) {
        return false;
      }
      if (index === 0 && volumeSettings2.hasCover) {
        return false;
      }
      return true;
    };
    manualPage = page$1;
    pageDisplay = showSecondPage() ? `${page$1},${page$1 + 1} / ${pages?.length}` : `${page$1} / ${pages?.length}`;
    charCount = $settings.charCount ? getCharCount(pages, page$1).charCount : 0;
    maxCharCount = getCharCount(pages).charCount;
    charDisplay = `${charCount} / ${maxCharCount}`;
    totalLineCount = getCharCount(pages).lineCount;
    {
      {
        if (volume) {
          const { charCount: charCount2, lineCount } = getCharCount(pages, page$1);
          fireExstaticEvent("mokuro-reader:page.change", {
            title: volume.mokuroData.title,
            volumeName: volume.mokuroData.volume,
            currentCharCount: charCount2,
            currentPage: page$1,
            totalPages: pages.length,
            totalCharCount: maxCharCount || 0,
            currentLineCount: lineCount,
            totalLineCount
          });
        }
      }
    }
    $$rendered = ` ${$$result.head += `<!-- HEAD_svelte-qf9lhz_START -->${$$result.title = `<title>${escape(volume?.mokuroData.volume || "Volume")}</title>`, ""}<!-- HEAD_svelte-qf9lhz_END -->`, ""} ${volume && pages ? ` ${validate_component(SettingsButton, "SettingsButton").$$render($$result, {}, {}, {})}   <div class="absolute top-0 left-0 w-full text-center z-30"><div class="p-1 bg-green-500 cursor-pointer">${escape($translatedText)}</div> <div class="p-1 bg-blue-500 cursor-pointer">${escape($textToUpdate)}</div></div> ${validate_component(Cropper_1, "Cropper").$$render($$result, {}, {}, {})} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        placement: "bottom",
        trigger: "click",
        triggeredBy: "#page-num",
        class: "z-10 w-full max-w-xs"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col gap-3"><div class="flex flex-row items-center gap-5 z-10">${validate_component(ChervonDoubleLeftSolid, "ChervonDoubleLeftSolid").$$render(
            $$result,
            {
              class: "hover:text-primary-600",
              size: "sm"
            },
            {},
            {}
          )} ${validate_component(ChevronLeftSolid, "ChevronLeftSolid").$$render(
            $$result,
            {
              class: "hover:text-primary-600",
              size: "sm"
            },
            {},
            {}
          )} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "number",
              size: "sm",
              value: manualPage
            },
            {
              value: ($$value) => {
                manualPage = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render(
            $$result,
            {
              class: "hover:text-primary-600",
              size: "sm"
            },
            {},
            {}
          )} ${validate_component(ChervonDoubleRightSolid, "ChervonDoubleRightSolid").$$render(
            $$result,
            {
              class: "hover:text-primary-600",
              size: "sm"
            },
            {},
            {}
          )}</div> <div${add_styles({
            "direction": volumeSettings2.rightToLeft ? "rtl" : "ltr"
          })}>${validate_component(Range, "Range").$$render(
            $$result,
            {
              min: 1,
              max: pages.length,
              defaultClass: "",
              value: manualPage
            },
            {
              value: ($$value) => {
                manualPage = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div>`;
        }
      }
    )}  <button class="absolute opacity-50 left-5 bottom-5 z-10 mix-blend-difference" id="page-num"><p class="${["text-left", !$settings.charCount ? "hidden" : ""].join(" ").trim()}">${escape(charDisplay)}</p> <p class="${["text-left", !$settings.pageNum ? "hidden" : ""].join(" ").trim()}">${escape(pageDisplay)}</p></button> <div class="flex"${add_styles({
      "background-color": $settings.backgroundColor
    })}>${validate_component(Panzoom, "Panzoom").$$render($$result, {}, {}, {
      default: () => {
        return `<button class="h-full fixed -left-full z-10 w-full hover:bg-slate-400 opacity-[0.01]"${add_styles({
          "margin-left": `${$settings.edgeButtonWidth}px`
        })}></button> <button class="h-full fixed -right-full z-10 w-full hover:bg-slate-400 opacity-[0.01]"${add_styles({
          "margin-right": `${$settings.edgeButtonWidth}px`
        })}></button> <button class="h-screen fixed top-full -left-full z-10 w-[150%] hover:bg-slate-400 opacity-[0.01]"></button> <button class="h-screen fixed top-full -right-full z-10 w-[150%] hover:bg-slate-400 opacity-[0.01]"></button> <div class="${["flex flex-row", !volumeSettings2.rightToLeft ? "flex-row-reverse" : ""].join(" ").trim()}" role="none" id="manga-panel"${add_styles({
          "filter": `invert(${$settings.invertColors ? 1 : 0})`
        })}>${showSecondPage() ? `${validate_component(MangaPage, "MangaPage").$$render(
          $$result,
          {
            page: pages[index + 1],
            src: Object.values(volume?.files)[index + 1]
          },
          {},
          {}
        )}` : ``} ${validate_component(MangaPage, "MangaPage").$$render(
          $$result,
          {
            page: pages[index],
            src: Object.values(volume?.files)[index]
          },
          {},
          {}
        )}</div>`;
      }
    })}</div> ${!$settings.mobile ? `<button class="left-0 top-0 absolute h-full w-16 hover:bg-slate-400 opacity-[0.01]"${add_styles({
      "width": `${$settings.edgeButtonWidth}px`
    })}></button> <button class="right-0 top-0 absolute h-full w-16 hover:bg-slate-400 opacity-[0.01]"${add_styles({
      "width": `${$settings.edgeButtonWidth}px`
    })}></button>` : ``}` : `<div class="fixed z-50 left-1/2 top-1/2">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_settings();
  $$unsubscribe_panzoomStore();
  $$unsubscribe_textToUpdate();
  $$unsubscribe_progress();
  $$unsubscribe_pageStore();
  $$unsubscribe_catalog();
  $$unsubscribe_translatedText();
  return $$rendered;
});
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let $volumeStats, $$unsubscribe_volumeStats;
  $$unsubscribe_volumeStats = subscribe(volumeStats, (value) => $volumeStats = value);
  let { count } = $$props;
  let { volumeId } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.volumeId === void 0 && $$bindings.volumeId && volumeId !== void 0)
    $$bindings.volumeId(volumeId);
  active = Boolean(count);
  $$unsubscribe_volumeStats();
  return `<button class="${[
    "mix-blend-difference z-10 fixed opacity-50 right-20 top-5 p-10 m-[-2.5rem]",
    !active ? "text-primary-700" : ""
  ].join(" ").trim()}"><p>${escape(active ? "Active" : "Paused")} | Minutes read: ${escape($volumeStats?.timeReadInMinutes)}</p></button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_volumes;
  let $page, $$unsubscribe_page;
  let $volumeSettings, $$unsubscribe_volumeSettings;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_volumes = subscribe(volumes, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_volumeSettings = subscribe(volumeSettings, (value) => $volumeSettings = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  const volumeId = $page.params.volume;
  let count = void 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$volumeSettings[volumeId] ? `${$settings.showTimer ? `${validate_component(Timer, "Timer").$$render(
      $$result,
      { volumeId, count },
      {
        count: ($$value) => {
          count = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(Reader, "Reader").$$render(
      $$result,
      {
        volumeSettings: $volumeSettings[volumeId]
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_volumes();
  $$unsubscribe_page();
  $$unsubscribe_volumeSettings();
  $$unsubscribe_settings();
  return $$rendered;
});
export {
  Page as default
};
