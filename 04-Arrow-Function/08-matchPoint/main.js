// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน


// Team : ท่าเรือ 
// total match : 38 
//win : 28 : 3 point => 28 *3
// draw : 5 : 1 point => 5*1
//lose : 5 : 0 point => 5*0
// total point : 89
// input ที่จำเป็น win draw 


const point = (win,draw) => win *3 + draw ; 