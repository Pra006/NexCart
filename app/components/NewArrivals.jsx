"use client";
import React from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { PRODUCTS_DATA } from "../assets/assets";
import { useProductStore } from "@/lib/zustand/productStore";


const NewArrivals = () => {
   const products = useProductStore((state) => state.list);
  const maxItems = 5;
  const allProducts = products;
  const recentProducts = allProducts
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, maxItems);

  return (
    <section className="py-16 sm:px-12">
      <Title
        headingStart={"New"}
        headingEnd={"Arrivals"}
        subtext={`Discover our newest collection • Showing ${recentProducts.length} of ${allProducts.length} products`}
        hasAction={"View All"}
        linkTo="/shop"
      />

      <div className="grid grid-cols-2 sm:flex flex-wrap justify-between gap-3 lg:gap-6 mt-11">
        {recentProducts.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       {recentProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-400 text-lg">No popular products yet</p>
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
