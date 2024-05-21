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
<!DOCTYPE html>
<html>
<head>
    <title>Form İşleme</title>
</head>
<body>
    <form id="myForm">
        Ad: <input type="text" id="name"><br>
        <input type="submit" value="Gönder">
    </form>

    <script>
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();  // Formun gönderilmesini engelle
            var name = document.getElementById("name").value;
            console.log("Ad: " + name);
        });
    </script>
</body>
</html>


