import { Schema, models, model, Document, Types } from "mongoose";
// get _id... from Documenr
export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Types.ObjectId[];
  views: number;
  upvotes: Types.ObjectId[];
  downvotes: Types.ObjectId[];
  author: Types.ObjectId;
  answers: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    views: { type: Number, default: 0, required: true },
    upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    author: { type: Schema.Types.ObjectId, ref: "User" },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  },
  { timestamps: true }
);

const Question =
  models.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
