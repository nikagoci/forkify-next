import { models, model, Schema } from "mongoose";

let recipesSchema = Schema({
  publisher: {
      type: String,
      required: [true, 'recipe should have publisher'],
      trim: true
  },
  ingredients: [String],
  source_url: String,
  image_url: {
      type: String,
      required: [true, 'recipe should have image']
  },
  social_rank: {
      type: Number,
      default: 100
  },
  publisher_url: String,
  title: {
      type: String,
      trim: true,
      required: [true, 'recipe should have title']
  }
})

const Recipes = models.Recipes || model("Recipes", recipesSchema);

export default Recipes;
