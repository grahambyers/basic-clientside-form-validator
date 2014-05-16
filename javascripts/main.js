$(document).ready(function () {
    $("#submit").click(function () {
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var age = document.getElementById('age').value;
        
        if (fname.length == 0) {
            alert("Please input a first name");
        } else if (lname.length == 0) {
            alert("Please input a last name");
        } else if (age.length == 0) {
            alert("Please input an age");
        } else {
            document.getElementById("answer").innerHTML = ("Hello " + fname + " " + lname + ", you are " + age);
        }
        
    });
});
