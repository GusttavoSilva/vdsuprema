import Image from "next/image";

interface FeedbackCardProps {
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export default function FeedbackCard({
  name,
  text,
  rating,
  image,
}: FeedbackCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg h-full">
      <div className="flex items-center mb-3 md:mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden mr-3 md:mr-4 flex-shrink-0">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-lg md:text-xl">
              {name[0]}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
            {name}
          </h3>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm md:text-base">
                ⭐
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}
