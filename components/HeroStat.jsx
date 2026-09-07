"use client";
import React from "react";
import { STATS } from "../assets/assets";
const HeroStat = () => {
  return (
    <div className="mt-12 lg:flexCenter lg:justify-start gap-8">
      <div className="stats glass">
        {STATS.map((item) => (
          <div key={item.id} className="stat">
            <div className={`stat-figure ${item.color}`}>
              {item.type === "avatars" ? (
                <div className="avatar-group -space-x-6">
                  {item.avatars.map((img, index) => (
                    <div key={index} className="avatar">
                      <div className="w-9">
                        <img src={img} alt="Customer" />
                      </div>
                    </div>
                  ))}
                  <div className="avatar avatar-paceholder">
                    <div className="bg-neutral text-neutral-content w-9">
                      <span>{item.placeholder}</span>
                    </div>
                  </div>
                </div>
              ) : (
                item.icon
              )}
            </div>
            <div className="stat-title">{item.title}</div>
            <div
              className={`stat-value ${item.type !== "avatars" ? item.color : ""}`}
            >
              {item.value}
            </div>
            <div
              className={`stat-desc ${item.type === "avatars" ? item.color : ""}`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStat;
