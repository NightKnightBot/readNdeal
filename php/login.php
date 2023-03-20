<?php
    $password = test_input($_POST['password']);
    $email = test_input($_POST['email']);
    $conn = new mysqli('localhost','root','' ,'test');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error); 
    } else {
        $query1 = "SELECT id,email,password FROM registration WHERE email = '$email'";
        $fire1 = mysqli_query($conn, $query1) or die("Could not fire query1");
        $row = $fire1->fetch_assoc();
        if(mysqli_num_rows($fire1) < 1) {
            echo '<script>window.alert("Email not found. Please sign up")</script>';
            echo '<script>window.location.replace("../html/login.html")</script>';
        }
        else if($password != $row["password"]) {
            echo "<script>window.alert('Your Password is incorrect. Please check your password.')</script>";
            echo '<script>window.location.replace("../html/login.html")</script>';
        }
        else {
            echo '<script>window.location.replace("../html/HomePage.html")</script>';
        }
        $conn->close();
    }
    
    function test_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }
?>