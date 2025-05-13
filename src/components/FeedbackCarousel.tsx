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
  // Reduzindo para apenas uma duplicação para melhor performance
  const duplicatedFeedbacks = [...feedbacks, ...feedbacks];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 md:gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          willChange: "transform", // otimização de performance
        }}
      >
        {duplicatedFeedbacks.map((feedback, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] md:w-[300px]"
            style={{
              contain: "paint layout", // otimização de performance
            }}
          >
            <FeedbackCard {...feedback} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
