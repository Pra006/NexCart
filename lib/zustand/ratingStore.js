import { create } from "zustand"
import { RATINGS_DATA } from "@/assets/assets"

export const useRatingStore = create((set) => ({
    ratings: RATINGS_DATA,

    AddRating: (newRating) =>
        set((state) => ({
            ratings: [...state.ratings, newRating]
        }))
}))