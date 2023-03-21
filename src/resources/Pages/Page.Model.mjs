import { mongoConnect } from "@am92/mongo-odm";
import { buildSchema } from "@am92/mongo-odm";
import { Model } from "@am92/mongo-odm";
await mongoConnect();
const CollectionSchemaObject = {
  // Schema Properties as defined by mongoose Schema Class
  _id: { type: String, required: true },
  content: { type: String, required: true },
  bookId: { type: String, required: true },
  isActive: { type: Boolean, default: true, required: true },
};

const schemaOptions = {}; // Schema Options as defined by mongoose Schema Class

const CollectionSchema = buildSchema(CollectionSchemaObject, schemaOptions);

const PageModel = new Model("book_pages", CollectionSchema);

export default PageModel;
