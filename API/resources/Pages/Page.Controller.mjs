import ResponseBody from "@am92/express-utils/ResponseBody";
import { OK } from "../../../config/SERVER_CONFIG.mjs";
import PageModel from "./Page.Model.mjs";

const listAllPageByBook = async (request, response, next) => {
  const { body } = request;

  const result = await PageModel.findManyBy({ bookId: body });
  const responseBody = new ResponseBody(
    OK,
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
    OK,
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
    OK,
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
    OK,
    "Page Records Updated Successfully",
    result
  );
  response.body = responseBody;
  process.nextTick(next);
};
const createPage = async (request, response, next) => {
  const { body } = request;
  const data = await PageModel.createOne(body);
  const responseBody = new ResponseBody(OK, "New Page Created", data);
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
