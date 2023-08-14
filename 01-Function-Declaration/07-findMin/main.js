///ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
//ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function findMin(x,y) {
    x -=1 ; 
    y -= 1  ;
    console.log(x);
    console.log(y);
    return [x , y] ;
   
}

console.log(findMin(5,7));