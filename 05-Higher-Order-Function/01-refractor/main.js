// ให้เรียกใช้ฟังก์ชัน ask โดย

// -   Parameter ตัวแรกเป็น 'Do you agree?'
// -   Parameter ตัวที่สองเป็นฟังก์ชันท่ีเมื่อทำงานแล้วจะ alert คำว่า “I’m agree with you ?”
// -   Parameter ตัวที่สามเป็นฟังก์ชันที่เมื่อทำงานแล้วจะ alert คำว่า “whyyyyyyy !”


// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     'Do you agree?',
//     function () {
//         alert('You agreed.');
//     },
//     function () {
//         alert('You canceled the execution.');
//     }
// );

// ask('Do you agree?',yes,yes);

const question = () => {
    return q = "'Do you agree?'"
}
console.log(question())
const  yes= () => {
    alert("i'm agree with you")
}
const no = () => {
    alert("Whyyy")
}
function ask(question, yes, no) {
    question();
    yes();
    no();
}

console.log(ask(question,yes,no))



