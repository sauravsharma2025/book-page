import Express from "express";
import { PageRouter } from "../resources/Pages/index.mjs";

const config = {
  routesConfig: {
    search: { enabled: true },
    createPage: { enabled: true },
    deletePageById: { enabled: true },
    updatePageById: { enabled: true },
    listAllPage: { enabled: true },
  },
};

const Router = new Express.Router();
const PageRouters = new PageRouter(Router, config);

export default PageRouters;
