<html>
	<head>
		<title>Week 11 : Problem 4</title>
	</head>
	<body>
		<?php
			$translate['one'] = "uno";
			$translate['two'] = "dos";
			$translate['three'] = "tres";
			$translate['four'] = "cuatro";
			$translate['five'] = "cinco";
			$translate['six'] = "seis";
			$translate['seven'] = "siete";
			$translate['eight'] = "ocho";
			$translate['nine'] = "nueve";
			$translate['ten'] = "diez";
			$translate['eleven'] = "once";
			$translate['twelve'] = "doce";
			$translate['thirteen'] = "trece";
			$translate['fourteen'] = "catorce";
			$translate['fifteen'] = "quince";
			$translate['sixteen'] = "dieciseis";
			$translate['seventeen'] = "diecisiete";
			$translate['eighteen'] = "dieciocho";
			$translate['nineteen'] = "diecinueve";
			$translate['twenty'] = "veinte";
			$english = $_POST["input4"];
			$trueFalse = true;
			echo "<p>";
			foreach ($translate as $eng => $span){
				if($eng == $english) {
					echo "The word \"". $eng ."\" in Spanish is \"".$span."\"";
					$trueFalse = false;
					break 2; //should break out of if statement and foreach loop
				}
			}
			if($trueFalse){
				echo "The English cardinal \"".$english."\" is not between \"one\" and \"twenty\"";
			}
			echo "</p>"
		?>
	</body>
</html> 
