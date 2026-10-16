"use client";
import { useAddressStore } from "@/lib/zustand/addressStore";
import { MapPinIcon, XIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
const AddressModal = ({ setShowAddressModal }) => {
  const addAddress = useAddressStore((state) => state.addAddress);
  const [address, setAddress] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });
  const handleAddressChange = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addAddress(address);
    if (result.success) {
      toast.success(result.message);
      setShowAddressModal(false);
    } else {
      toast.error(result.message);
    }
  };
  return (
    <dialog open id="address_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md rounded-4xl p-8 border border-base-300">
        <div className="flexBetween mb-8">
          <div className="flexStart gap-3">
            <div className="size-10 rounded-full bg-primary/10 flexCenter text-primary">
              <MapPinIcon size={20} />
            </div>
            <h3 className="text-xl">
              Add New <span className="font-bold">Address</span>
            </h3>
          </div>
          <button
            onClick={() => setShowAddressModal(false)}
            className="btn btn-ghost btn-circle btn-sm"
          >
            <XIcon size={20} />
          </button>
        </div>
        <form
          onSubmit={(e) =>
            toast.promise(handleSubmit(e), { loading: "Saving..." })
          }
          className="space-y-4"
        >
          <input
            name="name"
            onChange={handleAddressChange}
            className="input input-bordered w-full rounded-xl"
            placeholder="Full Name"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              name="email"
              onChange={handleAddressChange}
              className="input input-bordered w-full rounded-xl"
              placeholder="Email"
              type="email"
              required
            />
            <input
              name="phone"
              onChange={handleAddressChange}
              className="input input-bordered w-full rounded-xl"
              placeholder="Phone"
              required
            />
          </div>
          <input
            name="street"
            onChange={handleAddressChange}
            className="input input-bordered w-full rounded-xl"
            placeholder="Street Address"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              name="city"
              onChange={handleAddressChange}
              className="input input-bordered w-full rounded-xl"
              placeholder="City"
              required
            />
            <input
              name="state"
              onChange={handleAddressChange}
              className="input input-bordered w-full rounded-xl"
              placeholder="State"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              name="zip"
              onChange={handleAddressChange}
              className="input input-bordered w-full rounded-xl"
              placeholder="Zip"
              required
            />
            <input
              name="country"
              onChange={handleAddressChange}
              className="input input-bordered w-full rounded-xl"
              placeholder="Country"
              required
            />
          </div>
          <button className="btn btn-primary btn-block rounded-2xl mt-4 shadow-lg shadow-primary/20">
            Save Address
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddressModal;
