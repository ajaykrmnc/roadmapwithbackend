import express from "express";
import mongoose from "mongoose";
import Node from "../models/node.js";
import Tree from "../models/tree.js";

const Router =express.Router();

export const createNode=async(req,res)=>{
    const {id}= req.params;
    const newNode= new Node(req.body);
    const tree=await Tree.findById(id);
    try {
        tree.node.push(newNode);
        tree.save();

        // console.log(newNode);
        console.log(tree)

        res.status(201).json(newNode);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}


export default Router;