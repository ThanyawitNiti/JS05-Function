// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

//365
//input Day Month year
// 1 month => 30 days, 31 days
const isLeapYear = (year) => (year % 100 ===0 ? year %400 ==0 : year % 4 === 0);
isLeapYear(2020) ;

function dayinyear(year) {
    let i =365 ;
    if (isLeapYear(year)) {
        return i +1 ;
        console.log(i)
    } else {
        return i ;
    }

    
}

console.log(dayinyear(2020));


// learp year true => let y = 366 
// else y = 365 
// d * m
// 22 * 3
// const countdate = (d,m,y) {

    
// }