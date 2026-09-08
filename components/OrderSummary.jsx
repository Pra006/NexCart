"use client";

import { COUPONS_DATA } from "@/assets/assets";
import { useAddressStore } from "@/lib/zustand/addressStore";
import {
  CreditCardIcon,
  MapPinIcon,
  SquarePenIcon,
  TicketIcon,
  XIcon,
  ChevronDownIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OrderSummary = ({ totalPrice, items }) => {
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  const addressList = useAddressStore((state) => state.list);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [coupon, setCoupon] = useState(COUPONS_DATA[0]);

  const discount = coupon
    ? (coupon.discount / 100) * totalPrice
    : 0;

  const shipping = 5;

  const finalTotal = totalPrice + shipping - discount;

  const handleCoupon = () => {
    // coupon logic
  };

  const handleOrder = () => {
    router.push("/my-order");
  };

  return (
    <div className="bg-base-200/50 rounded-3xl p-4 sm:p-6 space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <CreditCardIcon size={18} />
          </div>

          <div>
            <h4 className="font-semibold">
              Order Summary
            </h4>

            <p className="text-[10px] opacity-50">
              Review your order
            </p>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-2">
        <div className="text-[10px] uppercase font-bold opacity-60 px-1">
          Payment Method
        </div>

        <div className="grid grid-cols-2 gap-1 bg-base-300 p-1 rounded-xl">
          {["COD", "STRIPE"].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`btn btn-sm border-none rounded-lg ${
                paymentMethod === method
                  ? "bg-base-100 shadow-sm"
                  : "btn-ghost opacity-50"
              }`}
            >
              {method === "COD"
                ? "Cash on Delivery"
                : "Stripe"}
            </button>
          ))}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="space-y-2">

        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <MapPinIcon size={14} className="text-primary" />

            <span className="text-[10px] uppercase font-bold opacity-60">
              Shipping Address
            </span>
          </div>

          <button
            onClick={() => setShowAddressModal(true)}
            className="text-xs font-semibold text-primary hover:underline"
          >
            + New Address
          </button>
        </div>

        {selectedAddress ? (
          <div className="relative bg-base-100 rounded-2xl border border-base-300 p-4">

            <div className="pr-7">
              <h6 className="font-semibold text-sm">
                {selectedAddress.name}
              </h6>

              <p className="text-xs opacity-60 mt-1 leading-relaxed">
                {selectedAddress.address}
              </p>

              <p className="text-xs opacity-60">
                {selectedAddress.city}
              </p>

              {selectedAddress.phone && (
                <p className="text-xs opacity-60 mt-1">
                  {selectedAddress.phone}
                </p>
              )}
            </div>

            <button
              onClick={() => setSelectedAddress(null)}
              className="absolute top-3 right-3 btn btn-ghost btn-xs btn-circle"
            >
              <SquarePenIcon size={14} />
            </button>
          </div>
        ) : (
          <div className="relative">
            <select
              className="select select-bordered select-sm w-full rounded-xl bg-base-100 pr-10"
              value=""
              onChange={(e) => {
                if (e.target.value !== "") {
                  setSelectedAddress(
                    addressList[Number(e.target.value)]
                  );
                }
              }}
            >
              <option value="">
                Choose delivery address...
              </option>

              {addressList.map((addr, index) => (
                <option key={index} value={index}>
                  {addr.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Coupon */}
      <div className="space-y-2">

        <div className="flex items-center gap-1.5 px-1">
          <TicketIcon size={14} className="text-primary" />

          <span className="text-[10px] uppercase font-bold opacity-60">
            Coupon
          </span>
        </div>

        {!coupon ? (
          <div className="flex gap-2">
            <input
              className="input input-sm w-full bg-base-100 rounded-xl"
              placeholder="Enter coupon code"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCoupon();
                }
              }}
            />

            <button
              className="btn btn-neutral btn-sm rounded-xl px-5"
              onClick={handleCoupon}
              disabled={!couponInput.trim()}
            >
              Apply
            </button>
          </div>
        ) : (
          <div className="bg-success/10 border border-success/20 rounded-xl p-3">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TicketIcon
                  size={15}
                  className="text-success"
                />

                <span className="text-xs font-bold text-success">
                  {coupon.code}
                </span>
              </div>

              <button
                onClick={() => setCoupon(null)}
                className="btn btn-ghost btn-xs btn-circle"
              >
                <XIcon size={14} />
              </button>
            </div>

            <p className="text-[10px] text-success mt-1">
              {coupon.discount}% discount applied
            </p>
          </div>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-base-300 pt-4 space-y-3">

        <div className="flex justify-between text-sm">
          <span className="opacity-60">
            Subtotal
          </span>

          <span className="font-medium">
            {currency}
            {totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="opacity-60">
            Shipping
          </span>

          <span className="font-medium">
            {shipping === 0
              ? "FREE"
              : `${currency}${shipping.toFixed(2)}`}
          </span>
        </div>

        {coupon && (
          <div className="flex justify-between text-sm text-success">
            <span>
              Discount ({coupon.discount}%)
            </span>

            <span className="font-medium">
              -{currency}
              {discount.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="bg-base-100 rounded-2xl p-4">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs opacity-60">
              Total Amount
            </p>

            <p className="text-[10px] opacity-40 mt-0.5">
              Including shipping & discounts
            </p>
          </div>

          <h3 className="text-xl font-bold text-primary">
            {currency}
            {finalTotal.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Place Order */}
      <button
        onClick={handleOrder}
        disabled={!selectedAddress}
        className="btn btn-primary btn-block rounded-2xl h-12"
      >
        {paymentMethod === "COD"
          ? "Place Order"
          : "Pay with Stripe"}
      </button>

      {!selectedAddress && (
        <p className="text-center text-[10px] text-error">
          Please select a delivery address to continue.
        </p>
      )}

    </div>
  );
};

export default OrderSummary;