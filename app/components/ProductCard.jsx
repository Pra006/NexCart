import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "NPR";

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
    <Link
      href={`/product/${product.id}`}
      className="border border-base-300 hover:border-primary-300 transition-colors rounded-xl flex flex-col w-44 sm:w-52 relative group"
    >
      {/* badge */}
      <div className="absolute top-1 left-2">
        <span className="badge badge-soft badge-warning badge-sm uppercase gap-0.5">
          <span className="font-bold">{discount}%</span>off
        </span>
      </div>
      {/* Product Image */}
      <div className="flexCenter h-44 sm:h-55 rounded-t-xl overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          height={555}
          width={555}
          className="max-h-full max-w-full object-contain group-hover:scale-105 duration-300"
        />
      </div>

      {/* Product Name, Price & Rating */}
      <div className="p-2 border-t border-base-200">
        <h6 className="text-base-content/80 line-clamp-2">{product.name}</h6>
        <div className="hidden sm:flex items-center gap-0.5 py-0.5">
          <div className="rating rating-xs">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                type="radio"
                key={star}
                className={`mask mask-star-2 ${star <= Math.round(averageRating) ? "bg-orange-400" : "bg-primary/70"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[15px] font-semibold mt-1">
          <span className="text-warning">
            {currency}
            {product.price.toFixed(2)}
          </span>
          <span className="text-primary/70 line-through">
            {currency}
            {product.regularPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
