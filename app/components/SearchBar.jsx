import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import{ CATEGORIES } from "@/app/assets/assets";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "Filter";

  useEffect(() => {
    const delay = setTimeout(() => {
      if (search.trim()) {
        router.push(`/shop?search=${search}`); // Always redirects to /shop when searching
      } else if (pathname === "/shop") {
        router.push("/shop"); // Only resets if already on /shop
      }
      // If empty + not on /shop = do nothing (stays on homepage)
    }, 300);

    return () => clearTimeout(delay);
  }, [search, pathname]);

  const handleCategorySelect = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "Filter") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${encodeURIComponent(selectedCategory)}`);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="join">
      <div className="w-full">
        <input
          className="input join-item"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <select
        className="select join-item w-37"
        value={categoryParam}
        onChange={handleCategorySelect}
      >
        <option value="Filter">Filter</option>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="indicator">
        <button className="btn join-item">
          <Search size={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
