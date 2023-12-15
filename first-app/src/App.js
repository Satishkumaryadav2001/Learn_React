// import logo from './logo.svg';
// import './App.css';
// import DogCard from './DogCard';
// function App() {
//   return (
//     <div>
//       <DogCard/>
//       <DogCard/>
//     </div>
 
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import DogCard, {Image} from './DogCard';
// function App() {
//   return (
//     <div>
//       <DogCard/>
//       <DogCard/>
//       <Image/>
//     </div>
 
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import DogCard from './DogCard';
// function App() {
//   return (
//     <div>
//       <DogCard/>
//       <DogCard/>
      
//     </div>
 
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import DogCard from './DogCard';
// import Counter from './Counter';
// function App() {
//   return (
//     <div>

//     <Counter/>

//    </div>
 
//   );
// }

// export default App;


// import './App.css'
// import Avatar from './Avatar';
// function App(){
//     return(

//         <>

// <Avatar 
// src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/05/og-tiger-reserve-in-india_11th-May.jpg"
// width="1000px"
// hight="500px"
// />
// <Avatar 
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen6wviYiqEARkTLyvrSEltNj2nXv-Nq1ZMQ&usqp=CAU"
// width="1000px"
// hight="500px"
// />
// <Avatar 
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIXtk8t-TjPrVYAq4gnTI3k8LgGIGE0wfKg&usqp=CAU"
// width="1000px"
// hight="500px"
// />

//         </>
//     )
    
    
   
// }
// export default App;


// import './App.css'
// import Avatar from './Avatar';
// function App(){

//   const obj1={
//     src:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/05/og-tiger-reserve-in-india_11th-May.jpg",
//     width:"1000px",
//     hight:"500px"

//   }
//   const obj2={
//     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen6wviYiqEARkTLyvrSEltNj2nXv-Nq1ZMQ&usqp=CAU",
//     width:"1000px",
//     hight:"500px",
//   }

//   const obj3={
//      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIXtk8t-TjPrVYAq4gnTI3k8LgGIGE0wfKg&usqp=CAU",
//      width:"1000px",
//      hight:"500px"
//   }
//     return(
    
//     <>

// <Avatar 
//   {...obj1}
// />
// <Avatar 
// {...obj2}

// />
// <Avatar 
// {...obj3}

// />

//         </>
//     )
    
    
   
// }
// export default App;



// import './App.css'
// import Avatar from './Avatar';
// function App(){
//     return(

//         <>

// <Avatar 
// src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/05/og-tiger-reserve-in-india_11th-May.jpg"
// width="1000px"
// hight="500px"
// />
// <Avatar 
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen6wviYiqEARkTLyvrSEltNj2nXv-Nq1ZMQ&usqp=CAU"
// width="1000px"
// hight="500px"
// />
// <Avatar 
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIXtk8t-TjPrVYAq4gnTI3k8LgGIGE0wfKg&usqp=CAU"
// width="1000px"
// hight="500px"
// >
// <span>Child Tag</span>
// </Avatar>

//         </>
//     )
    
     
// }
// export default App;


import { useState } from 'react';
import './App.css'
import Avatar from './Avatar';
function App(){

  const [toods,setTodos]=useState(['todo1','todo2']);
    return(

        <>
{toods.map((v,idx) => <li key={idx}>{v}</li>)}


        </>
    )
    
     
}
export default App;


