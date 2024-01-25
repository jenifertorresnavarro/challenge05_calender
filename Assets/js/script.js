var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY')); 

saveBtn.addEventListener("click", function () {

localStorage.setItem('row time-block past', 'hour');

})


var date1 = new Date("2024-01-24");
var date2 = new Date("2024-01-25");

if (date1 < date2) {
  console.log("Date 1 is before Date 2");
} else {
  console.log("Date 1 is after Date 2");
}


if (date1 > date2) {
  console.log("Date 1 is after Date 2");
} else {
  console.log("Date 1 is before Date 2");
}


if (date1 === date2) {
  console.log("Date 1is exaclty the same as Date 2");
} else {
  console.log("Date 1 not exactly the same as Date 2");
}

$(function () {


});

