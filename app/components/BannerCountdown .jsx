"use client";
import React, { useEffect, useRef, useState } from "react";
import { ASSETS } from "../assets/assets";

const BannerCountdown = () => {
  const targetRef = useRef(Date.now() + 15 * 24 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState(targetRef.current - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetRef.current - Date.now();

      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const format = (n) => String(n).padStart(2, "0");

  return (
    <section className="py-16 sm:px-12">
      <div
        className="flex flex-col rounded-2xl p-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.banner_countdown})` }}
      >
        <div className="sm:px-4 md:px-12">
          <div className="max-w-lg">
            {/* DAISYUI COUNTDOWN TIMER */}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              {/* DAYS */}
              <div className="flex flex-col p-2 bg-white text-black rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": Number(format(days)) }}
                    aria-label={days}
                  />
                </span>
                days
              </div>

              {/* HOURS */}
              <div className="flex flex-col p-2 bg-white text-black rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": Number(format(hours)) }}
                    aria-label={hours}
                  />
                </span>
                hours
              </div>

              {/* MINUTES */}
              <div className="flex flex-col p-2 bg-white text-black rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": Number(format(minutes)) }}
                    aria-label={minutes}
                  />
                </span>
                min
              </div>

              {/* SECONDS */}
              <div className="hidden sm:flex flex-col p-2 bg-white text-black rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": Number(format(seconds)) }}
                    aria-label={seconds}
                  />
                </span>
                sec
              </div>
            </div>

            <h2 className="text-white my-4">Limited Time Offer!</h2>
            <p className="text-white/70 mb-6">
              Get 20% off on all our designs. Limited time offer. Grab it now!
            </p>

            <button className="btn btn-primary text-primary-content mb-6">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCountdown;
