"use client";

import { useState } from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className='mt-12 flex flex-wrap justify-center gap-3'>
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type='button'
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-3 font-poppins text-sm font-medium transition-colors ${
              isActive
                ? "bg-brand-lime text-brand-dark"
                : "bg-[#f4f4f4] text-brand-dark hover:bg-[#e9e9e9]"
            }`}>
            {category}
          </button>
        );
      })}

      <button
        type='button'
        className='rounded-full bg-[#f4f4f4] px-5 py-3 font-poppins text-sm font-medium text-brand-dark transition-colors hover:bg-[#e9e9e9]'>
        + More
      </button>
    </div>
  );
}
