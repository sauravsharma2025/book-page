import configureRouter from "@am92/express-utils/configureRouter";
import BookController from "./Book.Controller.mjs";

const {
  createBook,
  searchBook,
  deleteBookById,
  updateBookById,
  listAllBook,
  entireData,
} = BookController;

const masterConfig = {
  routerName: "Book",

  routesConfig: {
    search: {
      method: "post",
      path: "/search/:id",
      pipeline: [searchBook],
    },
    createBook: {
      method: "post",
      path: "/",
      pipeline: [createBook],
    },
    deleteBookById: {
      method: "get",
      path: "/:id/delete",
      pipeline: [deleteBookById],
    },
    updateBookById: {
      method: "post",
      path: "/:id/update",
      pipeline: [updateBookById],
    },
    listAllBook: {
      method: "get",
      path: "/search",
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
