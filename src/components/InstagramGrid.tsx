import React from 'react';

const instagramImages = [
  "/images/insta1.jpg",
  "/images/insta2.jpg",
  "/images/insta3.jpg",
  "/images/insta4.jpg",
  "/images/insta5.jpg",
  "/images/insta6.jpg"
];

export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {instagramImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Instagram ${i + 1}`}
          className="w-full h-[250px] object-cover rounded"
        />
      ))}
    </div>
  );
}
