import { buildSchema } from "@am92/mongo-odm";
const schemaOptions = {}; // Schema Options as defined by mongoose Schema Class
const BookSchemaObject = {
  // Schema Properties as defined by mongoose Schema Class
  _id: { type: String, required: true },
  title: { type: String, required: true },
  authorId: { type: String, required: true },
  isActive: { type: Boolean, default: true, required: true },
};
const BookSchema = buildSchema(BookSchemaObject, schemaOptions);
export default BookSchema;
