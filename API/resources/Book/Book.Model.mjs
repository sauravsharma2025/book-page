import { Model } from "@am92/mongo-odm";
import BookSchema from "./Book.Schema.mjs";

const BookModel = new Model("book_free", BookSchema);

export default BookModel;
// export const listAllBookQuery = async () => {
//   const queryResult = BookModel.aggregate([
//     {
//       $lookup: {
//         from: "book_pages",
//         localField: "_id",
//         foreignField: "bookId",
//         pipeline: [{ $project: { content: 1, bookId: 1 } }],
//         as: "mycustom",
//       },
//     },
//     {
//       $project: {
//         title: 1,
//         totalPages: { $size: "$mycustom" },
//         pages: "$mycustom",
//       },
//     },
//   ]);

//   return queryResult;
// };
