import express from "express";
import { createNode } from '../controllers/node.js';
import { createTree,getTrees,getTree,getRoot } from '../controllers/tree.js';
const router= express.Router();
router.post("/",createTree);
router.patch("/:id",createNode);
router.get("/",getTrees);
router.get("/:id",getTree);
router.get("/:id/:root",getRoot);

export default router;