import ResponseBody from "@am92/express-utils/ResponseBody";
import { OK } from "../../../config/SERVER_CONFIG.mjs";
import PageModel from "../Pages/Page.Model.mjs";
import BookModel from "./Book.Model.mjs";

const listAllBook = async (request, response, next) => {
  const queryResult = await BookModel.aggregate([
    {
      $lookup: {
        from: "book_pages",
        localField: "_id",
        foreignField: "bookId",
        pipeline: [{ $project: { content: 1, bookId: 1 } }],
        as: "mycustom",
      },
    },
    {
      $project: {
        title: 1,
        totalPages: { $size: "$mycustom" },
        pages: "$mycustom",
      },
    },
  ]);

  const responseBody = new ResponseBody(
    OK,
    "Loaded books successfully",
    queryResult
  );
  response.body = responseBody;
  process.nextTick(next);
};

const searchBook = async (request, response, next) => {
  const { body } = request;
  const data = await BookModel.search(body);
  const pages = await PageModel.search({ bookId: body });
  const responseBody = new ResponseBody(
    OK,
    "Books Searched Successfully",
    data,
    pages
  );
  response.body = responseBody;
  process.nextTick(next);
};

const deleteBookById = async (request, response, next) => {
  const { body } = request;
  const deletePage = await PageModel.remove({ bookId: body });
  const result = await BookModel.removeById(body);

  const responseBody = new ResponseBody(
    OK,
    "Book Record deleted Successfully",
    result,
    deletePage
  );
  response.body = responseBody;
  process.nextTick(next);
};
const updateBookById = async (request, response, next) => {
  const { body } = request;

  const result = await BookModel.updateById(body._id, body);
  const responseBody = new ResponseBody(
    OK,
    "Books Records Updated Successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};
const createBook = async (request, response, next) => {
  const { body } = request;
  const data = await BookModel.createOne(body);
  const bookName = `Book name is ${data.title}`;
  const responseBody = new ResponseBody(OK, "New Book Created", bookName);
  response.body = responseBody;
  process.nextTick(next);
};

const BookController = {
  createBook,
  searchBook,
  deleteBookById,
  updateBookById,
  listAllBook,
};

export default BookController;
