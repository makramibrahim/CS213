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
    width: 30%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

</style>
	
</head>
<body>
<header>
    <h1> CS 213 | PHP Week 11 problem 5</h1>
</header>

     <?php
           echo "<table>
              <tr> 
               <th>N</th>
               <th>X</th>
               <tr>";

          $x = $_POST['x'];
          $n = $_POST['n'];
          
          for ($i = 1, $output = 1; $i <= $n; $i++)
          {
              $output *= $x;
              echo "<tr> <td>$i</td> <td>$output</td><tr>";
          }
          echo "</table>";
       
       ?>
    
    <footer>&copy; Makram Ibrahim</footer>
</body>
</html>