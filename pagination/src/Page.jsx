import { useEffect, useState } from "react";

const Page = () => {
    const [products,setproducts]=useState([]);
    const [page,setpage]=useState(1);


    const HandleNext=()=>{
        let total=products.length;
        if(page<(total/5)){
            setpage(page+1);
        }
      
    }
    const HandleNum =(num)=>
        { setpage(num+1);

    }
    
    const HandlePrev=()=>{
        
        if(page>1){
            setpage(page-1);
        }
      
    }

    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch("https://dummyjson.com/products");
            const parsedData=await res.json();
          
            setproducts(parsedData['products']);
         
            
        };
        fetchData();
    },[])

    return ( <>
    <div>
        {products.slice(page*5-5,page*5).map((item,index)=> <p key={item.id}> <img src={item.images[0]} alt="" width={100} height={100}/> |{item.title} | {item.price}</p> )}
    </div>
    <div>
        <button onClick={HandlePrev}>Prev</button>
        {[...Array(products.length/5).keys()].map((item)=> <button key={item} onClick={()=>HandleNum(item)}>{item+1}</button> )}
        <button onClick={HandleNext}>Next</button>
    </div>
    </> );
}
 
export default Page;