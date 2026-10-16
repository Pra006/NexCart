"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClipboardListIcon, CheckIcon, XIcon } from "lucide-react";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import StoreCard from "@/components/admin/StoreCard";
import { ADMIN_STORES_DATA } from "@/assets/assets";

const StoreRequests = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStores = async () => {
    setStores(ADMIN_STORES_DATA);
    setLoading(false);
  };

  const handleAction = async (storeId, status) => {};

  useEffect(() => {
    fetchStores();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Title
        headingStart="Store"
        headingEnd="Requests"
        subtext="Review and verify new vendor applications"
      />

      {!stores.length ? (
        <div className="flexCenter flex-col min-h-[40vh] opacity-30 mt-10">
          <ClipboardListIcon size={64} strokeWidth={1} />
          <h5 className="mt-4">No Pending Applications</h5>
        </div>
      ) : (
        <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
          {stores.map((store) => (
            <div
              key={store.id}
              className="border border-base-300 rounded-4xl p-6 flex flex-col justify-between hover:border-primary/40 transition-all shadow-sm"
            >
              <StoreCard store={store} />

              <div className="flexBetween mt-6 pt-4 border-t border-dashed border-base-300">
                <button
                  onClick={() => handleAction(store.id, "rejected")}
                  className="btn btn-ghost btn-sm text-error font-bold gap-2"
                >
                  <XIcon size={16} /> Reject
                </button>

                <button
                  onClick={() => handleAction(store.id, "approved")}
                  className="btn btn-primary btn-sm rounded-xl px-6 gap-2"
                >
                  <CheckIcon size={16} /> Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoreRequests;
