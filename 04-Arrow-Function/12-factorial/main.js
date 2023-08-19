// ให้เขียนฟังก์ชันคำนวณค่า factorial
// factorial คือ 5x4x3x2x1 =120



// n * n-1 *n-2 *n-3
// 5 * 4 * 3 * 2
function fac(n) {
    if (n === 0 || n === 1)
    return 1;
    for (let i = n-1 ; i >= 1  ; i--){
       
        console.log(i);
        n =  n*i; 
        
        console.log(n);
    }
        return n;
// let result = n ;
//     if (n=== 0 || n===1) {
//         return 1;
//     }

// while(n>1) {
    
//     n--;
//     // console.log(n);
//     result *= n ;
//     // console.log(ressult);
    
// }
// return result;

}
console.log(fac(5));



