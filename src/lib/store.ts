import { writable, type Writable } from "svelte/store";
import type { Game } from "$lib/types";

export const collection: Writable<Game[]> = writable();
