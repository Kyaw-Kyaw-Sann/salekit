import type { Product } from "../types";

export const initialProducts: Product[] = [
  {
    id: "product-1",
    name: "Hamburger",
    price: 5.5,
    category: "Food",
    stock: 20,
  },
  {
    id: "product-2",
    name: "Chicken Sandwich",
    price: 4.75,
    category: "Food",
    stock: 12,
  },
  {
    id: "product-3",
    name: "French Fries",
    price: 2.5,
    category: "Snacks",
    stock: 18,
  },
  {
    id: "product-4",
    name: "Iced Coffee",
    price: 3.25,
    category: "Drinks",
    stock: 15,
  },
  {
    id: "product-5",
    name: "Green Tea",
    price: 2.75,
    category: "Drinks",
    stock: 10,
  },
  {
    id: "product-6",
    name: "Orange Juice",
    price: 3,
    category: "Drinks",
    stock: 8,
  },
  {
    id: "product-7",
    name: "Chocolate Cake",
    price: 4,
    category: "Desserts",
    stock: 4,
  },
  {
    id: "product-8",
    name: "Vanilla Ice Cream",
    price: 3.5,
    category: "Desserts",
    stock: 0,
  },
  {
    id: "product-9",
    name: "Potato Chips",
    price: 1.75,
    category: "Snacks",
    stock: 25,
  },
  {
    id: "product-10",
    name: "Bottled Water",
    price: 1.25,
    category: "Drinks",
    stock: 30,
  },
];
