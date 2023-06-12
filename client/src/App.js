import './App.css';
import Roadmap from 'components/roadmap';
import Home from 'components/Home/home';
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import Final from 'components/Home/Treedetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/create" element={
           <> <div className="m-4">
              <Roadmap />
            </div></>}/>
            
          <Route exact path="/" element={<><div>
              <Home/>
            </div></>} />
          <Route path="/roadmap/:treeId" element={
          <><Final/></>
          } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
