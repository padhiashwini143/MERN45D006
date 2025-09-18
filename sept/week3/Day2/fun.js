console.log("Hello we are going to learn Function")

//expressional function
const expressionalFunction=function(){
    console.log("this is a expressional function")

}
expressionalFunction()
// console.log(expressionalFunction)






const arrowFun=(a)=>{
    console.log("this is aarrow function")
    console.log("")
}





function sendNewFun(){
    return()=>{
        console.log("this is a returned function")
    }
}

sendNewFun()()

























// const arr=[1,2,3,4,5,6,7,8];
// for (let v of arr){
//     console.log(v)
// }

// arr.forEach((v,idx)=>{
//     console.log(v)
// })


// const newArr=arr.map((v)=>{
//     return v*2;
// })

// console.log(newArr)

// const filterArr=arr.filter((v)=>{
//     return v%2==0;
// })

// console.log(filterArr)


// let summation=arr.reduce((sum,accu)=>{
//     return sum+accu;
// },0)

// console.log(summation)



let markArr=[30,80,60,70,20];
let filterArr=markArr.filter((v)=>{
    return v>50;
})
console.log(filterArr)

const  n=prompt("Enter a number");
let domyArr=[];
for(let i=1;i<=n;i++){
    domyArr.push(i)
}
console.log(domyArr)

const sum=domyArr.reduce((add,accu)=>{
    return add+accu;
},1)

const mlt=domyArr.reduce((mul,accu)=>{
    return mul+accu;
},1)