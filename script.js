const body = document.body;
const dataobj = {};
var pic;

function validateName(name_str) {
  let str = name_str.value;
  let name = name_str.name;

  let pattern = /^[A-Za-z\s]+$/;
  if (str.length == 0) {
    document.getElementById(name + "_error").innerHTML =
      "*This field is required.";
  } else if (!str.match(pattern)) {
    document.getElementById(name + "_error").innerHTML =
      "*Only characters allowed.";
  } else {
    document.getElementById(name + "_error").innerHTML = "";
  }
}
function validateOffice(office) {
  let str = office.value;
  let name = office.name;
  let pattern = /^[A-Za-z0-9\s \.\-\/\\]+$/;
  if (str.length == 0) {
    document.getElementById(name + "_error").innerHTML =
      "*Address is required.";
  } else if (!str.match(pattern)) {
    document.getElementById(name + "_error").innerHTML =
      "*Special characters are not allowed.";
  } else {
    document.getElementById(name + "_error").innerHTML = "";
  }
}
function validateMobile(mobile) {
  let number = mobile.value;
  let name = mobile.name;
  let pattern = /^[6-9]{1}[0-9]{9}$/;
  if (number.length == 0) {
    document.getElementById(name + "_error").innerHTML =
      "*This field is required.";
  } else if (!number.match(pattern)) {
    document.getElementById(name + "_error").innerHTML =
      "*Please enter valid format.";
  } else {
    document.getElementById(name + "_error").innerHTML = "";
  }
}
function validateEmail(email) {
  let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[.]+[a-zA-Z.]+$/;
  if (email.length == 0) {
    document.getElementById("email_error").innerHTML =
      "*This field is required.";
  } else if (!email.match(pattern)) {
    document.getElementById("email_error").innerHTML =
      "*Please enter valid email format.";
  } else {
    document.getElementById("email_error").innerHTML = "";
  }
}
function validateAadhar(aadharno) {
  let pattern = /^[0-9]{12}$/;
  if (aadharno.length == 0) {
    document.getElementById("aadhar_error").innerHTML =
      "*This field is required.";
  } else if (!aadharno.match(pattern)) {
    document.getElementById("aadhar_error").innerHTML =
      "*Please enter valid aadharno format.";
  } else {
    document.getElementById("aadhar_error").innerHTML = "";
  }
}

function validateGST(gstinno) {
  let pattern = /^[0-9]{2}[A-Z0-9]{10}[0-9]{1}[Z]{1}[0-9]{1}$/;
  if (gstinno.length == 0) {
    document.getElementById("gstin_error").innerHTML =
      "*This field is required.";
  } else if (!gstinno.match(pattern)) {
    document.getElementById("gstin_error").innerHTML =
      "*Please enter valid GST No format.";
  } else {
    document.getElementById("gstin_error").innerHTML = "";
  }
}

function validateVehicleNo(vehicleno) {
  let pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
  if (vehicleno.length == 0) {
    document.getElementById("vehicleno_error").innerHTML =
      "*This field is required.";
  } else if (!vehicleno.match(pattern)) {
    document.getElementById("vehicleno_error").innerHTML =
      "*Please enter valid Vehicle No format.";
  } else {
    document.getElementById("vehicleno_error").innerHTML = "";
  }
}

function validateAllnumbers(data) {
  let number = data.value;
  let name = data.name;
  let pattern = /^[0-9]+$/;
  if (number.length == 0) {
    document.getElementById(name + "_error").innerHTML =
      "*This field is required.";

  } else if (!number.match(pattern)) {
    document.getElementById(name + "_error").innerHTML =
      "*Only numbers allowed.";

  } else {
    document.getElementById(name + "_error").innerHTML = "";
  }
}

function validateBloodgrp(bloodgrp) {
  if (bloodgrp.length == 0) {
    document.getElementById("bloodgrp_error").innerHTML =
      "*This field is required.";
  } else {
    document.getElementById("bloodgrp_error").innerHTML = "";
  }
}

