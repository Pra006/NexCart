"use client";
import { Search } from "lucide-react";
import React from "react";
import { CATEGORIES } from "../assets/assets";

const SearchBar = () => {
  return (
    <form className="join">
      <div className="w-full">
        <div>
          <input className="input join-item" placeholder="Search" />
        </div>
      </div>
      <select className="select join-item w-37">
        <option value="Filter">
          Filter
        </option>
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
