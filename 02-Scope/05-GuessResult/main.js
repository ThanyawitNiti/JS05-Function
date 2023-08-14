// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * sideeffect : "Hello everybody" result : undefined ดึง message ใน scope ของ block FN ตนเอง
}

logMessage(message); // result : undefined sideeffect : "Hello everybody" เพราะดึง message ใน scope ของ Function มา
console.log(message); // ** sideeffect :"Welcome to Thailand"; result : undefined เป็นการดึง message จาก global มา



let name = "John";

function sayHi(input) {
  console.log(name); // ***sideeffect :"John"; result : undefined เพราะจะไปดึง name = "John" ที่ global scope เนื่องจาก name = input ถูกกำหนดที่หลัง
  name = input;
}

sayHi();
console.log(name); // **** sideeffect : 'John' result : undefiend มีการดึง Jogn จาก global มาใช้
