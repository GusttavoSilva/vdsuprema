"use client";

import { motion } from "framer-motion";
import FeedbackCard from "./FeedbackCard";

interface FeedbackCarouselProps {
  feedbacks: Array<{
    name: string;
    text: string;
    rating: number;
    image?: string;
  }>;
}

export default function FeedbackCarousel({ feedbacks }: FeedbackCarouselProps) {
  const duplicatedFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 md:gap-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedFeedbacks.map((feedback, index) => (
          <div key={index} className="flex-shrink-0 w-[280px] md:w-[350px]">
            <FeedbackCard {...feedback} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
