"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useProductStore } from "@/lib/zustand/productStore";
import { useRouter } from "next/navigation";
import ProductOverview from "@/app/components/ProductOverview";
import ProductDetails from "@/app/components/ProductDetails";
import { useCallback } from "react";

const Page = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const products = useProductStore((state) => state.list);
  const router = useRouter();

  const fetchProduct = useCallback(() => {
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      router.push("/shop");
    }
  }, [productId, products, router]);

  useEffect(() => {
    if (products.length > 0) {
      fetchProduct();
    }
    scrollTo(0, 0);
  }, [fetchProduct, products.length]);
  return (
    <div className="pb-16 pt-2">
      <div className="breadcrumbs text-sm opacity-75 pt-8">
        <ul>
          <li onClick={() => router.push("/")}>
            <a>Home</a>
          </li>
          <li onClick={() => router.push("/shop")}>
            <a>Shop</a>
          </li>
          <li>{product?.name}</li>
        </ul>
      </div>
      {/* Product Overview */}
      {product && (<ProductOverview product={product} />) }
      {product && (<ProductDetails product={product} />) }
    </div>
  );
};

export default Page;
