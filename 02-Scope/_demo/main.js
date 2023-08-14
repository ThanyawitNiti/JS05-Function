{
// Global = scope  this area
console.log('scope');
let message = 'hi';
function sayHi() {
    // FN scope
    let message = 'hello';
    console.log(`## ${message}`);
}
sayHi(); // เรียกใช้ฟังก์ชัน ทำให้ รันconsole.log(`## ${message}`);
console.log(message);
// global เหมือนส่วนกลาง ทุกคนสามารถเข้าถึงได้ แต่ global จะใช้ ข้างในไม่ได้เพราะมองหาไม่เจอ
// ยกเว้น var แต่ไม่นิยมใช้กัน เพราะหา bug ยาก 

// Global = scope  this area
}

// SCOPE
// ใน scope เดียวกัน ห้ามมี ชื่อตัวแปร ชื่อฟังก์ชัน ซ้ำกัน
// variable : message = identifier
// เก็บ value สิ่งที่ไป process มา
let message = 'h';
// ถ้าอยู่ใน scope เดียวกัน ใช้ ชื่อตัวแปรเดียวกัน ซ้ำกันไม่ได้
// function : sayHi == identifier
// เก็บ procedure , statement
function sayHi(m){
    let message = 'a';
    console.log(m);
}
// Var ไม่มี rule of identity
//Global พยายามใช้ const 
//
//
//