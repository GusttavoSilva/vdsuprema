interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-sans">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 flex-1">{description}</p>
      </div>
    </div>
  );
}
