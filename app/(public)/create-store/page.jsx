"use client";

import { useeffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  StoreIcon,
  ImagePlusIcon,
  Loader2,
  HourglassIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";
import Loading from "@/components/Loading";
import Title from "@/components/Title";

const page = () => {
  const router = useRouter();
  const [state, setState] = useState({
    status: "",
    message: "",
    loading: true,
    uploading: false,
  });
  const [form, setForm] = useState({
    name: "",
    username: "",
    description: "",
    email: "",
    contact: "",
    address: "",
    logo: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  // if (state.loading) {
  //   return <Loading />;
  // }
  return (
    <div className="mb-16 mt-2">
      {!state.status ? (
        <form onSubmit={handleSubmit} className="max-w-5xl space-y-10">
          <Title
            headingStart="Start Your"
            headingEnd="Business"
            subtext="john as a seller and reach more customer."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
            <label className="relative aspect-square rounded-4xl bg-base-200 border-2 border-dashed border-base-300 flexCenter cursor-pointer overflow-hidden group">
              {form.logo ? (
                <Image
                  src={URL.createObjectURL(form.logo)}
                  alt="logo"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flexCenter flex-col gap-2 opacity-30">
                  <ImagePlusIcon size={40} />
                  <span className="text-[10px] font-bold uppercase">Logo</span>
                </div>
              )}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setForm({ ...form, logo: e.target.files[0] })}
              />
            </label>

            <div className="grid grid-cols-1 gap-4">
              {["username", "name", "email", "contact"].map((f) => (
                <input
                  key={f}
                  required
                  placeholder={`Store ${f}`}
                  className="input input-bordered rounded-xl w-full"
                  value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                />
              ))}
              <textarea
                required
                placeholder="Store Address"
                className="textarea textarea-bordered rounded-xl w-full sm:col-span-2 h-20"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
              <textarea
                required
                placeholder="Store Description"
                className="textarea textarea-bordered rounded-xl w-full sm:col-span-2 h-24"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
              <button
                disabled={state.uploading}
                className="btn btn-primary rounded-2xl btn-block sm:col-span-2"
              >
                {state.uploading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <StoreIcon size={18} />
                )}{" "}
                {state.uploading ? "Submitting..." : "Register Store"}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-16 mt-2 hero min-h-[50vh] bg-base-200/50 rounded-3xl border-2 border-dashed border-base-300 px-6">
          <div className="hero-content flex-col text-center opacity-60">
            {state.status === "pending" && (
              <HourglassIcon size={64} className="text-warning animate-pulse" />
            )}
            {state.status === "approved" && (
              <CheckCircleIcon size={64} className="text-success" />
            )}
            {state.status === "rejected" && (
              <XCircleIcon size={64} className="text-error" />
            )}
            <h5 className="capitalize mt-4 font-bold">
              Request {state.status}
            </h5>
            <p className="max-w-md text-sm">{state.message}</p>
            {state.status === "rejected" && (
              <button
                onClick={() => setState({ ...state, status: "" })}
                className="btn btn-outline btn-sm rounded-full mt-4"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
