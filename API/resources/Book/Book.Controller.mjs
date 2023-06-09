import ResponseBody from "@am92/express-utils/ResponseBody";
import { OK } from "../../../config/SERVER_CONFIG.mjs";
import PageModel from "../Pages/Page.Model.mjs";
import BookModel, { listAllBookQuery } from "./Book.Model.mjs";

const listAllBook = async (request, response, next) => {
  const responseBody = new ResponseBody(
    OK,
    "Loaded books successfully",
    await listAllBookQuery()
  );
  response.body = responseBody;
  process.nextTick(next);
};
const entireData = async (request, response, next) => {
  const result = await BookModel.list();
  const responseBody = new ResponseBody(OK, "Entire Book Data", result);
  response.body = responseBody;
  process.nextTick(next);
};
const searchBook = async (request, response, next) => {
  const { id } = request.params;
  const data = await BookModel.search({ id });
  const pages = await PageModel.search({ bookId: id });
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
  const deletePage = await PageModel.remove({ bookId: request.params.id });
  const result = await BookModel.removeById(request.params.id);

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
  const { id } = request.params;
  const result = await BookModel.updateById(id, body);
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
  entireData,
};

export default BookController;
