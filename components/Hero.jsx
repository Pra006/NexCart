"use client";
import React from "react";
import HeroStat from "./HeroStat";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat h-[96vh] w-full rounded-3xl pb-16">
      <div className="max-w-3xl flex flex-col px-9 pt-11 lg:pt-14 text-center lg:text-left">
        {/* Text Content */}
        <p className="badge badge-md font-semibold border-none mx-auto lg:mx-0">
          🚀 GLOBAL VENDOR NETWORK
        </p>

        <h1 className="font-extrabold leading-tight tracking-tight mt-4">
          The World's Finest <br />
          <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
            Artisan Brands.
          </span>
        </h1>

        <p className="py-8">
          Discover a curated universe of unique products. We connect independent
          creators with conscious shoppers looking for quality, style, and
          sustainability in one unified platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/shop"
            className="btn btn-neutral shadow-none border-none btn-lg text-sm"
          >
            Start Shopping
          </Link>
          <Link
            href="/create-store"
            className="btn btn-secondary shadow-none border-none btn-lg text-sm"
          >
            Become a Seller
          </Link>
        </div>
        <HeroStat />
      </div>
    </div>
  );
};

export default Hero;
