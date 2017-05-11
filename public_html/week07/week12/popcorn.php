
<!--	popcorn3.php
	Processes the data collected from popcorn3.html
	-->
<html>
<head>
<title>  
Procees the Propcorn order form
</title>
</head>
<body> 

<?php
// If any of the quatities are blank, set them to zero

if ($unpop == "") $unpop = 0;
if ($caramel == "") $caramel = 0;
if ($caramelnut == "" ) $caramelnut = 0;
if ($toffeynut == "") $toffeynut =0;

//Compute the item costs and total cost

$unpop_cost = $unpop * 3.0;
$caramel_cost =  $caramel *3.5;
$caramelnut_cost = 4.5 * $caramelnut ;
$toffeynut_cost = 5.0 * $toffeynut;

$total_price = $unpop_cost + $caramel_cost +
	$caramelnut_cost + $toffeynut_cost ;

$total_items = $unpop + $caramel + $caramelnut + $toffeynut;

//Return results to the browser in a table

?>

<h4>Customer</h4>
<?php
print ("$name <br /> $street <br /> $city <br />");
?>

 <table border = border">
	<caption>Order information</caption>
	<tr>
		<th>Product</th>
		<th>Unit Price </th>
		<th>Quantity Ordered</th>
		<th>Item Cost</th>
	</tr>
                       
	<tr aling = "center">
		<td> Unpopped Popcorn (1 lb.) </td>
        	<td> $3.00 </td>
        	<td><?php print ("$unpop");?> </td>
		<td> <?php printf ("$ %4.2f", $unpop_cost); ?> </td>
	</tr>
	<tr aling = "center">
        	<td> Caramel Popcorn (2 lb. canister) </td>
        	<td> $3.50 </td>
        	<td> <?php print ("$caramel");?> </td>
                <td> <?php printf ("$ %4.2f", $caramel_cost); ?> </td>
        </tr>   
	<tr aling = "center">
        	<td> Caramel Nut Popcorn (2 lb. canister) </td>
        	<td> $4.50 </td>
        	<td> <?php print ("$caramelnut");?> </td>
                <td> <?php printf ("$ %4.2f", $caramelnut_cost); ?> </td>
        </tr>   

	
	   <tr aling = "center">
        	<td> Toffey Nut Popcorn (2 lb. canister) </td>
        	<td> $5.00 </td>
        	<td> <?php print ("$toffeynut");?> </td>
                <td> <?php printf ("$ %4.2f", $toffeynut_cost); ?> </td>
    </tr>
</table>
    

<?php
print ("You ordered $total_items popcorn items <br/> <br/> \n");
printf ("Your total bill is: \$ %5.2f <br />", $total_price);
print ("Your chosen method of payment is: $payment <br />");
?>
</body>
</html>