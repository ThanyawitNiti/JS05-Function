// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function
// 
const isPrime = (n) => {
    if(n<=1) return false
    for(let i =2 ; i < n ; i++){
        if(n % i ==0 ) return false
    }
    return true
}


