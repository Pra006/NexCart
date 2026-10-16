"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { PRODUCTS_DATA } from "@/assets/assets";

const StoreManageProducts = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setProducts(PRODUCTS_DATA);
    setLoading(flase);
  };

  const toggleStock = async (productId) => {};
  useEffect(() => {
    fetchProducts();
  }, []);

//   if (loading) {
//     return <Loading />;
//   }

  return (
    <div>
      <Title
        headingStart={"Manage"}
        headingEnd={"Products"}
        hasAction={false}
      />
      <div className="overflow-x-auto rounded-2xl border border-base-300 mt-4">
        <table className="table w-full">
          <thead className="bg-base-200/50 uppercase text-[10px] tracking-widest opacity-60">
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price Info</th>
              <th className="text-center">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-base-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flexStart gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 bg-base-200">
                        <Image
                          src={product.images[0]}
                          width={48}
                          height={48}
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="min-w-44">
                      <h6 className="leading-tight">{product.name}</h6>
                      <p className="text-[10px] opacity-50 uppercase font-bold">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="max-w-xs truncate text-xs">
                    {product.description}
                  </p>
                </td>
                <td>
                  <div className="font-bold">
                    {currency}
                    {product.price.toLocaleString()}
                  </div>
                  <div className="text-[10px] opacity-40 line-through">
                    {currency}
                    {product.regularPrice.toLocaleString()}
                  </div>
                </td>
                <td className="text-center">
                  <div className="flexCenter flex-col gap-1">
                    <input
                      type="checkbox"
                      className="toggle toggle-primary toggle-sm"
                      checked={product.inStock}
                      onChange={() => toggleStock(product.id)}
                    />
                    <span
                      className={`text-[10px] font-bold uppercase ${product.inStock ? "text-success" : "text-error"}`}
                    >
                      {product.inStock ? "In" : "Out"}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreManageProducts;
