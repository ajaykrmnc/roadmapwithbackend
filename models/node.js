import mongoose from "mongoose";
const nodeShcema= mongoose.Schema({
    topic: String,
    content: String,
    parent: Number,
    parentId: String,
    level: String,
    tree: String,
    rootId: String

})
var Node= mongoose.model('Node',nodeShcema);
export default Node;