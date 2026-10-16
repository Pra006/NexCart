"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { StoreIcon, ShieldCheck, ShieldX } from "lucide-react";
import StoreCard from "@/components/admin/StoreCard";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import { ADMIN_STORES_DATA } from "@/assets/assets";

const MarketPlace = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStores = async () => {
    setStores(ADMIN_STORES_DATA);
    setLoading(false);
  };
  const toggleIsActive = async (storeId) => {};

  useEffect(() => {
    fetchStores();
  }, []);

  if (loading) return <Loading />;
  return (
    <div>
      <Title
        headingStart="Marketplace"
        headingEnd="Hub"
        subtext="Vendor monitoring & access control"
        hasAction={false}
      />
       {!stores.length ? (
        <div className="flexCenter flex-col min-h-[40vh] opacity-30 mt-10">
          <StoreIcon size={64} strokeWidth={1} />
          <h5 className="mt-4">No Vendors Found</h5>
        </div>
      ) : (
        <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
          {stores.map(store => (
            <div key={store.id} className="border border-base-300 rounded-4xl p-6 flex flex-col justify-between">
              <StoreCard store={store} />
              <div className="flexBetween mt-6 pt-4 border-t border-dashed border-base-300">
                <div className={`badge badge-sm font-bold gap-1 py-3 ${store.isActive ? 'badge-success text-white' : 'badge-ghost'}`}>
                  {store.isActive ? <ShieldCheck size={14} /> : <ShieldX size={14} />} {store.isActive ? 'Live' : 'Paused'}
                </div>
                <input type="checkbox" className="toggle toggle-primary toggle-sm" checked={store.isActive} onChange={() => toast.promise(toggleIsActive(store.id), { loading: "Updating data..." })} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default MarketPlace;
