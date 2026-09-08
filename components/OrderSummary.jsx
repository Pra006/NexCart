"use client";
import { useAddressStore } from "@/lib/zustand/addressStore";
import { CreditCardIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const orderSummry = () => {
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";
  const addressList = useAddressStore((state) => state.list);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [coupon, setCoupon] = useState(null);

  const discount = coupon ? (coupon.discount / 100) * totalPrice : 0;
  // const shippingFee = user?.plan === "premium" ? 0 : 5;

  const handleCoupon = () => {};

  const handleOrder = () => {
    router.push("/my-order");
  };
  return (
    <div className="bg-base-200/50 p-6 rounded-3xl ">
      <h4 className="flexStart gap-2">
        <CreditCardIcon size={18} />
        Summmary
      </h4>
      <div className="grid grid-cols-2 bg-base-300 p-1 rounded-xl">
        {["COD", "STRIPE"].map((m) => (
          <button
            key={m}
            onClick={() => setPaymentMethod(m)}
            className={`btn btn-sm border-none rounded-lg &{paymentMethod === m ? 'bg-base-100 shadow-sm' : 'btn-ghost opacit-50y}`}
          >
            {m}
          </button>
        ))}
      </div>

        <div className=" space-y-2">
          <div className="flexBetween text-[10px] uppercase font-bold px-1 opacity-70">
            
          </div>

        </div>

    </div>
  );
};

export default orderSummry;