function viewFile() {
  const file = document.querySelector("input[type=file]").files[0];
  document.getElementById("img").src = URL.createObjectURL(file);
  // pic = URL.createObjectURL(file);

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    dataobj.pic = reader.result;
  });
  if (file) {
    reader.readAsDataURL(file);
  }
}

// Gender Radio Selection
function validateGender(gender) {
  dataobj.gender = gender;
  // console.log(dataobj.gender);
}

// Save data
function openData(str) {
  let flag = 1;

  let name = document.getElementById("name").value;
  let office = document.getElementById("office").value;
  let residence = document.getElementById("residence").value;
  let country_code = document.getElementById("country_code").value;
  let mobile = document.getElementById("mobile").value;
  let telephone = document.getElementById("telephone").value;
  let profile_pic = document.getElementById("profile_pic").value;
  let emailid = document.getElementById("emailid").value;
  let aadharno = document.getElementById("aadharno").value;
  let gstin = document.getElementById("gstin").value;
  let vehicleno = document.getElementById("vehicleno").value;
  let dlno = document.getElementById("dlno").value;
  let bank_acc = document.getElementById("bank_acc").value;
  let accno = document.getElementById("accno").value;
  let debitcardno = document.getElementById("debitcardno").value;
  let creditcardno = document.getElementById("creditcardno").value;
  let passportno = document.getElementById("passportno").value;
  let pan_no = document.getElementById("pan_no").value;
  let bloodgrp = document.getElementById("bloodgrp").value;
  let dob = document.getElementById("dob").value;

  if (name.length == 0) {
    document.getElementById("name_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (office.length == 0) {
    document.getElementById("office_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (residence.length == 0) {
    document.getElementById("residence_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (mobile.length == 0) {
    document.getElementById("mobile_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (telephone.length == 0) {
    document.getElementById("telephone_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (profile_pic.length == 0) {
    document.getElementById("profile_pic_error").innerHTML =
      "*Please upload a picture.";
    flag = 0;
  }
  if (emailid.length == 0) {
    document.getElementById("email_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (aadharno.length == 0) {
    document.getElementById("aadhar_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (gstin.length == 0) {
    document.getElementById("gstin_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (vehicleno.length == 0) {
    document.getElementById("vehicleno_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (bank_acc.length == 0) {
    document.getElementById("bank_acc_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (accno.length == 0) {
    document.getElementById("accno_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (dlno.length == 0) {
    document.getElementById("dlno_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (debitcardno.length == 0) {
    document.getElementById("debitcardno_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (creditcardno.length == 0) {
    document.getElementById("creditcardno_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (passportno.length == 0) {
    document.getElementById("passportno_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (pan_no.length == 0) {
    document.getElementById("pan_no_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }
  if (bloodgrp.length == 0) {
    document.getElementById("bloodgrp_error").innerHTML =
      "*This field is required.";
    flag = 0;
  }

  var hobby_tosend = [];
  hobby = document.getElementsByName("hobby");
  let count = 0;
  hobby.forEach((hobby_name) => {
    if (hobby_name.checked == true) {
      count++;
      hobby_tosend.push(hobby_name.value);
    }
  });
  // alert(count)
  if (count < 2) {
    document.getElementById("hobby_error").innerHTML =
      "*Please choose more than 2 hobbies.";
    flag = 0;
  }

  dataobj.hobby = hobby_tosend;
  dataobj.name = name;
  dataobj.office = office;
  dataobj.residence = residence;
  dataobj.country_code = country_code;
  dataobj.mobile = mobile;
  dataobj.telephone = telephone;
  dataobj.profile_pic = profile_pic;
  dataobj.emailid = emailid;
  dataobj.aadharno = aadharno;
  dataobj.gstin = gstin;
  dataobj.vehicleno = vehicleno;
  dataobj.dlno = dlno;
  dataobj.bank_acc = bank_acc;
  dataobj.accno = accno;
  dataobj.debitcardno = debitcardno;
  dataobj.creditcardno = creditcardno;
  dataobj.passportno = passportno;
  dataobj.pan_no = pan_no;
  dataobj.bloodgrp = bloodgrp;
  dataobj.dob = dob;
  dataobj.name2 = document.getElementById("name2").value;
  dataobj.mobile2 = document.getElementById("mobile2").value;
  dataobj.telephone2 = document.getElementById("telephone2").value;
  dataobj.relation = document.getElementById("relation").value;

  if (flag == 1) {

    if (str == "save") {
      localStorage.setItem(emailid, JSON.stringify(dataobj));
    }
    if (str == "edit") {
        alert("hello")
      let getdata = JSON.parse(localStorage.getItem("data"));
      let id;
      let paramString = window.location.search;
      let queryString = new URLSearchParams(paramString);

      for (let pair of queryString.entries()) {
        id = pair[1];
      }

        const newData = getdata.map(obj=>{
          if(obj.id == id){
            // alert(data.name);
            obj = data;
          }
        });

      //   deleteData(getdata.id);

    //   getdata = data;

      //   dataobj.id = data.length;
      //   data.push(dataobj);
    //   localStorage.setItem("data", JSON.stringify(newData));
    }

    // // let key = localStorage.length + 1;
    // // localStorage.setItem(key, JSON.stringify(dataobj));
  }
}

// View data
function viewData() {
  const getdata = localStorage.getItem("data");
  data = JSON.parse(getdata);

  let paramString = window.location.search;
  let queryString = new URLSearchParams(paramString);

  for (let pair of queryString.entries()) {
    data = data[pair[1]];
  }

  document.getElementById("name").value = data.name;
  document.getElementById("office").value = data.office;
  document.getElementById("residence").value = data.residence;
  document.getElementById("country_code").value = data.country_code;
  document.getElementById("mobile").value = data.mobile;
  document.getElementById("telephone").value = data.telephone;
  document.getElementById("emailid").value = data.emailid;
  document.getElementById("aadharno").value = data.aadharno;
  document.getElementById("gstin").value = data.gstin;
  document.getElementById("vehicleno").value = data.vehicleno;
  document.getElementById("dlno").value = data.dlno;
  document.getElementById("bank_acc").value = data.bank_acc;
  document.getElementById("accno").value = data.accno;
  document.getElementById("debitcardno").value = data.debitcardno;
  document.getElementById("creditcardno").value = data.creditcardno;
  document.getElementById("passportno").value = data.passportno;
  document.getElementById("pan_no").value = data.pan_no;
  document.getElementById("bloodgrp").value = data.bloodgrp;
  document.getElementById("dob").value = data.dob;

  // document.getElementById("gender").value = data.gender;
  const gender = data.gender;
  // alert(gender)
  if (gender == "Male") {
    document.getElementById("male").checked = true;
  } else if (gender == "Female") {
    document.getElementById("female").checked = true;
  } else {
    document.getElementById("other").checked = true;
  }

  var hobby_toget = data.hobby;
  var hobby = document.getElementsByName("hobby");
  hobby_toget.forEach((hobby_name) => {
    hobby.forEach((array) => {
      if (hobby_name == array.value) {
        array.checked = true;
      }
    });
  });

  document.querySelector("img").src = data.pic;

  document.getElementById("name2").value = data.name2;
  document.getElementById("mobile2").value = data.mobile2;
  document.getElementById("telephone2").value = data.telephone2;
  document.getElementById("relation").value = data.relation;
}

function deleteData(id) {
  let data = JSON.parse(localStorage.getItem("data"));

  const newData = data.filter((object) => {
    return object.id !== id;
  });
  localStorage.setItem("data", JSON.stringify(newData));
  //   location.reload();
}
