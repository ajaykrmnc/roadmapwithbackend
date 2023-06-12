import React, { useState,useEffect,Navigate } from 'react';
import {Link } from "react-router-dom"
import axios from "axios";
import "./card-style.css"

const ShowTrees = () => 
  {
    const [Trees, setTrees] = useState();
    const init = async() => {
        await axios.get("https://devlopermap.herokuapp.com/tree")
        .then(res=>{
            setTrees(res.data);
            const Data={...res.data};
            const array=[...Data.orders[0]];
            console.log(array);
            console.log(res.data);

        })
    };
    useEffect(() => {
        init();
        console.log("mounting Trees");
    }, 
    []);
    return (
        <div className="container row d-flex justify-content-center m-4">
            {/* {Trees.map((Tree) => (
                <>
                    <div className='card p-2 m-2 col-4 font-weight-bold bg-light' style={{minWidth: '300px'}} key={Tree._id} >
                    <div className='m-2'>
                    <h2>{Tree.topic}</h2>
                    <p>Written by {Tree.Author}</p>
                    
                        <Link to={`/roadmap/${Tree["_id"]}`}>
                            <button className='btn btn-primary' >
                                Go to roadmap
                            </button>
        
                        </Link>
                    </div>
                    
                       
                    </div>
    

                </>
            ))} */}
        </div>
    );
};
export default ShowTrees;
