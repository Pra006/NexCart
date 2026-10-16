"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { STORE_DASHBOARD_DATA } from "@/assets/assets";
import toast from "react-hot-toast";
import {
  TrendingUpIcon,
  BoxIcon,
  ShoppingBagIcon,
  MessagesSquareIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import Loading from "@/components/Loading";
import Title from "@/components/Title";

const StoreDashboard = () => {
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    totalProducts: 0,
    totalEarnings: 0,
    totalOrders: 0,
    ratings: [],
  });
  const stats = [
    {
      label: "Revenue",
      value: `${currency}${data.totalEarnings.toLocaleString()}`,
      icon: TrendingUpIcon,
      color: "text-success",
    },
    {
      label: "Orders",
      value: data.totalOrders,
      icon: ShoppingBagIcon,
      color: "text-primary",
    },
    {
      label: "Items",
      value: data.totalProducts,
      icon: BoxIcon,
      color: "text-info",
    },
    {
      label: "Reviews",
      value: data.ratings.length,
      icon: MessagesSquareIcon,
      color: "text-warning",
    },
  ];

  useEffect(() => {
    setData(STORE_DASHBOARD_DATA);
    setLoading(false);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pb-20 px-2">
      <Title
        headingStart={"Store"}
        headingEnd={"Insights"}
        hasAction={"Add New Product"}
        linkTo="/store/add-product"
      />
      <div className="stats stats-vertical lg:stats-horizontal w-full bg-base-200/50 border border-base-300 rounded-4xl mt-4 mb-12">
        {stats.map((s, i) => (
          <div key={i} className="stat lg:py-11 transition-colors">
            <div className={`stat-figure ${s.color} opacity-40`}>
              <s.icon size={28} />
            </div>
            <div className="stat-title uppercase text-[10px] font-bold tracking-widest">
              {s.label}
            </div>
            <div className="stat-value text-2xl">{s.value}</div>
          </div>
        ))}
      </div>
      <h4 className="mb-6 opacity-60">Recent Feedback</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl">
        {data.ratings.map((review, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 p-6 border border-base-300 rounded-4xl transition-all"
          >
            <div className="flex-1 flexStart gap-4 items-start">
              <div className="mask mask-squircle size-12 bg-base-200 shrink-0">
                <Image
                  src={review.user.image}
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h6 className="font-bold leading-none">{review.user.name}</h6>
                <p className="text-xs opacity-50 mt-2 italic">
                  "{review.review}"
                </p>
              </div>
            </div>

            <div className="md:w-56 flex flex-col md:items-end justify-between gap-4 md:border-l md:border-base-200 md:pl-6">
              <div className="md:text-right space-y-1">
                <p className="text-[10px] font-bold opacity-30 truncate w-40">
                  {review.product?.name}
                </p>
                <div className="rating rating-xs gap-0.5 md:justify-end">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`mask mask-star-2 size-3 ${review.rating >= star ? "bg-warning" : "bg-base-300"}`}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => router.push(`/product/${review.product.id}`)}
                className="btn btn-ghost btn-xs gap-2 opacity-50 hover:opacity-100"
              >
                View <ArrowUpRightIcon size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDashboard;
