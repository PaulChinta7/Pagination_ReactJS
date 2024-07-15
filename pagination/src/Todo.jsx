import { useState } from "react";

const Todo = () => {
    const [tasks,settasks]=useState([]);
    const [newinp,setnewinp]=useState("");
    const Handlenew=(e)=>{
        setnewinp(e.target.value);
    }
    const handleadd=()=>{
        settasks([...tasks,newinp]);
        setnewinp("");
    }
    const handledelete=(index)=>{
        // console.log(index);
        settasks(tasks.filter((item)=> item!=tasks[index]));
  

    }

    const renderedList = tasks.map((item,index)=> <div key={index}> <li > {item}</li> <button  onClick={()=>handledelete(index)}>delete</button> </div>);

    return ( <>
    <span> Task : </span>
    <input type="text" onChange={Handlenew} value={newinp}/>
    <button onClick={handleadd}>add</button>
    <h1>To do list</h1>
    <ul>
        {tasks.length>0 ? renderedList: "No tasks"}
        
    </ul>
    
 
    </> );
}
 
export default Todo;