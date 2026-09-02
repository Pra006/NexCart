"use client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="mt-10 py-5 ">
      {/* Daisy ui tabs */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="product_info"
          className="tab font-medium"
          aria-label="Stuff guide"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h4>Material & Quality</h4>
          <p className="mt-4 leading-relaxed">
            Designed for modern comfort, this women’s knitted co-ord set
            combines relaxed tailoring with a sleek silhouette. Made from a
            premium <b>cotton-spandex blend</b>, it delivers softness,
            flexibility, and lasting shape.
          </p>
          <div className="mt-6">
            <h5 className="mb-3">Key Features:</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 list-disc list-inside opacity-80">
              <li>
                <span className="font-semibold">Fabric:</span> 60% Cotton, 40%
                Spandex
              </li>
              <li>Relaxed fit</li>
              <li>Soft knitted texture</li>
              <li>Wide-leg trousers</li>
              <li>2-piece professionally stitched</li>
            </ul>
          </div>
        </div>

        <input
          type="radio"
          name="product_info"
          className="tab font-medium"
          aria-label="Size guide"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h4>Standard Size Chart</h4>
          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra bg-base-200/30">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Waist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>36"</td>
                  <td>30"</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>40"</td>
                  <td>34"</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>44"</td>
                  <td>38"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <input
          type="radio"
          name="product_info"
          className="tab font-medium"
          aria-label={`Reviews (${product.rating.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex flex-col gap-6">
            {product.rating.map((item, index) => (
              <div
                key={index}
                className="flexStart gap-4 border-b border-base-200 pb-6 last:border-0"
              >
                <Image
                  src={item.user.image}
                  alt="user"
                  className="size-12 rounded-full border border-base-300"
                  width={50}
                  height={50}
                />
                <div>
                  <div className="flex">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          size={14}
                          className="text-transparent"
                          fill={item.rating >= i + 1 ? "#00C950" : "#D1D5DB"}
                        />
                      ))}
                  </div>
                  <p className="my-2">{item.review}</p>
                  <h6>{item.user.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
