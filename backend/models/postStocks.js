import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  currentMarketPrice: {
    type: Number,
    default: 0,
  },
  marketCap: {
    type: Number,
    default: 0,
  },
  stockPE: {
    type: Number,
    default: 0,
  },
  devidenYeild: {
    type: Number,
    default: 0,
  },
  eps: {
    type: Number,
    default: 0,
  },
  reserves: {
    type: Number,
    default: 0,
  },
  debt: {
    type: Number,
    default: 0,
  },
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostStocks = mongoose.model("PostStock", postSchema);

export default PostStocks;
