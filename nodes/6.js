

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_manga_/_volume_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.56ad4707.js","_app/immutable/chunks/scheduler.4ed7d74d.js","_app/immutable/chunks/index.fe958313.js","_app/immutable/chunks/stores.c7deb295.js","_app/immutable/chunks/singletons.e228d5ce.js","_app/immutable/chunks/misc.f1e0ccd4.js","_app/immutable/chunks/db.60763777.js","_app/immutable/chunks/Settings.f7b7b1f0.js","_app/immutable/chunks/Listgroup.3346521c.js","_app/immutable/chunks/snackbar.c69f911c.js","_app/immutable/chunks/index.51aeeefb.js","_app/immutable/chunks/Input.01f2bfd2.js","_app/immutable/chunks/TrashBinSolid.71ae107c.js","_app/immutable/chunks/navigation.98e8b34c.js","_app/immutable/chunks/Spinner.0812101c.js"];
export const stylesheets = ["_app/immutable/assets/6.d0db97d7.css","_app/immutable/assets/db.1d121e74.css"];
export const fonts = [];
