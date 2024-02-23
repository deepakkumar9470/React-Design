import React from "react";
import Card from "./Card";
import { relatedCardsData } from "../../../data/data";

const RelatedCard = () => {
  return (
    <div>
      <h2 className="text-mainDark text-3xl tracking-wide font-medium py-6 mt-6">
        Related deals you might like for
      </h2>

      <div className="w-full flex-col md:flex md:flex-row md:items-center gap-4 md:gap-6">
        {relatedCardsData?.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCard;
