function validate() {
    let email = document.getElementById('mail').value;
    let name = document.getElementById('uname').value;
    let number = document.getElementById('num').value;
    let password = document.getElementById('pass').value;

    if(name=="") {
        document.getElementById('uname').focus();
        window.alert('Enter Username');
    }
    else if(password.length < 8) {
        document.getElementById('pass').focus();
        window.alert('Password must be longer than 8 characters');
    }
    else if(number.length != 10) {
        document.getElementById('num').focus();
        window.alert('Check Phone Number');
    }
    else if(password == "") {
        document.getElementById('pass').focus();
        window.alert('Enter Password');
    }
    window.alert("Validated");
}