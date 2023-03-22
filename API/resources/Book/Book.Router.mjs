import configureRouter from "@am92/express-utils/configureRouter";
import BookController from "./Book.Controller.mjs";

const { createBook, searchBook, deleteBookById, updateBookById, listAllBook } =
  BookController;

const masterConfig = {
  routerName: "Book",

  routesConfig: {
    search: {
      method: "post",
      path: "/search",
      pipeline: [searchBook],
    },
    createBook: {
      method: "post",
      path: "/create-book",
      pipeline: [createBook],
    },
    deleteBookById: {
      method: "delete",
      path: "/delete",
      pipeline: [deleteBookById],
    },
    updateBookById: {
      method: "patch",
      path: "/update",
      pipeline: [updateBookById],
    },
    listAllBook: {
      method: "get",
      path: "/listing",
      pipeline: [listAllBook],
    },
  },
};

class BookRouter {
  constructor(Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig);
    return resourceRouter;
  }
}

export default BookRouter;
