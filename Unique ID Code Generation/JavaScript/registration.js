'use strict'
function dateVal()
{
var todayDate = new Date();
  var month = todayDate.getMonth()+1;
  var year = todayDate.getUTCFullYear();
  var tdate= todayDate.getDate();
  if(month < 10){
    month = "0"+ month;
  }
  if(tdate < 10){
    tdate = "0"+ tdate;
  }
  var maxDate = year+ "-" + month + "-" + tdate;
  document.getElementById("dob").setAttribute("max", maxDate);
}

  function registration() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var date = document.getElementById("dob").value;
  var mail = document.getElementById("email").value;
  var phnum = document.getElementById("mobileNo").value;
  var radio1 = document.getElementById("Male").checked;
  var radio2 = document.getElementById("Female").checked;
  var radio3 = document.getElementById("Transgender").checked;
  var addrs = document.getElementById("textareaAdd").value;
  var cityval = document.getElementById("city").value;

  
  
  


  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  

  if (fname == '') {
    alert('Please enter your Firstname');
  }
  else if (!letters.test(fname)) {
    alert('Name field required only alphabet characters');
  }
  else if (lname == '') {
    alert('Please enter your Lastname');
  }
  else if (!letters.test(lname)) {
    alert('LastName field required only alphabet characters');
  }
  else if (date == '') {
    alert('Please enter your date of birth');
  }
  else if (mail == '') {
    alert('Please enter your email');
  }
  else if (!filter.test(mail)) {
    alert('Invalid email');
  }
  else if (phnum == '') {
    alert('Please enter your Phone number');
  }
  else if (isNaN(phnum)) {
    alert('Please enter valid Phone number');
  }
  else if (phnum.length != 10) {
    alert('Enter a valid Phone Number');
  }
  else if ((phnum.charAt(0)!=9) && (phnum.charAt(0)!=8) && (phnum.charAt(0)!=7)) {
    alert('Please enter charAt Phone number');
  }
  else if (myform.selectfield.selectedIndex == 0) {
    alert('Please select your marital status');
  }
  else if ((radio1 == '') && (radio2 == '') && (radio3 == '')) {
    alert('Please select your gender');
  }
  else if (addrs == '') {
    alert('Please enter your Address');
  }
  else if (myform.state.selectedIndex == 0) {
    alert('Please select your state');
  }
  else if (cityval == '') {
    alert('Please enter your city');
  }
  else if (!letters.test(cityval)) {
    alert('City field required only characters');
  }
  else {
    alert('Thank you for Registration');
    window.location = "success.html";
  }
}

