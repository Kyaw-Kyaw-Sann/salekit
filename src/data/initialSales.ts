import type { Sale } from '../types'

export const initialSales: Sale[] = [
  {
    id: 'sale-1',
    items: [
      {
        id: 'product-1',
        name: 'Iced Coffee',
        price: 3.5,
        category: 'Drinks',
        stock: 20,
        quantity: 2,
      },
      {
        id: 'product-3',
        name: 'Chicken Sandwich',
        price: 5.5,
        category: 'Food',
        stock: 10,
        quantity: 1,
      },
    ],
    total: 12.5,
    cashReceived: 20,
    change: 7.5,
    date: '2026-10-17T09:30:00.000Z',
  },
  {
    id: 'sale-2',
    items: [
      {
        id: 'product-4',
        name: 'Chocolate Cake',
        price: 4.25,
        category: 'Desserts',
        stock: 8,
        quantity: 2,
      },
    ],
    total: 8.5,
    cashReceived: 10,
    change: 1.5,
    date: '2026-10-16T13:15:00.000Z',
  },
  {
    id: 'sale-3',
    items: [
      {
        id: 'product-6',
        name: 'Bottled Water',
        price: 1.25,
        category: 'Drinks',
        stock: 30,
        quantity: 4,
      },
    ],
    total: 5,
    cashReceived: 5,
    change: 0,
    date: '2026-10-15T10:45:00.000Z',
  },
]