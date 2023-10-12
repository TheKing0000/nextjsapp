import { SignedOut } from "@clerk/nextjs";
import SideBarLinkItems from "./SideBarLinkItems";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border fixed left-0 top-0 flex h-screen  flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <SideBarLinkItems />

      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href={"/sign-in"}>
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg p-4 shadow-none">
              <Image
                src={"/assets/icons/account.svg"}
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log in
              </span>
            </Button>
          </Link>

          <Link href={"/sign-up"}>
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg p-4 shadow-none">
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
