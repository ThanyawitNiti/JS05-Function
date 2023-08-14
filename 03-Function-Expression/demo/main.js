console.log('anonymous');
// # 1 : Named fn , FN Declaration
// function add(){}

//#2 'anonymous'
(function (message) {
    console.log(message);
}) ('hi');
// intermidiate Invoke Function Expression
//ทำมาใช้ครั้งเดียวและทิ้ง
//ข้อดี ประหยัด memory 
// (function (x,y) {
//     console.log(x+y);
// }) (10,5);

// console.log (
//     (function (x,y) {
//     return x+ y;
//     }) (10,5) 
// );

// let a = (
//     (function (x,y) {
//     return x+ y;
//     }) (10,5) 
// );
// console.log(a)

// Variable => expreesion
let myVar = ((5*2*20) /2) %7 ;
// Variable => fn (fn=expreesion) ฟังชันที่ไม่มีชื่อ
// assign FN ให้ตัวแปร แม้ว่า FN มีชื่อหรือไม่มีชื่อ assign ได้หมด
// ประกาศก่อนใช้งาน
// best prac use const
// let จะขึ้น บรรทัดสีแดง ที่ ตัวแปร myFunc 
// assign anonymous FN to variable
const myFunc = function (x,y) {
    return x+y; 
};
console.log(myFunc(5,10));

//assign named Fn to variable
const a = console.log; // -> console.log คือ FN ที่มีชื่อ
a('hi')

//How to revoke anonymous FN???
//Higer order FN
// FN รับ paramter เป็น FN 
// Arrow FN = Aninymous (modern : arrow sysntax)
let aa = function (x) {
    return x **2 ;
}
//shortest
let b = (x) => x**2 // b เก็บ Fn ที่รับ x เข้าไป แล้วส่งค่าคืนเป็น x กำลังสอง
console.log(aa(3));
console.log(b(3));

let g = x => x+2; // ถ้ามี paramter ตัวเดียว x ไม่ต้องใส่( ) ก็ได้

let cc = (x,y) => x+y;
console.log(cc(3,5));
//Bracket 
let d = (x,y) => { // มี Bracket เมื่อไหร่ต้องใส่ return 
    let result = x+y ;
    return result
};
