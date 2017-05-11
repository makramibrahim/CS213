<html>
<head>
  <title>Order Confirmation</title>
  <link rel="stylesheet" type="text/css" href="week12.css">
  <?php 
      session_start();
      $_SESSION['orderPackage'] = $_POST['package'];
  ?>
</head>

<body>
  <form action="confirm.php" method="post">
    <h1><?php echo 'Confirm order for ' . $_POST['billingFName'] . ' ' . $_POST['billingLName']; ?></h1>
    <div>
      <h2>Item Information</h2>
      <span><?php echo 'Item selected: ' . $_POST['package']. ' package' ?></span>
      <br />
      <?php
          // The correct package price is not posted, set it here
          if ($_POST['package'] === "standard")
          {
              $price = 65.95;
          }
          else if ($_POST['package'] === "premium")
          {
              $price = 92.29;
          }
          else
          {
              $price = 1980.95;
          }
              
          echo '<span>Package price: $' . $price;
          echo '</span>';
          echo '<br />';
          echo '<span>Shipping: $15.00</span>';
          echo '<br />';
          echo '<span>Tax @8.000%: $' . round(($price + 15.00) * .08, 2) . '</span>';
          echo '<hr>';
          echo '<span>Total: $' . round(($price + 15) * 1.08, 2) . '</span>';
      ?>
    </div>
  
    <div>
      <h2>Billing Information</h2>
      <span><?php echo 'Cardholder\'s Name: ' . $_POST['billingFName'] . ' ' . $_POST['billingLName']; ?></span>
      <br />
      <span><?php echo 'Card Number: ************' . substr($_POST['cardNumber'], 12); ?></span>
      <br />
      <span>
          <?php
              echo 'Card Type: ';
              
              // The first number determines the card type: 3 - American Express, 4 - Visa, 5 - Master Card, 6 - Discover
              switch (substr($_POST['cardNumber'], 0, 1))
              {
                  case "3":
                      echo 'American Express';
                      break;
                  case "4":
                      echo 'Visa';
                      break;
                  case "5":
                      echo 'Master Card';
                      break;
                  case "6":
                      echo 'Discover';
                      break;
                  default:
                      echo 'Unknown';
                      break;
              }
          ?>
      </span>
      <br />
      <span>
          <?php
              // Array for indexing the month number into month name
              $months = array(1=>"January", "February", "March", "April",
                              "May", "June", "July", "August",
                              "September", "October", "November", "December");
              
              // Output month name
              echo 'Expiring: ' . $months[$_POST['expirationMonth']];
              
              // Year must be in 2015 or later
              echo ' 20' . $_POST['expirationYear'];
          ?>
      </span>
      <br />
      <span>
          <?php
              echo $_POST['billingAddress1'];
              
              // Billing Address 2 is not a required field, check that it's not blank
              if ($_POST['billingAddress2'] !== "")
              {
                  echo '<br />';
                  echo $_POST['billingAddress2'];
              }
          ?>
      </span>
      <br />
      <span><?php echo $_POST['billingCity'] . ', ' . $_POST['billingState'] . ' ' . $_POST['billingZip']; ?></span>
      <br />
      <?php
          // Billing Phone is not a required field, check that it's not blank
          if ($_POST['billingPhone'] !== "")
          {
              echo '<span>Phone: ' . $_POST['billingPhone'] . '</span>';
          }
      ?>
    </div>
    
    <?php if (array_key_exists('shippingCheckBox', $_POST)): /* Only show if shipping address box was marked */ ?>
    <div>
      <h2>Shipping Information</h2>
      <span>
          <?php
              echo $_POST['shippingAddress1'];
              
              // Shipping Address 2 is not a required field, check that it's not blank
              if ($_POST['shippingAddress2'] !== "")
              {
                  echo '<br />';
                  echo $_POST['shippingAddress2'];
              }
          ?>
      </span>
      <br />
      <span><?php echo $_POST['shippingCity'] . ', ' . $_POST['shippingState'] . ' ' . $_POST['shippingZip']; ?></span>
      <br />
      <span><?php echo 'Contact Phone: ' . $_POST['shippingPhone']; ?></span>
    </div>
    <?php endif; ?>
    <br /><br />
    <button name="action" value="confirm">Confirm Order</button>
    <button name="action" value="cancel">Cancel Order</button>
  </form>
</body>
</html>