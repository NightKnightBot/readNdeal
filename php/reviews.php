<?php
    $title = $_POST['title1'];
    $data = $_POST['data'];
    $rating = $_POST['rating'];
    $conn = new mysqli('localhost','root','' ,'test') or die("Connection Failed : " . $conn->connect_error);
      $stmt = $conn->prepare("insert into review(title,data,rating) values(?, ?, ?)") or die("Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error);
      $stmt->bind_param("ssi", $title, $data, $rating) or die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
      $execval = $stmt->execute();
      $stmt->close();
    $conn->close();

    // Check if the query executed successfully
    if ($execval) {
        echo '<script>window.alert("done")</script>';
        if (isset($_SERVER['HTTP_REFERER'])) {
            header("Location: ".$_SERVER['HTTP_REFERER']);
        } else {
            header("Location: /"); // Redirect to homepage if HTTP_REFERER is not set
        }
        exit();
    } else {
        // Print any errors that occurred during the query execution
        echo "Error: " . $stmt->error;
    }
?>

