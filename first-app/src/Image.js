// function Image(){
//     return (
//         <div>
//             <img src="https://images.ctfassets.net/2djrn56blv6r/7LjKuMBICdepQN605IbOHb/a76593463f0f4f2624560944d31faf5c/shutterstock_452360023_header.jpg?fm=webp&q=75&w=1920"></img>
//         </div>
//     );
// }

// export default Image; 

// function Image(props){
//     return (
//         <div className="image-box">
//             <img src={props.src}/>
//         </div>
//     );
// }

// export default Image; 


function Image({src}){
    return (
    <div>
        <img src={src}/>
    </div>
    );
}

export default Image; 