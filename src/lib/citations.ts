import { writable, get } from 'svelte/store';

export type Citation = {
  text: string;
};

// Map of pathname -> list of citations for that page
const createCitationsMap = () => {
  const { subscribe, update } = writable<Record<string, Citation[]>>({});

  function register(pathname: string, text: string): number {
    let index = 0;
    update((map) => {
      const list = map[pathname] ?? [];
      // Append and return 1-based index
      const next = [...list, { text }];
      map[pathname] = next;
      index = next.length;
      return map;
    });
    return index;
  }

  function getList(pathname: string): Citation[] {
    const map = get({ subscribe });
    return map[pathname] ?? [];
  }

  function clear(pathname?: string) {
    update((map) => {
      if (pathname) {
        const { [pathname]: _omit, ...rest } = map;
        return rest;
      }
      return {};
    });
  }

  return { subscribe, register, getList, clear };
};

export const citationsMap = createCitationsMap();
