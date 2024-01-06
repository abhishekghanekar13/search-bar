// let arr=[1500,200,300,400,500];
// let item;
// let output=[];

// for(let i=0;i<arr.length;i++){
//      item=arr[i]/10;
//       arr[i]-=item;
     

// }

// console.log(arr);
let n=4;
let arr=[];
for(let i=1;i<=n;i++){
       arr.push(i);
}

let factorial=arr.reduce((prev,currval)=>{
       return prev*currval;
})
console.log(factorial);