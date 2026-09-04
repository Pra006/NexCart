"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";

import ThemeSelector from "./ThemeSelector";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/zustand/cartStore";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("website");
  const cartItems = useCartStore((state) => state.cartItems);
const cartCount = Object.values(cartItems).reduce(
  (total, quantity) => total + quantity,
  0
);  return (
    <div className="w-full rouded-md py-1">
      <div className="navbar p-0">
        <div className="navbar-start">
          <Link
            href="/"
            className="relative text-4xl font-semibold text-slate-700"
          >
            Nex<span className="text-secondary">Cart.</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
        <div className="navbar-end gap-1 sm:gap-3">
          <div role="tablist" className="tabs tabs-box hidden tabs-xs xl:flex">
            <Link href="/" role="tab" className="tab tab-active">
              WebSite
            </Link>

            <Link href="/store" role="tab" className="tab tab-active">
              Dashboard
            </Link>

            <Link href="/admin" role="tab" className="tab tab-active">
              Admin
            </Link>
          </div>
          <ThemeSelector />

          <Link
            href="/cart"
            tabIndex={0}
            className="btn btn-circle relative"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="badge badge-sm badge-primary absolute -right-1 -top-1">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
