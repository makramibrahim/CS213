<!DOCTYPE html>
<html id="html2">
    <head>
        <title>CS 213 | PHP Week 12</title>
        <meta charset="UTF-8">
        <meta name="description" content="e-commerce company">
        <meta name="keywords" content=", ">
        <meta name="author" content="Makram Ibrahim">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <!-- Bootstrap core CSS -->
      <link href="css/bootstrap.min.css" rel="stylesheet">
       <link href="css/bootstrap.css" rel="stylesheet">

      <!-- Custom styles for this template -->
      <link href="week07.css" rel="stylesheet">
       <script type="text/javascript" src="justOnce.js"></script>  
       <style type="text/css">

    td, th, table {
        border:thin solid black;
        padding: 10px;
    }
    .error {
        color: #FF0000;
    }

    #p-php {
        margin: auto;
        width: 450px;
    }
</style> 
    </head>
    <body id="bodyBook">
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
            </div>
              
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="book.html">Book Now</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
        <!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" src="images/dubaiYellow.jpg" alt="First slide">
          <div class="container">
            <div class="carousel-caption">
              <h1 id="h1p2">Order Confirmation</h1>
              </div>
              </div>
              </div>
              </div>
            </div><!-- /.carousel -->

            <div id="p-php">
        <?php
        $oneDay      = $_POST['oneDay'];
        $dubaiSafari = $_POST['dubaiSafari'];
        $adventure   = $_POST['adventure'];
        $skydive     = $_POST['skydive'];
        $breakfast   = $_POST['breakfast'];
        $lunch       = $_POST['lunch'];
        $dinner      = $_POST['dinner'];


        // if any of the inputs are blank, set it to zero.

        if ($oneDay == "") $oneDay = 0;
        if ($dubaiSafari == "") $dubaiSafari = 0;
        if ($adventure == "") $adventure = 0;
        if ($skydive == "") $skydive = 0;
        if ($breakfast == "") $breakfast = 0;
        if ($lunch == "") $lunch = 0;
        if ($dinner == "") $dinner = 0;
  

        // compute all the costs for all items
        $oneDay_cost       = 199.99  * $oneDay;
        $dubaiSafari_cost  = 189.99  * $dubaiSafari;
        $adventure_cost    = 229.99  * $adventure;
        $skydive_cost      = 1495.99 * $skydive;
        $breakfast_cost    = 19.99   * $breakfast;
        $lunch_cost        = 49.99   * $lunch;
        $dinner_cost       = 12.99   * $dinner;

        $total_cost = $oneDay_cost + $dubaiSafari_cost + $adventure_cost + $skydive_cost +
        $breakfast_cost + $lunch_cost + $dinner_cost;

        $total_items = $oneDay + $tour + $dubaiSafari + $adventure + $skydive + $breakfast + $lunch + $dinner;
    ?>
     <!-- Get costumer information-->

     <h4 style="text-align: center"><b>Bill Summary<b></h4>

     <span><?php echo "Cardholder's Name: " . $_POST['fName'] . " " . $_POST['lName']; ?></span><br>
     <span><?php echo "Phone Number: " . $_POST['phoneNumber']; ?></span><br>
     <span><?php echo "Email: " . $_POST['email']; ?></span><br>
     <span><?php echo "Street Address: " . $_POST['stAddress']; ?></span><br>
     <span><?php echo "City: " . $_POST['city']; ?></span><br>
     <span><?php echo "State: " . $_POST['state']; ?></span><br>
     <span><?php echo "Zip: " . $_POST['zip']; ?></span><br>
     <span><?php echo "Card Number: ************" . substr($_POST['visaCard'], 16); ?></span><br>

     <span><?php echo "Card Type: ";
              
              // The first number determines the card type: 3 - American Express, 4 - Visa, 5 - Master Card, 6 - Discover
              switch ($_POST['cardtype'])
              {
                  case "1":
                      echo 'Visa';
                      break;
                  case "2":
                      echo 'Master Card';
                      break;
                  case "3":
                      echo 'Discover';
                      break;
                  case "4":
                      echo 'American Express';
                      break;
                  default:
                      echo 'Unknown';
                      break;
              }
          ?></span><br>

          <span><?php  

          $cc = array(
          	          "01" => "January",
                      "02" => "February",
                      "03" => "March",
					            "04" => "April",
					            "05" => "May",
					            "06" => "June",
					            "07" => "July",
					            "08" => "August",
					            "09" => "September",
   					          "10" => "October",
					            "11" => "November",
             		      "12" => "December");

          echo "Expration Date: " . $cc[$_POST['month']];?>
          	
          </span>

          <span><?php

                    echo " " .$_POST['year'];

                ?>
          </span><br>
    
    <table>
    <tr>
    <th>Product</th>
    <th>Unit Price</th>
    <th>Quntity Order</th>
    <th>Item Cost</th>
    </tr>

    <tr>
    <td>One Day</td>
    <td>$299.99 </td>
    <td><?php printf("$oneDay"); ?></td>
    <td><?php printf("$ %4.2f", $oneDay_cost); ?></td>
    </tr>

    <tr>
    <td>Dubai Safari</td>
    <td>$189.99</td>
    <td><?php printf("$dubaiSafari"); ?></td>
    <td><?php printf("$ %4.2f", $dubaiSafari_cost);?></td>
    </tr>

    <tr>
    <td>Dubai Adventure</td>
    <td>$229.99</td>
    <td><?php printf("$adventure"); ?></td>
    <td><?php printf("$ %4.2f", $adventure_cost);?></td>
    </tr>

    <tr>
    <td>Skydive</td>
    <td>$2495.99</td>
    <td><?php printf("$skydive"); ?></td>
    <td><?php printf("$ %4.2f", $skydive_cost);?></td>
    </tr>

    <tr>
    <td>Breakfast</td>
    <td>$19.99</td>
    <td><?php printf("$breakfast"); ?></td>
    <td><?php printf("$ %4.2f", $breakfast_cost);?></td>
    </tr>

    <tr>
    <td>Lunch</td>
    <td>$49.99</td>
    <td><?php printf("$lunch"); ?></td>
    <td><?php printf("$ %4.2f", $lunch_cost);?></td>
    </tr>

    <tr>
    <td>Dinner</td>
    <td>$12.99</td>
    <td><?php printf("$dinner"); ?></td>
    <td><?php printf("$ %4.2f", $dinner_cost);?></td>
    </tr>

    </table>

    <?php print "<h4><b>Quntity Ordered: $total_items<b></h4>";
      printf ("<h4><b>Your total bill is: $ %5.2f<b></h4>", $total_cost);

   ?>
    <form action="confirmation.php" method="POST">
    <input type="submit" value ="Confirm Order" style="margin: 0" />
    </form>

   <form action="cancel.php" method="POST">
   <input type="submit" value ="Cancel Order" style="margin: 0" />
  </form>

  </div><br>

    <footer>
            2017 &copy; Makram Ibrahim 
        </footer>
    </body>
    
</html>
