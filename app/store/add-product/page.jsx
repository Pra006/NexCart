"use client";
import { useState } from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { Sparkles, Loader2, ImagePlusIcon, PlusIcon } from "lucide-react";
import { CATEGORIES } from "@/assets/assets";

const AddProduct = () => {
  const [images, setImages] = useState([null, null, null, null, null]);
  const [info, setInfo] = useState({
    name: "",
    description: "",
    regularPrice: "",
    price: "",
    category: "",
  });
  const [loading, setLoading] = useState({ submit: false, ai: false });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "regularPrice" && {
        price: (value * 0.8).toFixed(2),
      }),
    }));
  };

  const analyzeImage = async (file) => {
    if (!file) return;
    setLoading((prev) => ({ ...prev, ai: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flexBetween">
        <Title headingStart={"Add"} headingEnd={"New Item"} />
        {loading.ai && (
          <span className="badge badge-primary animate-pulse gap-2 py-3">
            AI Analyzing...
          </span>
        )}
        <div className="alert bg-base-200/50 mt-4 mb-8">
          <Sparkles className="text-primary" size={18} />
          <span>Tip: Use the first slot to auto-generate details via AI</span>
        </div>
      </div>

      <div className="flex gap-4 mb-8 mt-4">
        {images.map((img, i) => (
          <label
            key={i}
            className="relative aspect-square rounded-3xl w-22 bg-base-200 border-2 border-dashed border-base-300 flexCenter cursor-pointer hover:border-primary transition-all overflow-hidden"
          >
            {img ? (
              <Image
                src={URL.createObjectURL(img)}
                alt=""
                fill
                className="object-cover"
              />
            ) : (
              <ImagePlusIcon className="opacity-20" size={32} />
            )}
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => {
                const newImgs = [...images];
                newImgs[i] = e.target.files[0] ?? null;
                setImages(newImgs);
                if (i === 0) analyzeImage(e.target.files[0]);
              }}
            />
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid">
          <label className="label text-[10px] font-bold opacity-40 uppercase">
            Title
          </label>
          <input
            required
            name="name"
            value={info.name}
            onChange={onChangeHandler}
            className="input rounded-2xl"
            placeholder="Product Name"
          />
        </div>
        <div className="grid">
          <label className="label text-[10px] font-bold opacity-40 uppercase">
            Description
          </label>
          <textarea
            required
            name="description"
            value={info.description}
            onChange={onChangeHandler}
            className="textarea textarea-bordered rounded-2xl h-32"
            placeholder="Tell us about the fit, material..."
          />
        </div>

        <div className="grid">
          <label className="label text-[10px] font-bold opacity-40 uppercase">
            Category
          </label>
          <select
            required
            name="category"
            value={info.category}
            onChange={onChangeHandler}
            className="select rounded-2xl"
          >
            <option value="">Select Category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <div>
            <label className="label text-[10px] font-bold opacity-40 uppercase">
              Retail Price
            </label>
            <input
              required
              type="number"
              name="regularPrice"
              value={info.regularPrice}
              placeholder="0.00"
              onChange={onChangeHandler}
              className="input rounded-2xl"
            />
          </div>
          <div>
            <label className="label text-[10px] font-bold text-primary uppercase">
              Offer Price
            </label>
            <input
              required
              type="number"
              name="price"
              value={info.price}
              placeholder="0.00"
              onChange={onChangeHandler}
              className="input rounded-2xl"
            />
          </div>
        </div>
      </div>

      <button
        disabled={loading.submit}
        className="btn btn-primary rounded-2xl mt-10"
      >
        {loading.submit ? <Loader2 className="animate-spin" /> : <PlusIcon />}
        {loading.submit ? "Publishing..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProduct;
