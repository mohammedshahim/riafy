import mongoose from "mongoose";
import PostStocks from "../models/postStocks.js";

export const addStock = async (req, res) => {
  const stock = req.body;
  const newStock = new PostStocks(stock);
  try {
    newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllStock = async (req, res) => {
  const stocks = await PostStocks.find();
  try {
    res.status(200).json(stocks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStock = async (req, res) => {
  const stockName = req.body.name;
  console.log(req.body);
  const stocks = await PostStocks.findOne({ name: stockName });
  try {
    res.status(200).json(stocks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
