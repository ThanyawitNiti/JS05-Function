/*review  
FN() fncall fnreturn fnresult
fn คือกล่องดำๆ
การเขียน fn มีสองรูปแบบ
1/ FN declaration / Named FN มีการกำหนดชื่อให้ Fn 

######Function nameOfFn(input) {logic}
1.1 define กำหนดชื่อ , input 
1.2 call =เรียกใช้ ทุกๆการเรียกทำให้ logi ใน {} ถูกรัน 1รอบ
sayHi('John'); พยายามส่ง str John เข้าไป ใน 
sayHi(name) { 
console.log(`${name}`);
}
ถ้าผู้ใช้งานต้องการใส่ input 2 ค่า ในparameter ต้องมี input 2 ค่า 
sayHi('John','Matt') -> Function nameOfFn(name,lastname)

1.3 Return ผลลัพธ์ที่ได้จากการ run FN จนเสร็จ 
add(5,6) === return value , FN Result
FN add(x,y) { 
let result = x+ y ;
return result;
}
add(5,6) -> ถูกรันแล้วหนึ่งรอบ ขณะ process จะมีเวลาในการ process  เมื่อ process Done 
add (5,6) === result === 11 จบและหายไป 
- let r = add(5,6) เมื่อ add done ตัวมัน (add) จะเท่ากับสิ่งที่มัน return เอาผลลัพ ของ add เก็บไว้ใน r
Reuse ได้ ถ้าใช้บ่อยแนะนำให้ใส่ใน ตัวแปร
- console.log(add(5,6)); -> one time use ไม่เปลือง Memory ในการเก็บตัวแปร
- fn isEven(n) {
		if(n % 2 == 0) { 
			return true ;
} else {  ไม่เขียน else ได้ if แบบไม่มี else ถ้าเจอ true จะไม่เข้า false 
			retunn false;
			return true; จะไม่เกิดเหตุ่การณืนี้ เพราะ return แล้วตัดจบเลย 
			console.log('i am done');จะไม่เกิดเหตุ่การณืนี้ เพราะ return แล้วตัดจบเลย 
}
console.log( isEven(5) );
ของที่จะ log ยัง process ไม่เสร็จ
isEven ใส่ 5 เข้าไป
5 / 2 ลงตัวไหม 
ถ้าไม่ลง
return false 

Fn ที่ return boolen สามารถใช้ สเตทเม้นตรงนี้ return ได้เลย  return n % 2 == 0
ใส่ 6 /2 เศษ == 0  // return true
// return 5 % 2 == 0 (false) 
evaluate n % 2 == 0 ก่อน แล้ว return 
//check point 
// ประกาศเป็น Declare ทำพร้อม input
// รับ input Params ทำพร้อม declare 
// เรียกใช้งาน Call
// เข้าใจ  Return  ถ้าไม่เขียน return = unDefiend 

######2/ FN expression / มักถูกเขียนในรูปของ Anonymouse FN
ที่มาคือ 
let a = 5 *2 +7 
Varaible == expression  
expressionคือ ส่วนของโปรแกรมที่สามารถ evaluate เป็นค่าได้ single value ,combine expression  ,Fn result 
อะไรที่คอม evaluate ออกมาเป็น value ได้
-single value 
ใส่ 7 คอมให้ 7 เป็น expression
-combine expression 
7 +2
-Fn result  FN done send expression
เช่น add(7,2) 
- + * / เป็น Function ที่ติดมากับคอม เป็น fn ที่เราไม่ได้ define ขึ้นมา

let myFunc = add; ->> FN add จากข้างบนที่เขียนไว้แล้ว อย่า งง! สมมตุิชื่อ Fn มายกตัวอย่าง
//Format : variable = FN (FN Expression) 
assign Fn to variable
console.log (myFunc (5,2));

Concept Aynonymouse FN : FN ที่ไม่มีชื่อ 
const sayHi = function (name) { FN นี้ไม่มีชื่อ เลยเรียกว่า Aynonymouse FN
	console.log('Hi' + name)
}
อธิบาย เรากำลัง Assign Aynonymouse FN ให้กับตัวแปร sayHi 
ถ้าเราจะเรียกใช้งาน Fn นี้ ต้องเรียกผ่าน ตัวแปรที่ชื่อว่า sayHi() ; 
ตัวแปร ห้ามเรียกใช้ก่อนประกาศ  ต้องประกาศตัวแปรก่อนเรียกใช้งาน 
sayHi('Palm'); => Hi Palm

Fn expresssion  : Arrow
const sayHi = () => {}  : ยังมีส่วนที่รับ input () กับ logic {} อยู่ 

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