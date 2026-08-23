import { create } from "zustand";
import { PRODUCTS_DATA } from "@/app/assets/assets";

export const useProductStore = create((set) => ({
    list: PRODUCTS_DATA,

    setProducts: (products) => set(() => ({
        list: products
    })),
    clearProducts: () => set(()=> ({
        list:[]
    }))
}))
