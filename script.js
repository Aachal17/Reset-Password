function myfunc() {
     var Pass1 = document.getElementById("Pass1").value;
     var Pass2 = document.getElementById("Pass2").value;

     if (Pass1=="") {
          document.getElementById("msg1").innerHTML="*Please Enter the Password*";
          return false;
     }

     if (Pass1.length < 6) {
          document.getElementById("msg1").innerHTML = "*Password length should be minimum 6 characters*";
          return false;
     }

     if (Pass1.length > 20) {
          document.getElementById("msg1").innerHTML = "*Password length should be maximum 20 characters*";
          return false;
     }

     if (Pass1!=Pass2) {
          document.getElementById("msg2").innerHTML = "*Passwords do not match*";
          return false;
     }

}