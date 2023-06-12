import React,{Component} from "react"
import axios from "axios";
import { useEffect } from "react";
import { ArrowRight,Eye,EyeSlash } from 'react-bootstrap-icons';



export default class Hello extends Component {
    state = { 
      root: '',
      tree: [],
      node: []
     }

  
  
    async componentDidMount(){
  
      
      const url='https://devlopermap.herokuapp.com/tree/' + this.props.treeId;
      await axios.get(url)
      .then(async(resTree) => {
        this.setState({tree: resTree.data.node})
        for(const item in resTree.data.node)
        {

           if(resTree.data.node[item]["rootId"]===resTree.data.root)
           {
             this.setState({root: resTree.data.node[item]["_id"] });

           }
        }
      })



    };
    render() { 
      return (
        <><div className="tree">
        <li>
          <ul>
          <RecursiveComponent tree={this.state.tree} obj={this.state.tree} root={this.state.root}/>
          </ul>
        
        </li>
          
      </div>
        </>
        
      );
    }
  }

const RecursiveComponent = ({ tree,obj,root}) => {
    const [node,setNode]=React.useState([]);
    const newObj=tree.filter((node)=>node.rootId===root)
    const [view,setView]=React.useState(true);
    const switchView=()=>
    {
       setView(!view);
    }
    useEffect(()=>
    {
      for(const item in tree)
      {
          if(tree[item]["_id"]===root)
          {
              setNode(tree[item]);

          }

      }
    },[root])
    const hasChildren = obj && newObj.length
    if(hasChildren!==0)
     return<>
      <div className='d-flex justify-content-center' >
        <div className='card ' style={{ padding: '10px', minWidth: '10rem', maxWidth: '16rem'}}>
          <div>
       {view&&<button className="btn mb-2 text-white text-center d-flex align-item-center justify-content-between w-100" style={{backgroundColor: 'rgb(92 0 91)'}} onClick={switchView}>
     <h5 className="text-center">{node.topic}</h5> <EyeSlash/></button>}
       {!view&&<button className="btn mb-2 text-white text-center d-flex justify-content-between w-100" style={{backgroundColor: 'rgb(92 0 91)'}} onClick={switchView}><h5 className="text-center">{node.topic}</h5><Eye/></button>}
        </div>
       <div >
       <h6 className='text-left rounded px-2' style={{backgroundColor: "rgb(246 217 211)",color: 'rgb(95 18 2)'}}>{node.content} </h6> 
       </div>
       </div>
       </div>
       { view &&
       <ul>
          {hasChildren && 
          
          newObj.map((item) => 
          (
            <li><RecursiveComponent tree={tree} obj={newObj} root={item._id} /></li>
          )
          )}
    
        
        </ul>
      }
       
     
    </>
    
    else
    return <>
    <div className='d-flex justify-content-center' >
        <div className='card ' style={{ padding: '10px', minWidth: '10rem', maxWidth: '20rem'}}>
        <div><h5 className='text-white rounded  p-2' style={{backgroundColor: 'rgb(92 0 91)',textAlign: 'left'}}>{node.topic} </h5>
       <div style={{minHeight: '1.5rem'}}>
       <h6 className='text-left rounded p-2' style={{backgroundColor: "rgb(246 217 211)",color: 'rgb(95 18 2)'}}>{node.content} </h6> 
       </div>
       </div>
       </div></div>
    </>;
  }
  