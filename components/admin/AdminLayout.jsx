"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Loading from "../Loading";
import {
  HomeIcon,
  ShieldCheckIcon,
  StoreIcon,
  TicketPercentIcon,
  ArrowRightIcon,
  PanelLeftOpen,
  ShieldAlertIcon,
} from "lucide-react";
import { ADMIN_DASHBOARD_DATA, STORE_DATA } from "../../assets/assets";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  { name: "Marketplace", href: "/admin/stores", icon: StoreIcon },
  {
    name: "Store Requests",
    href: "/admin/store-requests",
    icon: ShieldCheckIcon,
  },
  { name: "Coupons", href: "/admin/coupons", icon: TicketPercentIcon },
];

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchIsAdmin = async () => {
    setIsAdmin(ADMIN_DASHBOARD_DATA);
    setLoading(false);
  };
  useEffect(() => {
    fetchIsAdmin();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!isAdmin)
    return (
      <div className="min-h-[80vh] flexCenter flex-col gap-4 opacity-50">
        <StoreIcon size={64} strokeWidth={1} />
        <h2 className="font-bold">Access Denied</h2>
        <button
          onClick={() => router.push("/")}
          className="btn btn-primary rounded-2xl px-10"
        >
          Back to Shop
        </button>
      </div>
    );
  return (
    <div className="drawer lg:drawer-open">
      <input
        id="admin-drawer"
        type="checkbox"
        className="drawer-toggle"
        defaultChecked
      />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full z-40 bg-base-200/50 backdrop-blur-sm border-b border-base-300 px-4 lg:px-8 sticky top-0 flexBetween">
          <div className="flexStart gap-2">
            <label htmlFor="admin-drawer" className="btn btn-square btn-ghost">
              <PanelLeftOpen size={19} />
            </label>
            <Link
              href="/"
              className="relative text-3xl font-semibold text-slate-700"
            >
              Nex<span className="text-secondary">io.</span>
            </Link>
          </div>

          <div className="flexCenter gap-4">
            <div className="flex flex-col items-end leading-none">
              <span className="text-[10px] uppercase font-bold opacity-40">
                Control Center
              </span>
              <span className="text-xs font-bold">User</span>
            </div>
            UserButton
          </div>
        </nav>

        {/* Page Content  */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</div>
      </div>
      <div className="drawer-side is-drawer-close:overflow-visible z-50">
        <label
          htmlFor="admin-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 border-r border-base-300">
          {/* Admin Profile */}
          <div className="flexCenter flex-col gap-2 mx-auto py-8 is-drawer-close:py-5 border-b-2 border-base-300 w-full">
            <div className="w-20 is-drawer-close:w-10 flex items-center justify-center">
              <ShieldCheckIcon
                size={44}
                className="text-primary is-drawer-close:size-6"
              />
            </div>
            <h5 className="font-bold tracking-tight is-drawer-close:hidden">
              Admin Panel
            </h5>
            <div className="badge badge-secondary badge-xs py-2 font-bold tracking-widest is-drawer-close:hidden">
              SYSTEM AUTH
            </div>
          </div>

          {/* Navigation Items */}
          <ul className="menu w-full py-4 space-y-1 p-0">
            {sidebarLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-6 is-drawer-close:px-4 py-2.5 rounded-none transition ${
                      active
                        ? "bg-primary/50 text-primary-content font-bold border-r-4 border-primary-content"
                        : "text-base-content/60 hover:bg-base-100 hover:text-base-content"
                    }`}
                  >
                    <link.icon size={18} strokeWidth={active ? 2.4 : 2} />
                    <span className="hidden is-drawer-open:block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Footer Shortcut */}
          <div className="mt-auto mb-2 px-2 w-full">
            <Link href="/" className="btn btn-ghost btn-sm btn-block">
              <ArrowRightIcon size={16} className="rotate-180" />
              <span className="is-drawer-close:hidden">Exit Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
