<html>
	<head>
		<title>Week 11 : Problem 5</title>
		<style>
			th, td{border:1px solid black;}
		</style>
	</head>
	<body>
		<table>
			<tr>
				<th>N</th>
				<th>X<sup>2</sup></th>
			</tr>
			<?php
				$n = $_POST["n"];
				$x = $_POST["x"];
				for ($i = 1; $i <= $n; $i++) {
					$calc = pow($x, $i);
					echo "<tr>";
					echo "<td>".$i."</td>";
					echo "<td>".$calc."</td>";
					echo "</tr>";
				}
			?>
		</table>
	</body>
</html> 
