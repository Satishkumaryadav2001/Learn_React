// import {useState} from 'react';
// // let z=10;
// function Counter(){

// // let x = 0;
// // let z=10;
// const [x,setX] = useState(0);
// const [y,sety] = useState(0);

// return(
//     <>
//     {/* Count Z: {z}
//     <button onClick={() => z+1}>Inc</button>
//     <br/> */}
//     Count X: {x} is {(x%2==0)? 'Even':'Odd'}
//     <button onClick={() => setX(x+1)}>Inc</button>
//     <button onClick={() => setX(x-1)}>Dec</button>
//     <br/>

    
//     Count Y: {y}
//     <button onClick={() => sety(y+1)}>Inc</button>
//     <button onClick={() => sety(y-1)}>Dec</button>
//     </>
// )  
// }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


// export default Counter;



import {useState} from 'react';

function Counter(){

// const [isEditting,setIsedtting,]=useState(false)
const [toods,setTodos]=useState(['todo 1','todo 2']);


return(
    <ul>
   
   {/* {
    (isEditting)?<input/>:<p>Some Todo</p>
   }
   <br/>
   <button onClick={()=>setIsedtting(!isEditting)}>Click</button> */}

   {toods.map((todo) => <li>{todo}</li>)}
   {/* <button onClick={() => setTodos([1,2,3,4,5,6,7,8,9])}>Click</button> */}
   <button onClick={() => setTodos([...toods,'Another One'])}>Click</button>
    </ul>
)  
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


export default Counter;