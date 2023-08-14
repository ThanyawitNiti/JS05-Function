// ผลลัพธ์ในบรรทัดที่มี \*, **, \*** และ \*\*\*\* มีค่าเป็นอะไรและเพราะอะไร


const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // * `From Matt, to Sarah` เพราะ ได้ sender มาจาก matt ซึ่งเป็น scope global และ Sarah มาจากการใส่ 'Sarah' ไปใน Function 
sendTo(null); // ** ได้ค่า `From null, to undefiend เพราะ from ใส่ค่า null เข้าไป และ ไม่ได้ใส่ค่า สอง ทำให้เกิด undefiend และค่า to ไม่ได้มีการกำหนดค่าใดๆไว้ให้ ทำให้เป็น undefiend



const sender2 = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** `from CC to Max` เป็น CC เพราะ มีการกำหนด  ${from} ไว้ใน console.log ทำให้เป็นค่าเริ่มต้น หากใส่ arg แค่ 1 
sendTo('Ben', 'Jay'); // ****`From Jay to Ben` ใส่ค่า Ben กับ Jay ลงไปใน function ทำให้ได้ 'Ben' = to และ 'Jay' = from

