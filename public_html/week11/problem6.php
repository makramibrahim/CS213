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
          table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 20%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>
	
</head>
<body>
<header>
    <h1> CS 213 | PHP Week 11 problem 6</h1>
</header>

     <?php

          $list = explode(",",  $_POST['input6']);
          sort($list);
          foreach($list as $lists)
          {
              echo "<table><tr><td>$lists</td><tr></table>";
          }
       ?>
    
    <footer>&copy; Makram Ibrahim</footer>
</body>
</html>