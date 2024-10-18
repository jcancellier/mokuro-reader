import { c as create_ssr_component, a as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/db.js";
import "@zip.js/zip.js";
import { twMerge } from "tailwind-merge";
import "../../../chunks/misc.js";
const GoogleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "google solid" } = $$props;
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
      { viewBox: "0 0 18 19" }
    ],
    {}
  )}><path fill="currentColor" fill-rule="evenodd" d="M8.842 18.083A8.8 8.8 0 0 1 .193 9.135a8.841 8.841 0 0 1 8.8-8.652h.152a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.091 3.4a5.882 5.882 0 0 0-.2 11.761h.124a5.091 5.091 0 0 0 5.248-4.058L14.3 11H9V8h8.341c.065.543.094 1.09.087 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"></path></svg> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let completed = 0;
  let totalSize = 0;
  Math.floor(completed / totalSize * 100).toString();
  return `${$$result.head += `<!-- HEAD_svelte-vx7v1c_START -->${$$result.title = `<title>Cloud</title>`, ""}<!-- HEAD_svelte-vx7v1c_END -->`, ""} <div class="p-2 h-[90svh]">${`${`<div class="flex justify-center pt-0 sm:pt-32"><button class="w-full border rounded-lg border-slate-600 p-10 border-opacity-50 hover:bg-slate-800 max-w-3xl"><div class="flex sm:flex-row flex-col gap-2 items-center justify-center">${validate_component(GoogleSolid, "GoogleSolid").$$render($$result, { size: "lg" }, {}, {})} <h2 class="text-lg" data-svelte-h="svelte-1b9un9c">Connect to Google Drive</h2></div></button></div>`}`}</div>`;
});
export {
  Page as default
};
