<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Profile Toggle</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#" id="profileBtn">Profile</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </nav>

  <div id="profilePanel" class="profile-panel hidden">
    <h2>Profile</h2>
    <p>Name: Eric Chickenpox</p>
    <p>Email: eric.chickenpox@studdyhub.com</p>
    <button id="closeBtn">Close</button>
  </div>

  <script src="script.js"></script>
</body>
</html>