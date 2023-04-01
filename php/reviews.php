<?php
    $title = $_POST['title'];
    $data = $_POST['data'];
    $conn = new mysqli('localhost','root','' ,'review');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error); 
    } else {
        $stmt = $conn->prepare("insert into reviews(title,data) values(?, ?)");
        $stmt->bind_param("ss", $title, $data);
        $execval = $stmt->execute();
        echo '<script>window.alert("done")</script>';
        $stmt->close();
    }
?>