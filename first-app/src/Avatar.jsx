// function Avatar(props){
//     return(
//         <>
//             <img src={props.src} width={props.width} height={props.height}/>
//         </>
//     )
// }
// export default Avatar;

import { Children } from "react";


// function Avatar({src,width,height}){
//     return(
//         <>
//             <img src={src} width={width} height={height}/>
//         </>
//     )
// }
// export default Avatar;

function Avatar({src,width,height,children}){
    return(
        <>
            <img src={src} width={width} height={height}/>
            {children}
        </>
    )
}
export default Avatar;