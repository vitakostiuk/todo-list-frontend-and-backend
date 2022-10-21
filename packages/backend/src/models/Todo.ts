// import { Model, model, Schema } from 'mongoose';
import { model, Schema } from 'mongoose';
import Joi from 'joi';

export interface ITodo extends Document {
  title: string;
  todo: string;
}

const addSchema: Joi.ObjectSchema<any> = Joi.object({
  todo: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  private: Joi.boolean().required(),
  completed: Joi.boolean().required()
});

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    todo: {
      type: String,
      required: true
    },
    private: {
      type: Boolean,
      required: true
    },
    completed: {
      type: Boolean,
      required: false
    }
  },
  { versionKey: false, timestamps: true }
);

// const Todo: Model<ITodo> = model('todo', todoSchema);
const Todo = model('todo', todoSchema);

export { Todo, addSchema };
