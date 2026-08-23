import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content flex-col gap-4 text-center">
        <span className="loading loading-ring w-20 text-primary"></span>

        <div className="space-y-2">
          <h4 className="tracking-tight opacity-80">{message}</h4>
          <progress className="progress w-56"></progress>
        </div>

        <h6 className="uppercase tracking-[0.3em] opacity-20 mt-4 text-[10px]">
          NexCart E-Commerce
        </h6>
      </div>
    </div>
  );
};

export default Loading;
