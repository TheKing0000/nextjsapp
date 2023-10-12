import Link from "next/link";
import Image from "next/image";
import RenderTag from "../RenderTag";
const hotQuestions = [
  {
    _id: 1,
    title:
      "Haslkdjhas,asbjf,masélfihasflékn sliufghslkeu fglaksguflksajfgbl kdsjgflaskd sdkfjhdsklfj skdfljhslkdfhjfdslkjh",
  },
  { _id: 2, title: "Haslkdjhsasdfa asélfkhsaf asél  w.,enfsadl fihasflékn" },
  {
    _id: 3,
    title: "Haslkdjhsalfkjha aséas,.dfndsaf, lkasjflasknflsdflfihasflékn",
  },
  {
    _id: 4,
    title: "Hasl kd jhsdfjha asélfkhsaf asélasf.,nsaf., asldkfihasflékn",
  },
  {
    _id: 5,
    title:
      "Has lkdj  adfsafadsfdsasflkafklasknlhsalfkjha asélfkhsaf asélfihasflékn",
  },
];
const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 500,
  },
  { _id: "2", name: "nextjs", totalQuestions: 20 },
  {
    _id: "3",
    name: "react",
    totalQuestions: 15,
  },
  {
    _id: "4",
    name: "typescript",
    totalQuestions: 5,
  },
  {
    _id: "5",
    name: "tailwindcss",
    totalQuestions: 1,
  },
];
const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border fixed right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none ">
      {/* TOP */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((currentQuestion) => {
            return (
              <Link
                href={"/"}
                key={currentQuestion._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700 break-all ">
                  {currentQuestion.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  alt="right arrow"
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      {/* BOTTOM */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((currentTag) => {
            return (
              <RenderTag
                key={currentTag._id}
                _id={currentTag._id}
                name={currentTag.name}
                totalQuestions={currentTag.totalQuestions}
                showCount={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
