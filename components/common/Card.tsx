import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <p className="font-bold text-blue-500">{price}</p>
      </div>
    </div>
  );
};

export default Card;
