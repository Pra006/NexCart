"use client";

import { ORDERS_DATA } from "@/assets/assets";
import Loading from "@/components/Loading";
import OrderItem from "@/components/OrderItem";
import RatingModal from "@/components/RatingModal";
import Title from "@/components/Title";
import { useRatingStore } from "@/lib/zustand/ratingStore";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratingModal, setRatingModal] = useState(null);
  const { fetchUserRatings, initialize } = useRatingStore();

  useEffect(() => {
    setOrders(ORDERS_DATA);
    setLoading(false);
  }, []);

  if (loading) return <Loading />;
  if (orders.length === 0)
    return (
      <div className="mb-16 mt-2 hero min-h-[50vh] bg-base-200/50 rounded-3xl border-2 border-dashed border-base-300">
        <div className="hero-content flex-col text-center opacity-40">
          <ShoppingBagIcon size={64} strokeWidth={1} className="mb-4" />
          <h5>No orders yets</h5>
          <Link href="/shop" className="btn btn-primary rounded-2xl px-10 mt-4">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  return (
    <div className="mb-16 mt-2">
      <Title
        headingStart="My"
        headingEnd="Orders"
        subtext={`Total ${orders.length} orders`}
        hasAction={false}
      />
      <div className="overflow-x-auto rounded-2xl border border-base-300 mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderItem
                key={order.id}
                order={order}
                setRatingModal={setRatingModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {ratingModal && <RatingModal ratingModal={ratingModal} setRatingModal={setRatingModal}/>}
    </div>
  );
};

export default OrdersPage;
