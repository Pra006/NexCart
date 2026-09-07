"use client";
import ProductCard from "@/components/ProductCard";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MailIcon, MapPinCheck } from "lucide-react";
import Title from "@/components/Title";
import { STORE_DATA, PRODUCTS_DATA } from "@/assets/assets";

const Storepage = () => {
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const [storeInfo, setStoreInfo] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchStoreData = async () => {
    const store = STORE_DATA;
    const filteredProducts = PRODUCTS_DATA.filter(
      (product) =>
        product.store?.username === username ||
        product.storeId === store.id,
    );

    setStoreInfo(store);
    setProducts(filteredProducts);
    setLoading(false);
  };

  useEffect(() => {
    fetchStoreData();
  }, [username]);
  return loading ? (
    <Loading />
  ) : (
    <div className="pb-16 pt-2">
      <div className="max-w-7xl mx-auto">
        {storeInfo && (
          <div className="bg-base-200/50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 mt-2 mb-11">
            <div className="avatar">
              <div className="mask mask-squircle size-33 rounded-xl ring-1 ring-base-300">
                <Image
                  src={storeInfo.logo}
                  alt={storeInfo.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flexStart gap-3 mb-1">
                <h2 className="text-2xl">{storeInfo.name}</h2>
                <div className="badge badge-primary badge-sm opacity-50 relative bottom-3">
                  {" "}
                  Verified
                </div>
                <p className="max-w-2xl line-clamp-2 mb-4">
                  {storeInfo.description}
                </p>
                <div className="flexStart flex-wrap gap-x-6 gap-y-2">
                  <div className="flexStart gap-2 opacity-70">
                    <MapPinCheck size={14} className="text-primary" />
                    <h6>{storeInfo.address}</h6>
                  </div>

                  <div className="flexStart gap-2 opacity-70">
                    <MailIcon size={14} className="text-primary" />
                    <h6>{storeInfo.email}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-2">
          <Title
            headingStart={storeInfo ? storeInfo.name : "Shop"}
            subtext={`Discover our Shop collection . Showing ${products.length} products`}
            hasAction={false}
          />
        </div>

        <div className="grid grid-cols-2 sm:flex flex-wrap justify-between gap-3 lg:gap-6 mt-11">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storepage;
