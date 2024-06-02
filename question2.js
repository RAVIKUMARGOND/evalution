const calculateSum=(arr)=>{
    let sum=0;
    arr.forEach(number => {
        sum+=number;
        
    });
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));