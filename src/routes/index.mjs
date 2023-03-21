import BookRouter from "./Book.mjs";
import PageRouter from "./Pages.mjs";
const Routes = [
  { path: "/books", router: BookRouter },
  { path: "/pages", router: PageRouter },
];

export default Routes;
