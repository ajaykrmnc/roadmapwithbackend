import React, { useState,useEffect,Component} from "react";
import {  useParams } from 'react-router-dom';
import "../tree-style.css"
import Hello from "./Treeclass";
 
const Final=()=> {
    const {treeId} = useParams();
    console.log(treeId)
    return (
      <Hello treeId={treeId} />
    );
}
export default Final


  
