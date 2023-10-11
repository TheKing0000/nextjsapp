import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
interface INoResultFound {
  title: string;
  description: string;
  linkHref: string;
  linkTitle: string;
}
const NoResultFound = ({
  title,
  description,
  linkHref,
  linkTitle,
}: INoResultFound) => {
  return (
    <div className=" flex w-full flex-col items-center justify-center">
      <Image
        src={"/assets/images/light-illustration.png"}
        alt="No question found"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src={"/assets/images/dark-illustration.png"}
        alt="No question found"
        width={270}
        height={200}
        className=" hidden object-contain dark:block"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={linkHref}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900 ">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResultFound;
