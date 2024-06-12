// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


let x = 1;
function func() {
    console.log(x); // *Error เพราะเรียกใช้ x ก่อนที่จะประกาศ func
    let x = 2;
}
func();