<?php
    function test_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    $bookname = test_input($_POST['book-name']);
    $bookprice = test_input($_POST['book-price']);
    
    session_start();
    // Database connection
    $conn = new mysqli('localhost','root','' ,'cart');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        if(isset($_SESSION['cart'])) {

        }
        else {
            $_SESSION['cart'][0] = array('book-name'=>$bookname, 'book-price'=>$bookprice);
            print_r($_SESSION['cart']);
        }

        $conn->close();
    }
?>