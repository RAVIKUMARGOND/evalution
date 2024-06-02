const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];
const extractSubArray=(arr)=>{
   let newArr= arr.slice(3,7);
   return newArr;
}
 const extractedArray=extractSubArray(animals);
console.log(extractedArray)