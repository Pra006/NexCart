"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ASSETS, COUPONS_DATA } from "../assets/assets.js";

const Banner = () => {
  const coupon = COUPONS_DATA?.[0];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!coupon) return;

    const hasVisited = sessionStorage.getItem("bannerShown");

    if (hasVisited) return;

    const timer = setTimeout(() => {
      const modal = document.getElementById("banner_modal");

      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
        sessionStorage.setItem("bannerShown", "true");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [coupon]);

  const handleCopyCoupon = async () => {
    if (!coupon?.code) return;

    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy coupon:", error);
    }
  };

  if (!coupon) return null;

  const formattedExpiryDate = new Date(coupon.expiresAt).toLocaleDateString();

  return (
    <dialog
      id="banner_modal"
      className="modal modal-bottom sm:modal-middle"
      aria-labelledby="banner-title"
    >
      <div className="card w-full max-w-3xl overflow-hidden bg-base-100 shadow-xl lg:card-side">
        <form method="dialog">
          <button
            type="submit"
            aria-label="Close banner"
            className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2 z-20"
          >
            ✕
          </button>
        </form>

        <figure className="h-48 w-full sm:h-60 lg:h-auto lg:w-1/2">
          <Image
            src={ASSETS.banner}
            width={666}
            height={266}
            alt="Welcome to NexCart"
            className="h-full w-full object-cover"
            priority
          />
        </figure>

        <div className="w-full lg:w-1/2">
          <div className="card-body p-5 sm:p-6">
            <h2
              id="banner-title"
              className="card-title text-lg uppercase sm:text-xl"
            >
              Welcome to NexCart 🎉
            </h2>

            <p className="text-sm leading-relaxed text-base-content/70 sm:text-base">
              {coupon.description}
            </p>

            <div className="my-3 rounded-xl bg-base-200 p-4 sm:my-4 sm:p-5">
              <p className="mb-2 text-xs text-base-content/60 sm:text-sm">
                Your Exclusive Coupon Code
              </p>

              <code className="block text-2xl font-bold tracking-widest text-primary sm:text-3xl">
                {coupon.code}
              </code>

              <p className="mt-2 text-xs text-base-content/50" suppressHydrationWarning>
                🎁 {coupon.discount}% OFF · Expires {formattedExpiryDate}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(coupon.forNewUser || coupon.forMember) && (
                <span className="w-full text-xs text-base-content/50">
                  Requirements:
                </span>
              )}

              {coupon.forNewUser && (
                <span className="badge badge-info badge-soft">New User</span>
              )}

              {coupon.forMember && (
                <span className="badge badge-info badge-soft">Member</span>
              )}

              {!coupon.forNewUser && !coupon.forMember && (
                <span className="badge badge-success badge-soft">Everyone</span>
              )}
            </div>

            <div className="card-actions mt-4 justify-end">
              <button
                type="button"
                onClick={handleCopyCoupon}
                className="btn btn-neutral btn-sm sm:btn-md"
              >
                {copied ? "✓ Copied!" : "Copy Coupon"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
};

export default Banner;
