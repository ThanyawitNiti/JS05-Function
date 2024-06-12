
// isPrime ?
// จำนวนเฉพาะ (Prime Number) คือจำนวนเต็มบวกที่มากกว่า 1
// และมีตัวหารลงตัวที่เป็นจำนวนเต็มบวกอยู่แค่ 2 ตัวก็คือ 1 และตัวมันเอง

// เช่น
// เลข 17 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 17 เท่านั้นที่สามารถหารเลข 17 ลงตัว
// เลข 23 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 23 เท่านั้นที่สามารถหารเลข 23 ลงตัว
// เลข 24 ไม่เป็นจำนวนเฉพาะ เพราะมี 1,2,4,6,8,12,24 ที่สามารถหารเลข 24 ลงตัว

// TASK : ให้สร้างฟังก์ชันตรวจสอบตัวเลข ว่าเลขนั้นเป็นจำนวนเฉพาะหรือไม่

function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(`${num} : this number is Prime`) 

}
checkPrime(num)

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
}
printPrime(limit)
// printPrime(71);
// checkPrime(2);
// checkPrime(3);
// checkPrime(4);
// checkPrime(5);
// checkPrime(6);
// checkPrime(7);
// checkPrime(8);
// checkPrime(9);
// checkPrime(10);
// checkPrime(11);
// checkPrime(12);
// checkPrime(13);


