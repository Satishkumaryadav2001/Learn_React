// Note Redux Main Function(5 function)

// createStore(reducer, [preloadedState], [enhancer])
// combineReducers(reducers)
// applyMiddleware(...middlewares)
// bindActionCreators(actionCreators, dispatch)
// compose(...functions)



// compose(...functions) Use

import { compose } from "redux";

function removeSpaces(string){

    return string.split(" ").join("");
}
console.log(removeSpaces("abc def ghi jkl"));

function repeatString(string){
    return string+string;// can also use return string.repeat(2);
  
}
console.log(repeatString("abcd"));


function convertToUpper(string){
    return string.toUpperCase();
}
console.log(convertToUpper("satish"));

function convertToLower(string){
    return string.toLowerCase();
}
console.log(convertToLower("SATISH"));



const input ="Abc Def Ghi Klm nop "
// const output1= convertToUpper(convertToLower(repeatString(removeSpaces(input))));
// const output2=convertToLower(convertToUpper(repeatString(removeSpaces(input))));
// console.log(input,output1,output2);

const composedFunction =compose(removeSpaces,repeatString,convertToUpper)
console.log(composedFunction(input));