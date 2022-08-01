import mongoose from "mongoose";
const treeSchema= mongoose.Schema({
    topic: String,
    Author: String,
    root: String,
    node: []
})

var Tree=mongoose.model("Tree",treeSchema);

export default Tree;