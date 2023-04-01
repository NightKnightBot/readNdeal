<?php
    $title = $_POST['title'];
    $data = $_POST['data'];
    $rating = $_POST['rating'];
    $conn = new mysqli('localhost','root','' ,'test');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error); 
    } else {
        $stmt = $conn->prepare("insert into review(title, data, rating) values(?, ?, ?)");
        $stmt->bind_param("ssi", $title, $data, $rating);
        $execval = $stmt->execute();
        echo '<script>window.alert("done")</script>';
        $stmt->close();
        $sql = "SELECT id, name_fld, email_fld, msg_fld FROM contactform_entries";
    //fire query
        $result = mysqli_query($con, $sql);
        if(mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
            echo "id: " . $row["id"]. " - Name: " . $row["name_fld"]. " Email: ". $row["email_fld"]. " Message: ". $row["msg_fld"] . "<br>";
            }
        }
        else {
            echo "0 results";
        }
        
        echo '<script>window.location.replace("../html/HomePage.html")</script>';
        $conn->close();
    }
?>
