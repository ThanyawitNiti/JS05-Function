// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * ฟังก์ชันจะยังไม่ทำงานเพราะไม่ได้ใส่ parameter แต่จะขึ้น obj 
console.log(sayHi(10)); // ** "Hi kid" เพราะ 10 ที่ user ใส่เข้ามา ซึ่งคือ age มีค่าน้อยกว่า 12 ในเงื่อนไข if ทำให้ alert 'hi kid'



function sayHi2(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi2("John")); // *** 'Hi John' 
console.log(sayHi2()); // **** เป็น undefined จึงไม่เข้าเงื่อนไข true จึงให้ค่า "Who are you"

