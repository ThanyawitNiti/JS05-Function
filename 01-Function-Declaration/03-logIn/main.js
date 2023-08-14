// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

function login(username,password) { //define ประกาศ
    if (username === 'Palm' && password ==='P' ) alert('Pass')
    else alert("not pass")
}
//call -> login('Palm','P') => pass
let username = prompt('enter name') ;
let password = prompt('enter password');
login(username,password);

