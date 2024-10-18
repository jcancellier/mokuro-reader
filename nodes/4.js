

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.6e4a308a.js","_app/immutable/chunks/scheduler.4ed7d74d.js","_app/immutable/chunks/index.fe958313.js","_app/immutable/chunks/Listgroup.3346521c.js","_app/immutable/chunks/db.60763777.js","_app/immutable/chunks/misc.f1e0ccd4.js","_app/immutable/chunks/singletons.e228d5ce.js","_app/immutable/chunks/stores.c7deb295.js","_app/immutable/chunks/Input.01f2bfd2.js","_app/immutable/chunks/Loader.bd7c625f.js","_app/immutable/chunks/Spinner.0812101c.js"];
export const stylesheets = ["_app/immutable/assets/db.1d121e74.css"];
export const fonts = [];
