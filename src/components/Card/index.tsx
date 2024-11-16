type CardProps = {
  title: string;
  link: string;
  paragraph: string;
}

export const Card = ({ title, link, paragraph }: CardProps) => {
  return (
    <a
      href={link}
      className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-indigo-600"
    >
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-100">{paragraph}</p>
      </div>
    </a>
  );
};
