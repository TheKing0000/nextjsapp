import QuestionForm from "@/components/shared/forms/QuestionForm";

export default function AskQuestion() {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">Ask A Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </section>
  );
}
