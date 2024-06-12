// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

// leap year คือ  ปีที่มี 366 วัน
// % 4 ลงตัว => true
// % 100 ลงตัว ไม่เป็น
// ยกเว้น หาร 400 ลงตัว เป็น leap year
// 1800 => false
// 1900 => false
// 2000 => true
// isLeapYear : Year => boolean
//4,100,400 พหุลคูณ
// หาร 4 ลง => true
// 1800 => false
// 1900 => false
// 2000 => true

// 100 ลงตัวไม่เป็น Leap Year *** ยกเว้นหาร 400 ลงตัวเป็น Leap Year
// ที่เหลือ หาร 4 ลงตัว เป็น Leap Year

// 1 Year == 1 รอบของการโคจรรอบดวงอาทิตย์ == 365.242199 days

// 1 Year == 365.00 (เศษ 0.242199)
// 2 Year == 365.00 (เศษ 0.242199)
// 3 Year == 365.00 (เศษ 0.242199)
// 4 Year == 365.00 (เศษ 0.242199) + 1 Day (4*0.24119 == 0.96 เกิน 0.04)

// ชด 25 ครั้ง ==> เกินไป 25 * 0.04 วัน => 1 วัน

// 100 ไม่ควรชด

// isLeapYear :  YEAR => BOOLEAN
// 4,100,400

const isLeapYear = (year) => {
    // แต่ 100ก็ หาร 4 ลงตัว เลยเข้า con แรก จึงแก้โดย
    // && year %100 !== 0 ไม่เอาอันที่หาร 100 ลงตัว 
    // แต่ 400 ก็ ตก con 2 
    // ตัวที่หาร 100 ลงตัว ห้าม หาร 400 ลงตัว 
    // && year % 400 !== 0
//     if (year % 4 === 0 && year %100 !== 0 ) {
//         return trun ;
//     } else if (year % 100 === 0 && year % 400 !== 0) {
//         return false;
//     }else if (year % 400 === 0) {
//         return turn;
//     } else {
    // return false }
// }
// เอา condition ยากสุดมาหารก่อน
    if (year % 400 ==0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 ==0) {
        return true;
    } else {
        return false
    }
// ##3 เหมือน ##2
    if (year % 400 ==0) {
        return true;
    }
    if (year %100 == 0) {
        return false
    }
    if (year % 4 ===0) {
        return true
    }
    return false;

// ##4
//base return ตัวมันเอง if (year % 400 ==0) {
        // return (year % 400 ==0)

if (year % 100 ===0) { // ถ้าเอา 400  ขึ้นก่อน ค่าที่ 100 ลงตัวจะไม่เข้า
    return year %400 ==0 ; // จริง return ตัวนี้ ถ้า false คืนreturn year % 4 === 0;
}
return year % 4 === 0;

// ##5 
return  year % 100 ===0 ? year %400 ==0 : year % 4 === 0;
// ตัวแรกต้องเป็น true ถึงจะ evaluate ตัวต่อไป
// ภ้าหาร 100 ไม่ลงตัวแต่แรกให้ไปเช็กว่า หาร 4 ลงตัวไหม

};

const isLeapYear5 = (year) => (year % 100 ===0 ? year %400 ==0 : year % 4 === 0);