import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Sample from './sample';
import './tree-style.css'
import { useNavigate } from "react-router-dom";
import { API } from 'config';


const Roadmap = () => {
    let Navigate=useNavigate();
    const parent=0;
    const [view,setView]=React.useState(false);
    const [inputfield,setInputfield]= React.useState(
    {
        topic: '',
        Author: '',
        root: Math.random().toString(36).substr(2, 9)
    }
    )
    const root=inputfield.root;
    const [Obj,setObj]=useState([]);
    const inputsHandler=(e)=>{
        setInputfield( {...inputfield,[e.target.name]: e.target.value} )
    } 
    const startRoadmap=async()=>{
        await axios.post(`${API}/tree`,inputfield)
        .then(res=>{
           const data={...res.data};
           setObj(data);
           

        })
        setView(true);

    }
    const redirect=()=>{
        Navigate("/");
    }


    return(
        <>
        {view&&<button onClick={redirect} className="btn btn-primary">Submit</button>}
        {  (!view) && 
        <div className="d-flex justify-content-center align-items-center " style={{height: "80vh"}} >

        <div className="h-custom login bg-light  form-body" >
        <h3 className="py-2">Get Started </h3>

        <div className="mb-3">
          <label>Topic</label>
          <input
            type="text"
            name="topic"
            value={inputfield.topic}
            onChange={inputsHandler}
            className="form-control"
            placeholder="Enter Topic"
          />
        </div>

        <div className="mb-3">
          <label>Author</label>
          <input
            type="text"
            name='Author'
            onChange={inputsHandler}
            className="form-control"
            placeholder="Created by"
          />
        </div>


        <div className="d-grid">
          <button className="btn text-white text-bold " style={{backgroundColor: 'rgb(84 55 225)'}} onClick={startRoadmap}>
            Submit
          </button>
        </div>
      </div>
      </div>
}
       { view &&   <div className='tree'>
        <li style={{marginBottom: '100px'}}>
            <ul>
                <Sample parent={parent} Obj={Obj} root={inputfield.root}/>
            </ul>
        </li>
        </div>
        }
        
        </>

        
        



               
            

    )
}
export default Roadmap