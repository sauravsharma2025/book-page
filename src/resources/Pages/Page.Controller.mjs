import ResponseBody from "@am92/express-utils/ResponseBody";
import PageModel from "./Page.Model.mjs";

const listAllPageByBook = async (request, response, next) => {
  const { body } = request;
  console.log("SK@", body);
  const result = await PageModel.findManyBy({ bookId: body });
  const responseBody = new ResponseBody(
    200,
    "Loaded Pages successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};

const searchPageById = async (request, response, next) => {
  const { body } = request;
  const result = await PageModel.search(body);
  const responseBody = new ResponseBody(
    200,
    "Page Searched Successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};
const deletePageById = async (request, response, next) => {
  const { body } = request;
  const result = await PageModel.removeById(body);
  const responseBody = new ResponseBody(
    200,
    "Page Record deleted Successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};
const updatePageById = async (request, response, next) => {
  const { body } = request;
  console.log("SK@", body);
  const result = await PageModel.updateById(body._id, body);
  const responseBody = new ResponseBody(
    200,
    "Page Records Updated Successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};
const createPage = async (request, response, next) => {
  const { body } = request;
  const data = await PageModel.createOne(body);
  const responseBody = new ResponseBody(200, "New Page Created", data);
  response.body = responseBody;
  process.nextTick(next);
};

const BookController = {
  createPage,
  searchPageById,
  deletePageById,
  updatePageById,
  listAllPageByBook,
};

export default BookController;
