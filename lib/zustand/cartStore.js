import {create} from "zustand";

export const useCartStore = create((set, get) => ({
    cartItems: {},
    total:0,
    addToCart: (productId) => {
        const items = {...get().cartItems}
        if(items[productId]){
            items[productId] += 1;
        } else {
            items[productId] = 1;
        }   
        set({cartItems: items, total:get().total + 1});
    },
    removeFromCart: (productId) => {
        const items = {...get().cartItems};
        if(!items[productId]) return;
        items[productId]--;
        if(items[productId]=== 0){
            delete items[productId];
        }
        set({cartItems: items, total: Math.max(get().total - 1, 0)});
    },
    clearCart: () => {
        set({cartItems: {}, total: 0});
    }
}));