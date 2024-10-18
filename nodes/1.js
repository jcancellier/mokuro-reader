

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6bbe1498.js","_app/immutable/chunks/scheduler.4ed7d74d.js","_app/immutable/chunks/index.fe958313.js","_app/immutable/chunks/stores.c7deb295.js","_app/immutable/chunks/singletons.e228d5ce.js"];
export const stylesheets = [];
export const fonts = [];
