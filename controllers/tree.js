import express from "express";
import mongoose from "mongoose";
import Tree from "../models/tree.js";
import Node from "../models/node.js";

const Router =express.Router();

export const createTree=async(req,res)=>{
    const newTree= new Tree(req.body);
    try {
        await newTree.save();

        res.status(201).json(newTree );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
export const getTrees= async(req,res) =>{
    try{
        const Trees=await Tree.find();
        res.status(200).json(Trees);

    }
    catch(error){
        res.status(404).json({error});

    }
}
export const getTree= async(req,res) =>{
    const {id}= req.params;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    try{
        const tree=await Tree.findById({_id: id});
        res.status(200).json(tree);


    }
    catch(error){
        res.status(404).json({message: error.message});

    }
}
export const getRoot= async(req,res) =>{
    const {id,root}= req.params;
    if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    try{
        const tree=await Tree.find({
            'node.rootId': root
        });
        res.status(200).json(tree);


    }
    catch(error){
        res.status(404).json({message: error.message});

    }
    
}




export default Router;