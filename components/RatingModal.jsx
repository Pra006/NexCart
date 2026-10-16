"use client";
import { useState } from "react";
import { XIcon, MessageSquareIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useRatingStore } from "@/lib/zustand/ratingStore";

const RatingModal = ({ ratingModal, setRatingModal }) => {
  const addRating = useRatingStore((state) => state.addRating);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRating(null);
  };

  return (
    <div className="modal modal-open backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="modal-box rounded-4xl p-8 border border-base-300 max-w-sm"
      >
        <div className="flexBetween mb-6">
          <h5 className="flexStart gap-2 font-bold">
            <MessageSquareIcon size={20} className="text-primary" /> Rate
          </h5>
          <button
            type="button"
            onClick={() => setRatingModal(null)}
            className="btn btn-ghost btn-xs btn-circle"
          >
            <XIcon size={18} />
          </button>
        </div>
        <div className="flexCenter flex-col gap-2 bg-base-200/50 py-6 rounded-3xl mb-4">
          <div className="rating rating-lg gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <input
                key={n}
                type="radio"
                className="mask mask-star-2 bg-warning"
                checked={rating === n}
                onChange={() => setRating(n)}
              />
            ))}
          </div>
          <h6 className="text-primary">{rating} / 5 Stars</h6>
        </div>
        <textarea
          required
          minLength={5}
          className="textarea textarea-bordered w-full rounded-2xl h-24 mb-4"
          placeholder="Review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button className="btn btn-primary btn-block rounded-2xl">
          Submit
        </button>
      </form>
      <div className="modal-backdrop" onClick={() => setRatingModal(null)}>
        Close
      </div>
    </div>
  );
};

export default RatingModal;
