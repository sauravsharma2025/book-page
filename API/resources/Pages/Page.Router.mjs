import configureRouter from "@am92/express-utils/configureRouter";
import PageController from "./Page.Controller.mjs";

const {
  createPage,
  searchPageById,
  deletePageById,
  updatePageById,
  listAllPageByBook,
} = PageController;

const masterConfig = {
  routerName: "pages",

  routesConfig: {
    search: {
      method: "post",
      path: "/search",
      pipeline: [searchPageById],
    },
    createPage: {
      method: "post",
      path: "/create-page",
      pipeline: [createPage],
    },
    deletePageById: {
      method: "delete",
      path: "/delete",
      pipeline: [deletePageById],
    },
    updatePageById: {
      method: "patch",
      path: "/update",
      pipeline: [updatePageById],
    },
    listAllPage: {
      method: "post",
      path: "/listing",
      pipeline: [listAllPageByBook],
    },
  },
};

class PageRouter {
  constructor(Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig);
    return resourceRouter;
  }
}

export default PageRouter;
