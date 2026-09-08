"use client";
import { useCartStore } from "@/lib/zustand/cartStore";
import { useProductStore } from "@/lib/zustand/productStore";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { ShoppingCart, Trash2 } from "lucide-react";
import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";
import QuantitySelector from "@/components/QuantitySelector";
import OrderSummary from "@/components/OrderSummary";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    isLoading,
    total: cartCount,
  } = useCartStore();
  const { list: products, isLoading: productLoading } = useProductStore();

  const [cartArray, setCatArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  useEffect(() => {
    let total = 0;
    const items = Object.entries(cartItems)
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === id);
        if (product) total += product.price * qty;
        return product ? { ...product, quantity: qty } : null;
      })
      .filter(Boolean);
    setCatArray(items);
    setTotalPrice(total);
  }, [cartItems, products]);

  if (isLoading || productLoading) return <Loading />;

  if (cartCount === 0)
    return (
      <div className="mb-16 mt-4 flex min-h-[50vh] items-center justify-center rounded-3xl border-2 border-dashed border-base-300 bg-base-200/40 px-6 py-16">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-base-100 shadow-sm ring-1 ring-base-300">
            <ShoppingCart
              size={48}
              strokeWidth={1.5}
              className="text-neutral-400"
            />
          </div>
          <h4 className="text-2xl font-semibold tracking-tight text-base-content">
            Your cart is empty
          </h4>
          <Link
            href="/shop"
            className="btn btn-primary mt-7 rounded-full px-7 shadow-sm transition-all hover:scale-[1.02]"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );

  return (
    <div className=" mb-16 mt-2">
      <Title
        headingStart="My"
        headingEnd="Cart"
        subtext={`Checkout + ${cartCount} Items`}
        hasAction={"Add New Product"}
      />

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* left side */}

        <div className="flex-1 overflow-x-auto rounded-2xl border border-base-300 bg-base-200/50">
          <table className="table w-full">
            <thead className="bg-base-200/50">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-base-200 last:border-0"
                >
                  <td className="flexStart gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-14 w-14 bg-base-200">
                        <Image
                          src={item.images?.[0]}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="min-w-44">
                      <h6 className="leading-tight">{item.name}</h6>
                      <p className="text-[10px] uppercase font-bold">
                        {item.category}
                      </p>
                    </div>
                  </td>

                  <td className="text-center">
                    <QuantitySelector productId={item.id} />
                  </td>

                  <td>
                    <div className="font-bold">
                      {currency}
                      {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-ghost btn-sm text-error btn-circle "
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Right side*/}
        <div className="lg:w-96">
          <OrderSummary totalPrice={totalPrice} items={cartArray} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
