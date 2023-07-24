




let number = 3 
let array = [5,6,7,8,9,15,2,4] 

const resolve = (argument,value)=>{
    return argument.map(e=> e * value ).reverse().join("")
}



console.log(typeof resolve(array,number))