"use client";

import Image from "next/image";
import { useState } from "react";
import { ORDERS_DATA } from "@/assets/assets";
import Title from "@/components/Title";
import { ShoppingBagIcon, TicketPercentIcon, XIcon } from "lucide-react";

const StoreOrders = () => {
  const [orders, setOrders] = useState(ORDERS_DATA);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateStatus = (orderId, status) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId ? { ...order, status } : order,
      ),
    );
  };

  return (
    <div>
      <Title
        headingStart="Store"
        headingEnd="Orders"
        subtext={`Total ${orders.length} orders`}
      />

      {orders.length === 0 ? (
        <div className="mb-16 mt-6 hero min-h-[40vh] rounded-3xl border-2 border-dashed border-base-300 bg-base-200/50">
          <div className="hero-content flex-col text-center opacity-50">
            <ShoppingBagIcon size={56} strokeWidth={1} />
            <h5>No orders yet</h5>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-base-300 mt-4">
          <table className="table w-full min-w-max">
            <thead className="bg-base-200/50 uppercase text-[10px] tracking-widest opacity-60">
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Coupon</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200">
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className="cursor-pointer transition-colors hover:bg-base-200/40"
                >
                  <td className="font-bold text-primary">{index + 1}</td>
                  <td className="font-semibold">{order.user?.name}</td>
                  <td className="font-bold">${order.total}</td>
                  <td className="text-[10px] font-bold uppercase opacity-60">
                    {order.paymentMethod}
                  </td>
                  <td>
                    {order.isCouponUsed ? (
                      <div className="badge badge-success badge-outline badge-sm">
                        <TicketPercentIcon size={12} />
                        {order.coupon?.code}
                      </div>
                    ) : (
                      <span className="opacity-20">—</span>
                    )}
                  </td>
                  <td onClick={(event) => event.stopPropagation()}>
                    <select
                      aria-label={`Order ${order.id} status`}
                      value={order.status}
                      onChange={(event) =>
                        updateStatus(order.id, event.target.value)
                      }
                      className="select select-xs"
                    >
                      {[
                        "ORDER_PLACED",
                        "PROCESSING",
                        "SHIPPED",
                        "DELIVERED",
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="text-xs opacity-60">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOrder && (
        <div className="modal modal-open backdrop-blur-sm px-4">
          <div className="modal-box max-w-2xl rounded-4xl border border-base-300 p-8 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              aria-label="Close order details"
              className="absolute right-6 top-6 btn btn-ghost btn-sm btn-circle"
            >
              <XIcon size={20} />
            </button>
            <h5 className="font-bold mb-6 flexStart gap-2">
              <ShoppingBagIcon className="text-primary" /> Order Details
            </h5>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <p className="text-[10px] font-bold opacity-40 uppercase">
                  Shipping Info
                </p>
                <p className="font-bold">{selectedOrder.user?.name}</p>
                <p className="opacity-70 leading-relaxed">
                  {selectedOrder.address?.street},{" "}
                  {selectedOrder.address?.city}
                  <br />
                  {selectedOrder.address?.state},{" "}
                  {selectedOrder.address?.zip}
                </p>
                <p className="text-primary font-bold">
                  {selectedOrder.address?.phone}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold opacity-40 uppercase">
                  Products
                </p>
                {(selectedOrder.OrderItems ?? selectedOrder.orderItems ?? []).map(
                  (item, index) => (
                    <div
                      key={item.productId ?? index}
                      className="flexStart gap-3 bg-base-200 p-2 rounded-xl"
                    >
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14 bg-base-100">
                          {item.product?.images?.[0] ? (
                            <Image
                              src={item.product.images[0]}
                              alt={item.product.name ?? ""}
                              width={56}
                              height={56}
                              className="object-contain"
                            />
                          ) : (
                            <ShoppingBagIcon className="m-auto opacity-40" />
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-xs">
                          {item.product?.name}
                        </p>
                        <p className="opacity-60 text-[10px] uppercase">
                          Qty: {item.quantity} • ${item.price}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="divider opacity-50" />
            <div className="flexBetween font-bold">
              <div className="flexStart gap-2">
                <span>Total Paid</span>
                {selectedOrder.isCouponUsed && (
                  <span className="badge badge-success badge-xs relative bottom-2">
                    Coupon Used
                  </span>
                )}
              </div>
              <span className="text-xl text-primary">
                ${selectedOrder.total}
              </span>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => setSelectedOrder(null)}
          >
            Close
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreOrders;
