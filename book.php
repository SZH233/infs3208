<html>
    <body>
        Welcome <?php echo $_GET["lname"]; ?><br>
        Please confirm your phone number <?php echo $_GET["phone-number"]; ?><br>
        You've booked the room from <?php echo $_GET["date_in"]; ?> to <?php echo $_GET["date_out"]; ?> . <br>
        <?php
        $servername = "localhost";
        $username = "php";
        $password = "php";
        $dbname = "cloud_computing";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("connect failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO booking (LastName, Phone_Number, InDate, OutDate)
        VALUES ($_GET["lname"], $_GET["phone_number"], $_GET["date_in"], $_GET["date_out"])";

        if ($conn->query($sql) === TRUE) {
            echo "booking success";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close()
        ?>
    </body>
</html>
