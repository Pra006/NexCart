"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useProductStore } from "@/lib/zustand/productStore";
import { useRouter } from "next/navigation";
import ProductOverview from "@/app/components/ProductOverview";
import ProductDetails from "@/app/components/ProductDetails";
import Image from "next/image";
import { MoveRightIcon } from "lucide-react";
import { useCallback } from "react";
import Link from "next/link";

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
      {product && <ProductOverview product={product} />}
      {product && <ProductDetails product={product} />}
      {/* Store section */}
      {product && (
        <div className="mt-3 p-4 sm:p-5 bg-base-200/50 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Store Info */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              {/* Store Logo */}
              <div className="avatar avatar-online shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full">
                  <Image
                    src={product.store.logo}
                    alt={product.store.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Store Name */}
              <div className="min-w-0">
                <h5 className="font-semibold truncate">{product.store.name}</h5>

                <p className="text-xs opacity-60 mt-1">
                  Verified Official Store
                </p>
              </div>
            </div>

            {/* Visit Store Button */}
            <Link
              href={`/shop/${product.store.userName}`}
              className="btn btn-sm btn-outline btn-primary rounded-xl w-full sm:w-auto shrink-0"
            >
              Visit Store
              <MoveRightIcon size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
