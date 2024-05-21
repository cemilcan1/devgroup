<!DOCTYPE html>
<html>
<head>
    <title>Buton Tıklaması</title>
</head>
<body>
    <button onclick="showMessage()">Tıkla</button>
    <p id="message"></p>

    <script>
        function showMessage() {
            document.getElementById("message").innerHTML = "Butona tıkladınız!";
        }
    </script>
</body>
</html>

