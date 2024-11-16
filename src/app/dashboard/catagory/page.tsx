import { Card } from "@/components/Card";

const afterBasePath = "/dashboard/catagory";
// Please link should be absolute
const cards = [
  { title: "Informative Advertising", link: `${afterBasePath}/informative`, paragraph: "Educate about product or service, increase awareness" },
  { title: "Persuasive Advertising", link: `${afterBasePath}/persuasive`, paragraph: "Convince customers to take action" },
  { title: "Comparative Advertising", link: `${afterBasePath}/comparative`, paragraph: "Compare products or services side by side" },
  { title: "Reminder Advertising", link: `${afterBasePath}/reminder`, paragraph: "Remind customers about a product or service" },
];

const CardGrid = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            link={card.link}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
