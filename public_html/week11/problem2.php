<html>
<head>
	<title>CS 213 | Week 11</title>
 <style>
     header, footer{
         background-color: #6F62FA;
         color: #FFFFFF;
          padding: 1em;
     }
      body{
         background-color: #96999A;
         width: 868px;
         height: 700px;
         margin-right: auto;
         margin-left: auto;
     }
</style>
	
</head>
<body>
<header>
    <h1> CS 213 | PHP Week 11 problem 2</h1>
</header>

    <?php
    echo "<p> Time Zone </p>";
      date_default_timezone_set('America/Los_Angeles');
      echo date("h:i:s:a, l F jS");
    ?>
    
    <footer>&copy; Makram Ibrahim</footer>
</body>
</html>