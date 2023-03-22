import Express from "express";
import { BookRouter } from "../resources/Book/index.mjs";

const config = {
  routesConfig: {
    search: { enabled: true },
    createBook: { enabled: true },
    deleteBookById: { enabled: true },
    updateBookById: { enabled: true },
    listAllBook: { enabled: true },
  },
};

const Router = new Express.Router();
const BookRouters = new BookRouter(Router, config);

export default BookRouters;
