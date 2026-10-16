"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Truck, Store, Package, DollarSign } from "lucide-react";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import OrdersChart from "@/components/admin/OrdersChart";
import { ADMIN_DASHBOARD_DATA } from "@/assets/assets";

const AdminDashboard = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    products: 0,
    revenue: 0,
    orders: 0,
    stores: 0,
    allOrders: [],
  });

  const stats = [
    {
      label: "Total Products",
      value: data.products,
      icon: Package,
      color: "text-info",
    },
    {
      label: "Total Revenue",
      value: `${currency}${data.revenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-success",
    },
    {
      label: "Total Orders",
      value: data.orders,
      icon: Truck,
      color: "text-primary",
    },
    {
      label: "Total Stores",
      value: data.stores,
      icon: Store,
      color: "text-warning",
    },
  ];
  useEffect(() => {
    setData(ADMIN_DASHBOARD_DATA);
    setLoading(false);
  }, []);
  if (loading) return <Loading />;
  return (
    <div>
      <Title headingStart="Admin" headingEnd="Dashboard" />
      <div className="stats stats-vertical lg:stats-horizontal w-full bg-base-200/50 border border-base-300 rounded-4xl mt-6 mb-12">
        {stats.map((s, i) => (
          <div key={i} className="stat lg:py-11">
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
      {/* Chart Section */}
      <div className="bg-base-100 border border-base-300 rounded-4xl p-6 lg:p-10">
        <h5 className="mb-8 font-bold opacity-60">Revenue & Order Analytics</h5>
        <div className="w-full h-100">
          <OrdersChart allOrders={data.allOrders} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
