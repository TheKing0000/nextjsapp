import NoResultFound from "@/components/shared/questions/NoResultFound";
import QuestionCard from "@/components/shared/questions/QuestionCard";
import Filter from "@/components/shared/search/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { ChomePageFilters } from "@/constants/filters";
import Link from "next/link";

const Cquestions = [
  {
    _id: "1",
    title: "Next js is awesome",
    tags: [
      { _id: "1", name: "next js" },
      { _id: "2", name: "typescript" },
    ],
    author: {
      _id: "2",
      name: "Money",
      picture: "",
    },
    upvotes: 1000000,
    views: 1000,
    answers: [],
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "React is the best library",
    tags: [
      { _id: "1", name: "next js" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "The King",
      picture: "",
    },
    upvotes: 100,
    views: 1000,
    answers: [],
    createdAt: new Date("2023-10-11T00:00:00.000Z"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex flex-row items-center  gap-5 md:flex-col md:items-start">
        <LocalSearch
          router="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions Here..."
          otherClasses="flex-1"
        />
        <Filter
          filters={ChomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <div>
        <div className="mt-10 flex w-full flex-col gap-6">
          {Cquestions.length > 0 ? (
            Cquestions.map((currentQuestion) => {
              const {
                _id,
                title,
                tags,
                author,
                upvotes,
                views,
                answers,
                createdAt,
              } = currentQuestion;
              return (
                <QuestionCard
                  key={_id}
                  _id={_id}
                  title={title}
                  tags={tags}
                  upvotes={upvotes}
                  author={author}
                  views={views}
                  answers={answers}
                  createdAt={createdAt}
                />
              );
            })
          ) : (
            <NoResultFound
              title="There is no question to show"
              description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
              discussion. our query could be the next big thing others learn from. Get
              involved! 💡"
              linkHref="/ask-question"
              linkTitle="Ask a question"
            />
          )}
        </div>
      </div>
    </>
  );
}
