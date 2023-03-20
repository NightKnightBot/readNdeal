
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Read n' Deal</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <script src="formValidation.js"></script>
        <link rel="stylesheet" href="css/login.css">
        <style>
            body {
                background-image: url('assets/backgorundhomepage.png');
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
            }

            div.jumbotron {
                background-image: url('assets/brug.png');
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                opacity: 1;
                width: 10;
            }

            p,
            label {
                font-size: x-large;
            }

            h1 {
                text-align: left;
            }

            ;
        </style>
    </head>
    <body>
        <div class="jumbotron container p-7 my-7 bg-secondary text-white">
            <h1 class="display-3">Log In</h1>
            <p class="lead">Login to Continue!</p>
            <hr class="my-3">
            <center>
                <h2></h2>
            </center>
            <br>
            <br>
            <center>
                <form id="form1" action="index.php" method="post">
                    <label for="email">Enter your email:</label>
                    <input type="email" id="mail" name="email">
                    <br>
                    <br>
                    <label for="user_name">Enter your username:</label>
                    <input type="text" id="uname" name="uname">
                    <br>
                    <br>
                    <label for="number">Enter your mobile number:</label>
                    <input type="number" name="number" id="num">
                    <br>
                    <br>
                    <label for="password">Enter your password</label>
                    <input type="password" name="password" id="pass">
                    <br>
                    <br>
                    <button type="submit" class="button">Submit</button>
                </form>
            </center>
            <br>
        </div>
    </body>
</html>