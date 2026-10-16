"use client";
import Image from "next/image";
import { MapPin, Mail, Phone, CalendarIcon } from "lucide-react";

const StoreCard = ({ store }) => {
  return (
    <div className="space-y-4">
      <div className="flexStart gap-4">
        <div className="avatar">
          <div className="w-16 h-16 mask mask-squircle bg-base-200">
            <Image
              src={store.logo}
              alt={store.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>
        <div className="min-w-0">
          <h5 className="font-bold leading-tight truncate">{store.name}</h5>
          <p className="text-[10px] uppercase font-bold text-primary tracking-widest">
            @{store.username}
          </p>
        </div>
      </div>

      <p className="text-xs opacity-70 line-clamp-2">{store.description}</p>

      <div className="grid grid-cols-1 gap-2 text-[11px] font-medium opacity-60">
        <div className="flexStart gap-2">
          <MapPin size={14} /> {store.address}
        </div>
        <div className="flexStart gap-2">
          <Mail size={14} /> {store.email}
        </div>
        <div className="flexStart gap-2">
          <Phone size={14} /> {store.contact}
        </div>
      </div>

      <div className="flexStart gap-3 pt-2 border-t border-base-200">
        <div className="avatar">
          <div className="w-8 h-8 rounded-full">
            <Image src={store.user.image} alt="owner" width={32} height={32} />
          </div>
        </div>
        <div className="leading-tight">
          <p className="text-[10px] font-bold uppercase">{store.user.name}</p>
          <p className="text-[10px] opacity-50">
            {new Date(store.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
