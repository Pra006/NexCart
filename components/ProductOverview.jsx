"use client";
import { useCartStore } from "@/lib/zustand/cartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import Image from "next/image";
import React from "react";
import {
  ArrowRightIcon,
  AwardIcon,
  GlobeIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TagIcon,
} from "lucide-react";

const ProductOverview = ({ product }) => {
  const productId = product.id;
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const router = useRouter();
  const [mainImage, setMainImage] = useState(product.images[0]);

  const averageRating =
    product.rating.length > 0
      ? (
          product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
          product.rating.length
        ).toFixed(1)
      : 0;

  const discount = (
    ((product.regularPrice - product.price) / product.regularPrice) *
    100
  ).toFixed(0);
  return (
    <section className="py-5">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* left side gallery section */}
        <div className="flex flex-1 max-sm:flex-col-reverse gap-5">
          <div className="flex sm:flex-col gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden cursor-pointer border border-base-300 hover:border-primary-300 transition-colors"
              >
                <Image
                  src={image}
                  alt="thumbnail"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                  onClick={() => setMainImage(image)}
                />
              </button>
            ))}
          </div>
          <div className="flex-1 bg-base-200/50 rounded-3xl flexCenter overflow-hidden group">
            <Image
              src={mainImage}
              alt="main image"
              width={400}
              height={400}
              className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        {/* right side product details section */}
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="tracking-tight line-clamp-2">{product.name}</h2>
          <div className="flexStart gap-4">
            <div className="flex items-center gap-1"></div>
            <div className="rating rating-xs">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`mask mask-star-2 ${star <= Math.round(averageRating) ? "bg-primary" : "bg-base-300"}`}
                ></div>
              ))}
            </div>
          </div>
          <p className="text-primary font-medium hover:underline cursor-pointer">
            {product.rating.length} Reviews
          </p>
          <div className="divider my-2"></div>
          <div className="flex items-center gap-2 text-[15px] font-semibold">
            <h3 className="text-warning">
              {currency}
              {product.price.toFixed(2)}
            </h3>
            <h4 className="text-primary/70 line-through">
              {currency}
              {product.regularPrice.toFixed(2)}
            </h4>
          </div>
          <p className="text-base-content/70 leading-relaxed max-w-md">
            {product.description}
          </p>
          <div className="flexStart gap-4 bg-base-200/50 p-4 rounded-2xl shadow-sm">
            {cartItems[productId] && <QuantitySelector productId={productId} />}
            <div className="flex-1">
              <button
                onClick={() =>
                  !cartItems[productId]
                    ? addToCart(productId)
                    : router.push("/cart")
                }
                className={`btn btn-block btn-md gap-3 transition-all duration-300 ${!cartItems[productId] ? "btn-primary" : " btn-neutral"}`}
              >
                {!cartItems[productId] ? (
                  <>
                    Add To Cart
                    <ShoppingCartIcon />
                  </>
                ) : (
                  <>
                    Go To Checkout <ArrowRightIcon />
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flexStart gap-3 p-3 bg-base-200/50 rounded-xl border border-base-200">
              <GlobeIcon size={18} className="text-primary" />
              <h6 className="font-semibold">Worldwide Shipping</h6>
            </div>
            <div className="flexStart gap-3 p-3 bg-base-200/50 rounded-xl border border-base-200">
              <ShieldCheckIcon size={18} className="text-primary" />
              <h6 className="font-semibold">Secured Checkout</h6>
            </div>
            <div className="flexStart gap-3 p-3 bg-base-200/50 rounded-xl border border-base-200">
              <AwardIcon size={18} className="text-primary" />
              <h6 className="font-semibold">Verified Vendor</h6>
            </div>
            <div className="flexStart gap-3 p-3 bg-base-200/50 rounded-xl border border-base-200">
              <TagIcon size={18} className="text-primary" />
              <h6 className="font-semibold">Price Matching</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
