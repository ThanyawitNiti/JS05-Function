// 1 นาที  = 60 วิ
// 1 ชม = 60 นาที 
// 1 วัน = 24 ชม
// 1 day = 24 * 60 *60
// 2 day = 2 * 1day = 24 * 60 *60
// อะไรสำคัญต่อการเป็น input 
const Hr_Day = 24 ;
const Min_Hr = 60 ;
const Sec_Hr = 60 ;

const convert = (d) => d * Hr_Day * Min_Hr * Sec_Hr ; 

// const convert = (d) => d * 60 * 60 * 24 ;   