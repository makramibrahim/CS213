<html>
<head>
  <title><?php echo ucfirst($_POST['action']) . ' Order'; ?></title>
  <link rel="stylesheet" type="text/css" href="week12.css">
  <?php session_start(); ?>
</head>

<body>
  <p>
    <?php
        if ($_POST['action'] === "confirm")
        {
            echo 'Confirmed: Order #' . rand(10000, 99999) . ' - ' . $_SESSION['orderPackage'] . ' package';
            echo '<br />';
            echo 'Thank you for your purchase!';
        }
        else
        {
            echo 'Order Cancelled';
            echo '<br />';
            echo 'If you were experiencing any trouble with your order, please feel free to contact support.';
        }
    ?>
  </p>
</body>
</html>