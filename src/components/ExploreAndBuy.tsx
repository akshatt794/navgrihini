import React from "react";
import { Eye } from "lucide-react";
import { exploreAndBuyData } from "../data/exploreandbuy";

const ExploreAndBuy: React.FC = () => {
  return (
    <section className="bg-[#fbf5ee] py-10">
      <h2 className="text-4xl text-center font-serif text-[#174e4f] font-bold mb-10">
        Explore and Buy
      </h2>
      <div className="flex flex-wrap gap-8 justify-center px-2">
        {exploreAndBuyData.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-xl rounded-2xl w-[290px] overflow-hidden transition-transform hover:scale-105"
            style={{ minHeight: 400 }}
          >
            {/* Views Badge */}
            <div className="absolute top-3 left-3 bg-black/70 text-white flex items-center gap-1 px-2 py-1 rounded-md text-sm z-10">
              <Eye size={18} />
              <span>{item.views}</span>
            </div>

            {/* Video */}
            <video
              src={item.video}
              poster={item.poster}
              className="w-full h-[350px] object-cover"
              autoPlay={false}
              loop
              muted
              controls
              playsInline
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />

            {/* Card Content */}
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/70 via-black/10 to-transparent px-5 py-4">
              <h3 className="text-lg font-medium text-white drop-shadow">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreAndBuy;
