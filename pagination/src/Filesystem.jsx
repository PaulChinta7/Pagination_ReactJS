import { useState } from "react";

const Filesystem = () => {
    const [p,setp]=useState(0);
    const [r,setr]=useState(0);
    const [fee,setfee]=useState(0);
   
    const HandleLoan=(e)=>{
        setp(e.target.value);
    }
    const HandleRate=(e)=>{
        setr(e.target.value);
    }
    const HandleFee=(e)=>{
        setfee(e.target.value);
    }
    return ( <>
      <p>Loan</p>  <input type="text" onChange={HandleLoan}/> <br />
      <p>Rate of Interest</p><input type="text" onChange={HandleRate}/><br />
      <p>processing fee rate</p><input type="text" onChange={HandleFee}/><br />
      <p>{(p-(p*0.2))+(p-(p*0.2))*0.01}</p>
    
    

    </> );
}
 
export default Filesystem;