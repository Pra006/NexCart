"use client";
import Loading from "@/app/components/Loading";
import React, { Suspense, useEffect, useState } from "react";
import { CATEGORIES } from "@/app/assets/assets";
import { useProductStore } from "@/lib/zustand/productStore";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { Menu } from "lucide-react";

let ITEMS_PER_PAGE = 12;

function ShopContent() {
  const products = useProductStore((state) => state.list);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const search = searchParams.get("search");
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || null,
  );

  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  let productMaxPrice =
    products.length > 0
      ? Math.ceil(Math.max(...products.map((p) => p.price)))
      : 1000;
  let categories = CATEGORIES.map((categoryName) => ({
    name: categoryName,
    count: products.filter((p) => p.category === categoryName).length,
  }));
  //filter products based on search , category and price
  let filteredProducts = products
    .filter(
      (product) =>
        !search || product.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(
      (product) => !selectedCategory || product.category === selectedCategory,
    )
    .filter((product) => product.price <= maxPrice);

  // apply sorting
  if (sortBy === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB - dateA;
    });
  }

  //Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  const handleCategory = (category) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    setCurrentPage(1);
    if (newCategory) {
      router.push(`/shop?category=${encodeURIComponent(newCategory)}`);
    } else {
      router.push("/shop");
    }
  };

  const handleMaxPriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setMaxPrice(newPrice);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setCurrentPage(1);
    setSelectedCategory(null);
    setMaxPrice(productMaxPrice);
    setSortBy("newest");
    router.push("/shop");
  };

  useEffect(() => {
    setSelectedCategory(categoryParam || null);
  }, [categoryParam]);

  return (
    <div className="pb-16 mt-2 drawer lg:drawer-open ">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="lg:hidden p-4 border-b">
          <label htmlFor="my-drawer-1" className="btn btn-sm btn-outline">
            <Menu size={17} />
            Filters
          </label>
        </div>
        <div className="p-4 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
            <div>
              <div className="breadcrumbs text-sm opacity-75 pt-0">
                <ul>
                  <li onClick={() => router.push("/")}>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Shop</a>
                  </li>
                </ul>
              </div>
              <h1 className="text-2xl lg:text-2xl font-bold mb-2">
                All Products
              </h1>
              <p className="text-base-content/60">
                {filteredProducts.length} product
                {filteredProducts.length !== 5 ? "s" : ""} found
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <fieldset>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="select select-bordered w-full lg:w-48"
                >
                  <option value="newest">Newest</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                </select>
              </fieldset>
            </div>
          </div>
          {paginatedProducts.length > 0 && (
            <>
              <div className="grid grid-cols-2 sm:flex flex-wrap justify-between gap-3 lg:gap-6 mb-8">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {totalPages > 1 && (
                <div className="flexCenter gap-2 mt-8">
                  <div className="join">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="join-item btn"
                    >
                      «
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`join-item btn ${currentPage === page ? "btn-active" : ""}`}
                        >
                          {page}
                        </button>
                      ),
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="join-item btn"
                    >
                      »
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-64 h-full bg-base-200/50 backdrop-blur-2xl rounded-xl overflow-y-auto">
          <div className="sticky top-0 p-4" />
          <div className="space-y-6 p-4" />
          <div>
            <h3 className="font-semibold text-base mb-3 flexStart gap-2">
              <span className="uppercase">Category</span>
            </h3>
            <ul className="menu bg-base-100 w-full rounded-xl gap-1">
              <li>
                <a
                  onClick={() => handleCategory(null)}
                  className={`flexBetween ${!selectedCategory ? "menu-active" : ""}`}
                >
                  <span>All Products</span>
                  <span className="badge badge-sm">{products.length}</span>
                </a>
              </li>
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    onClick={() => handleCategory(category.name)}
                    className={`flexBetween ${selectedCategory === category.name ? "menu-active" : ""}`}
                  >
                    <span>{category.name}</span>
                    <span className="badge badge-sm">{category.count}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="divider my-2"></div>
            <div>
              <h6 className="uppercase">Max Price</h6>
              <div className="text-base-200 rounded-xl my-2 p-3">
                <div className="flexBetween pb-1">
                  <p>{currency}0</p>
                  <p>
                    {currency} {maxPrice}
                  </p>
                </div>
                <input
                  type="range"
                  min={0}
                  max={productMaxPrice}
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="range range-neutral"
                />
              </div>
            </div>
            <div className="divider my-2"></div>
            <button
              onClick={handleResetFilter}
              className="btn btn-outline btn-sm w-full"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Shop = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ShopContent />
    </Suspense>
  );
};

export default Shop;
