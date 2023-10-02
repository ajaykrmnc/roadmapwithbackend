import React,{useState} from 'react';
import './card-style.css'
import { ArrowRight,Eye,EyeSlash } from 'react-bootstrap-icons';
import axios from 'axios';
import { API } from 'config';

const Card = props => {
     const [view,setView]= React.useState(true);
     const [inputfield,setInputfield]= React.useState(
      {
        parent: props.parent,
        topic: '',
        content: '',
        parentId: props.ObjId
      }
     )
     const [rootId,setrootId]=useState('');
     
     const inputsHandler=(e)=>{
      setInputfield( {...inputfield,[e.target.name]: e.target.value} )
     } 
     const addnode=async(node)=>{
      await axios.post(`${API}/node`,node)
      .then(res=>{
        setrootId(res.data["_id"]);
      

      })

     }

       function handleSubmit(e){
            e.preventDefault();
            console.log(inputfield);
            addnode(inputfield);
            setView(!view);


     }
     const switchView=()=>{
        setView(!view);
     }

    
    
    return (
      <div className='card ' style={{ padding: '10px', minWidth: '10rem', maxWidth: '20rem'}}>
        {view && <div className='d-flex m-2' style={{justifyContent: "space-between"}}>
         <h6>Fill the form </h6>
        <button className='btn btn-sm btn-info' onClick={switchView}>{view ? "Preview" : "Edit"}</button>
        </div>}
      
        {view && <>
          <label style={{textAlign: 'left'}}>
            Topic
            <input type="text" class="form-control" name="topic" value={inputfield.topic} onChange={inputsHandler}   />
          </label>
          <label style={{textAlign: 'left'}}>
            Content
            <textarea type="text" class="form-control" name="content" value={inputfield.content} onChange={inputsHandler} />
          </label>
          <button className='btn btn-sm btn-primary my-2' onClick={handleSubmit}>
             submit
          </button>
        <button className='btn btn-primary btn-sm' onClick={props.handleClick}>Add Child</button>
      </> }

      {
         (!view) &&
         <>
         <h5 className='text-white rounded  p-2' style={{backgroundColor: 'rgb(92 0 91)'}}>{inputfield.topic} </h5>
        <div style={{minHeight: '1.5rem'}}>
        <h6 className='text-left rounded mb-2 p-2' style={{backgroundColor: "rgb(246 217 211)",color: 'rgb(95 18 2)'}}>{inputfield.content} </h6> 
        </div>
        <div className='d-flex ' style={{justifyContent: "space-between"}}>
         
        <button className='btn text-white btn-sm' style={{backgroundColor: "rgb(244 127 105)"}} onClick={props.handleClick}>Add Child</button>
       <button className='btn btn-sm text-white' style={{backgroundColor: "rgb(244 127 105)"}} onClick={switchView}>{view ? "Preview" : "Edit"}</button>

       

       </div>
        </>

      }
      
       
      </div>
      );
    
}

export default Card;