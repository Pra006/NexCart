import React from "react";

const Rating = ({ value = 5 }) => {
  return (
    <div className="rating rating-xs">
      {[1, 2, 3, 4, 5].map((star) => (
        <input
          type="radio"
          key={star}
          className={`mask mask-star-2 ${star <= Math.round(value) ? "bg-orange-400" : "bg-primary/70"}`}
        />
      ))}
    </div>
  );
};

export default Rating;
