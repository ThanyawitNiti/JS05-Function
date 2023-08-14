// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
// let phrase = 'Hello';
// if (true) {
//   let user = 'John';
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi(); // *'Hello, John'
// ```
// Phrase เป็นตัวแปรที่ถูกกำหนดค่าอยู่ใน global  ตัวข้างใน block จึงสามารถ นำมาตัวแปรจาก global มาใช้ได้
// user มีตัวแปรที่อยู่ใน blcok ของตัวเองคือ John จึงนำ John มาใช้ได้