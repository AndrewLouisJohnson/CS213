<html>
	<head>
		<title>Week 11 : Problem 6</title>
	</head>
	<body>
			<?php
				$string = $_POST["input6"];
				$list = explode(",",$string);
				natcasesort($list); //case insensitive ascending sort
				echo "<p>";
				foreach($list as $mySort){
					echo $mySort;
					echo "<br/>";
				}
				echo "</p>";
			?>
	</body>
</html> 
