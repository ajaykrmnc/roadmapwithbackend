import React from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from 'axios';
import ShowTrees from './trees';
const Home=()=>{
let navigate = useNavigate(); 
const createNew=async()=>{
    navigate('/create');
}


return(
  <>
  <div className='row'>
    <div className='d-flex p-4 col-md-6 h-100' style={{justifyContent: 'center'}}>
    <div class="card m-4" >
  <img class="card-img-top" src="roadmap.jpeg" alt="Cardcap"/>
  <div class="card-body">
    <h5 class="card-title">RoadMap creator </h5>
    <button className='btn btn-success' onClick={createNew}>create a new roadmap</button>
    <p class="card-text">Click on Above button to create a Roadmap</p>
  </div>
</div>
</div>
<div className='col-md-6'>
<ShowTrees />
</div>

</div>
</>

)

      
    

    

}
export default Home
