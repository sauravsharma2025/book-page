import ResponseBody from "@am92/express-utils/ResponseBody";
import PageModel from "../Pages/Page.Model.mjs";
import BookModel from "./Book.Model.mjs";

const listAllBook = async (request, response, next) => {
  const result = await BookModel.findMany();
  const responseBody = new ResponseBody(
    200,
    "Loaded book successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};

async function searchBook(request, response, next) {
  const { body } = request;
  const data = await BookModel.search(body);
  const pages = await PageModel.search({ bookId: body });
  const responseBody = new ResponseBody(
    200,
    "Books Searched Successfully",
    data,
    pages
  );
  response.body = responseBody;
  process.nextTick(next);
}

const deleteBookById = async (request, response, next) => {
  const { body } = request;
  const deletePage = await PageModel.remove({ bookId: body });
  const result = await BookModel.removeById(body);

  const responseBody = new ResponseBody(
    200,
    "Book Record deleted Successfully",
    result,
    deletePage
  );
  response.body = responseBody;
  process.nextTick(next);
};
const updateBookById = async (request, response, next) => {
  const { body } = request;
  console.log("SK@", body);
  const result = await BookModel.updateById(body._id, body);
  const responseBody = new ResponseBody(
    200,
    "Books Records Updated Successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};
async function createBook(request, response, next) {
  const { body } = request;
  const data = await BookModel.createOne(body);
  const responseBody = new ResponseBody(200, "New Book Created", data);
  response.body = responseBody;
  process.nextTick(next);
}

const BookController = {
  createBook,
  searchBook,
  deleteBookById,
  updateBookById,
  listAllBook,
};

export default BookController;
