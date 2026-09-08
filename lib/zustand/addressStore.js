import {create} from "zustand";
import { ADDRESS_DATA }from "@/assets/assets";

export const useAddressStore = create((set)=> ({
    list:[ADDRESS_DATA],
    addAddress:(newAddress)=> set((state)=> ({
        list:[...state.list, newAddress]
    }))
}))