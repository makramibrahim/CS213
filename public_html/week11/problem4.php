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
    <h1> CS 213 | PHP Week 11 problem 4</h1>
</header>

     <?php
          $translator = array('one'      =>       'uno',
                              'two'      =>       'dos',
                              'three'    =>      'tres',
                              'four'     =>    'cuatro',
                              'five'     =>     'cinco',
                              'six'      =>      'seis',
                              'seven'    =>     'siete',
                              'eight'    =>      'ocho',
                              'nine'     =>     'nueve',
                              'ten'      =>      'diez',
                              'eleven'   =>      'once',
                              'twelve'   =>      'doce',
                              'thirteen' =>     'trece',
                              'fourteen' =>   'catorce',
                              'fifteen'  =>    'quince',
                              'sixteen'  => 'dieciséis',
                              'seventeen'=>'diecisiete',
                              'eighteen' => 'dieciocho',
                              'nineteen' =>'diecinueve',
                              'twenty'   => 'veinte');
                              
          $eng = $_POST['input4'];
          $spn = $translator[$eng];
          if ($eng == "" && $eng !== $spn)
          {
            echo "The input must be between one and twenty";
          }
          else
          {
            echo "The word $eng in Spanish is $spn";
          }
       ?>
    <footer>&copy; Makram Ibrahim</footer>
</body>
</html>