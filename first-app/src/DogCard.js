// function Image(){
//     return <img src="https://images.ctfassets.net/2djrn56blv6r/7LjKuMBICdepQN605IbOHb/a76593463f0f4f2624560944d31faf5c/shutterstock_452360023_header.jpg?fm=webp&q=75&w=1920"></img>
// }
// function DogCard(){
//     return(
//         <div>
//             <h3>Bruno</h3>
//             {/* <img src="https://images.ctfassets.net/2djrn56blv6r/7LjKuMBICdepQN605IbOHb/a76593463f0f4f2624560944d31faf5c/shutterstock_452360023_header.jpg?fm=webp&q=75&w=1920"></img> */}
//             <Image/>
     
//         </div>
//     );
// }
// export default DogCard;

// export function Image(){
//     return <img src="https://images.ctfassets.net/2djrn56blv6r/7LjKuMBICdepQN605IbOHb/a76593463f0f4f2624560944d31faf5c/shutterstock_452360023_header.jpg?fm=webp&q=75&w=1920"></img>
// }
//  function DogCard(){
//     return(
//         <div>
//             <h3>Bruno</h3>
        
//             <Image/>
     
//         </div>
//     );
// }
// export default DogCard;


// import Image from "./image";
//  function DogCard(){
//     return(
//         <div>
//             <h3>Bruno</h3>
        
//             <Image/>
     
//         </div>
//     );
// }
// export default DogCard;

// import Image from "./image";
//  function DogCard(){
//     return(
//         <>
//             <h3>Bruno</h3>
        
//             <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAzjXKKaiqVKNMHQU5ZGtuwjQUYaxyGpAKQ&usqp=CAU "/>
//             <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPuvcBLOXg2u4om3J3glGJJFXmMkC8P70Cg&usqp=CAU"/>
     
//         </>
//     );
// }
// export default DogCard;


// import Image from "./image";
//  function DogCard(props){
//     return(
//         <>
//             <h3>{props.name}</h3>
        
//             <Image src={props.Image}/>
       
//         </>
//     );
// }
// export default DogCard;



import Image from "./Image";
import Name from "./Name";

 function DogCard(props){

    let title="This is a dog card";
    return(
        <>
        
       
        <h2 style={
            {
                fontSize:"10px",
                color:"green"
             }
                
           }>
              {title}
        </h2>
        <Name>
             <h3>{props.name}</h3>
        </Name>
            <Image src={props.image} />
       
        </>
    );
}
export default DogCard;



