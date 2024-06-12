// สร้างฟังก์ชัน checkPermission โดยมีพารามิเตอร์ 3 ตัว

// - ตัวแรกเป็น role
// - ตัวที่สองเป็นฟังก์ชันและทำงานเมื่อ role มีค่าเท่ากับ “ADMIN”
// - ตัวที่สามเป็นฟังก์ชันและทำงานเมื่อ role ไม่ใช่ “ADMIN”
// - ให้ลองเรียกใช้ฟังก์ชันโดย
// - ถ้า role เป็น “ADMIN” ให้ alert “ACCESS GRANTED”
// - ถ้า role ไม่ใช่ “ADMIN” ให้ alert “ACCESS DENIED”
// ให้


//nd fn run condition role = 'ADMIN' => aleart “ACCESS GRANTED”


//3rd fn run condition role !='ADMIN' => alert “ACCESS DENIED”

// let role = "ADMIN";

function  checkPermission(role,nd1,rd1)  {
    // let result ;
    // if (role == "ADMIN") {
    //     return result =  nd1();
    // } else
    //     return rd1()
    // let result ;
    if (role == "ADMIN") {
        return  nd1();
    } else
        return rd1();

}

const nd = () => {
    // if (role == 'ADMIN') {
        // console.log(run)
        return alert("ACCESS GRANTED!!!!!!!!!");
        // } return role
    }
    // console.log(nd('ADMIN'),typeof(nd));
    
function rd() {
        // if (role != 'ADMIN') {
            return  alert("ACCESS DENIEDDDDDDDDDDDDDDDD") ;
            // console.log(run)
            // } return role
        }
console.log(checkPermission("ADMIN",nd,rd));





