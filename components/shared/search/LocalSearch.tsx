import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
interface ILocalSearch {
  router: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearch = ({
  router,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: ILocalSearch) => {
  return (
    <div className="relative w-full ">
      <div
        className={`${otherClasses} background-light800_darkgradient relative flex min-h-[56px] grow items-center  gap-4 rounded-xl px-4`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            width={24}
            height={24}
            alt="search icon"
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none dark:text-white"
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            width={24}
            height={24}
            alt="search icon"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearch;
