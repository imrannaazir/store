"use client";

import { useState } from "react";
import { PiCookingPot } from "react-icons/pi";
import { LiaAngleDownSolid } from "react-icons/lia";
import Link from "next/link";
import Container from "@/components/ui/container";

export default function MobileMenuNav() {
  const categories = [
    {
      id: 1,
      name: "Cooking",
      icon: PiCookingPot,
      route: "/spices ",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "/spices",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 2,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 3,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 4,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 5,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 6,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 7,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 8,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 9,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 10,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
  ];

  function Category({ category }) {
    const { icon: ReactIcon, name, sub_categories } = category || {};

    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        className="
        font-semibold
        text-lg
        
      "
      >
        <Link
          href={`/`}
          className="
        flex
        items-center
        gap-5  
        text-white
       
      "
        >
          <ReactIcon className="text-4xl" />
          <p
            className="
          
          flex
          items-center
          gap-3"
          >
            <span>{name}</span>
            <LiaAngleDownSolid
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? "rotate-180" : "rotate-0"}
            />
          </p>
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <div className="flex flex-col gap-5 justify-between  ">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Container>
  );
}
