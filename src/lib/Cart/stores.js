import { derived } from 'svelte/store';
import { writable } from 'svelte-local-storage-store';

export const cart_items = writable('cart_items', []);

export const cart_count = derived(cart_items, ($cart_items) => $cart_items.length);
