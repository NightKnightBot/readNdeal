<?php
    function test_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    $email = test_input($_POST['email']);
    $uname = test_input($_POST['uname']);
    $number = test_input($_POST['number']);
    $password = test_input($_POST['password']);
    
    // Database connection
    $conn = new mysqli('localhost','root','' ,'test');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {

        $query = "SELECT email FROM registration WHERE email = '$email'";
        $fire = mysqli_query($conn, $query) or die("Could not fire query");
        
        if(empty($uname)) {
            echo '<script>window.alert("Cannot have empty username")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else if(mysqli_num_rows($fire) > 0) {
            echo '<script>window.alert("Email already in use")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else if(!preg_match("/^[a-zA-Z-']*$/", $uname)){
            echo '<script>window.alert("Name can only contain LETTERS and WHITESPACES")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else if(strlen($password) < 8) {
            echo '<script>window.alert("Password must be atleast 8 characters long")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else if(empty($password)) {
            echo '<script>window.alert("Password cannot be empty")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else if(strlen($number) != 10) {
            echo '<script>window.alert("Phone number must be 10 characters long")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo '<script>window.alert("check email")</script>';
            echo '<script>window.location.replace("../index.html")</script>';
        }
        else {
            $stmt = $conn->prepare("insert into registration(email, uname, number, password) values(?, ?, ?, ?)");
            $stmt->bind_param("ssis", $email, $uname, $number, $password);
            $execval = $stmt->execute();
            echo '<script>window.location.replace("../html/login.html")</script>';
            $stmt->close();
        }
        $conn->close();
    }
?>