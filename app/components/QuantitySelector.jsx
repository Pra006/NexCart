"use client";
import { useCartStore } from "@/lib/zustand/cartStore";
import { Minus, Plus } from "lucide-react";
import React from "react";

const QuantitySelector = ({productId}) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className="flexCenter gap-3 bg-primary text-primary-content p-1 rounded-xl w-fit">
        <button onClick={()=>removeFromCart(productId)} className="btn btn-ghost btn-xs btn-circle">
          <Minus size={14} />
        </button>
        <span className="text-sm font-bold w-6 text-center">{cartItems[productId] || 0}</span>
         <button onClick={()=>addToCart(productId)} className="btn btn-ghost btn-xs btn-circle">
          <Plus size={14} />
        </button>
    </div>
  );
};

export default QuantitySelector;
