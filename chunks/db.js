import Dexie from "dexie";
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
class CatalogDexie extends Dexie {
  catalog;
  constructor() {
    super("mokuro");
    this.version(1).stores({
      catalog: "id, manga"
    });
  }
}
const db = new CatalogDexie();
export {
  db as d
};
