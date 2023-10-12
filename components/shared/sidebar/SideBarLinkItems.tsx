"use client";
import { CsidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBarLinkItems = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-1 flex-col gap-6 ">
      {CsidebarLinks.map((currentLink) => {
        const isActive =
          (pathName.includes(currentLink.route) &&
            currentLink.route.length > 1) ||
          pathName === currentLink.route;

        return (
          <Link
            className={`${
              isActive
                ? "primary-gradient rounded-none text-light-900"
                : "text-dark300_light900"
            } flex items-center justify-start gap-4 bg-transparent p-4`}
            href={currentLink.route}
            key={currentLink.label}
          >
            <Image
              src={currentLink.imgURL}
              alt={currentLink.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`${
                isActive ? "base-bold" : "base-medium"
              } max-lg:hidden`}
            >
              {currentLink.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarLinkItems;
