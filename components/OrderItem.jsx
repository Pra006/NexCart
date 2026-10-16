"use client";
import Image from "next/image";
import { useRatingStore } from "@/lib/zustand/ratingStore";
import Rating from "./Rating";
import { DotIcon } from "lucide-react";
const OrderItem = ({ order, setRatingModal }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";
  const ratings = useRatingStore((state) => state.ratings);

  return (
    <tr className="border-b border-base-200 last:border-0">
      <td className="py-4">
        <div className="flex flex-col gap-6">
          {order.OrderItems?.map((item, idx) => {
            const userRating = ratings.find(
              (r) => r.productId === item.product?.id,
            );
            const isDelivered = order.status.toLowerCase() === "delivered";

            return (
              <div key={idx} className="flexStart gap-4">
                <div className="avatar">
                  <div className="mask mask-squircle h-14 w-14 bg-base-200">
                    <Image
                      src={item.product?.images?.[0]}
                      alt="product"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="min-w-44">
                  <h6 className="leading-tight">{item.product?.name}</h6>
                  <p>
                    {currency}
                    {item.price} x {item.quantity}
                  </p>

                  {isDelivered && (
                    <div className="mt-1">
                      {userRating ? (
                        <Rating value={userRating.rating} />
                      ) : (
                        <button
                          onClick={() =>
                            setRatingModal({
                              orderId: order.id,
                              productId: item.product?.id,
                            })
                          }
                          className="btn btn-link btn-xs"
                        >
                          Rate Product
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </td>
      <td className="font-bold">
        {currency}
        {order.total.toLocaleString()}
      </td>
      <td className="text-[11px] leading-relaxed">
        <p className="font-bold">{order.address?.name}</p>
        <p className="opacity-60">
          {order.address?.street}, {order.address?.city}
        </p>
      </td>

      <td className="text-right">
        <div
          className={`badge badge-sm gap-0 font-bold border-none py-3
          ${order.status.toLowerCase() === "deliverd" ? "ng-success/10 text-success" : "bg-base-200 text-base-content/60"}`}
        >
          <DotIcon size={20} />
          <span className="capitalize">{order.status}</span>
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
