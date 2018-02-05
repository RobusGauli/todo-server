import * as mongoose from "mongoose";

export type TodoModel = mongoose.Document & {
  title: String,
  status: String,
};

const TodoSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  status: String,
});




// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;