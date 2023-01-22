export const PAGE_SIZE = 10;

interface SortingOption {
  displayName: string;
  value: { name?: 'ASC' | 'DESC'; price?: 'ASC' | 'DESC' };
}

export const SORTING_OPTIONS: SortingOption[] = [
  {
    displayName: 'A-Z',
    value: {
      name: 'ASC',
    },
  },
  {
    displayName: 'Z-A',
    value: {
      name: 'DESC',
    },
  },
  {
    displayName: 'Price (lowest)',
    value: {
      price: 'ASC',
    },
  },
  {
    displayName: 'Price (highest)',
    value: {
      price: 'DESC',
    },
  },
];
