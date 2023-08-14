/*review
การเขียน fn มีสองรูปแบบ
1/ FN declaration / Named FN มีการกำหนดชื่อให้ Fn 

Function nameOfFn(input) {logic}
1.1 define
1.2 call =เรียกใช้ ทุกๆการเรียกทำให้ logi ใน {} ถูกรัน 1รอบ

2/ FN expression / มักถูกเขียนในรูปของ Anonymouse FN





Arrow

*/
const minus = (a,b) => {
    return a-b;
};

minus(6,2) 

 ถ้า logic ไม่ซับซ้อน ตัด {} และ return ทิ้งได้
 const minus = (a,b) => a-b
 evaluare = ไม่ที่หลัง 
 มีการเรียกใช้ minus แต่ยังไม่ assign ให้ดูตัวหลังก่อน
 เห็น arrow ตัวมันเองคือ FN 
 เอาชื่อตัวแปรมา call console.log(minus(2));


 (a,b) => a-b 
 input => output
 