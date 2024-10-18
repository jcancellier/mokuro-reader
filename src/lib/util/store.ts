// store.js
import { writable } from 'svelte/store';

export const textToUpdate = writable("オレを押して!");
export const translatedText = writable("Tap text to translate")