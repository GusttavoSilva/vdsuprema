import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <div className="group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center">
      {image ? (
        <div className="w-full aspect-[4/3] relative mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      ) : (
        <div className="w-16 h-16 flex items-center justify-center mb-4 text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white font-sans">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
}
