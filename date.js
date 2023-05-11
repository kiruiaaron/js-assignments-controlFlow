let currentDate = new Date()

let today = currentDate.getDate();

let month = currentDate.getMonth()+1;
let year = currentDate.getFullYear();

currentDate = today +'-'+month+'-'+year;

console.log(currentDate);