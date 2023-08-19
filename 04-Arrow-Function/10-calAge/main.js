// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020




const day =function(year) {
    let sum =0;
    for (let i = year ; i <=2020 ; i++ ){
        // console.log(i)
         if(i % 100 ===0 ? i %400 ==0 : i % 4 === 0) {
            sum = sum + 366;
            // console.log(sum);
         } else sum = sum + 365
        //  console.log(sum);
     } 
     return sum
    }
    
console.log(day(1994));
