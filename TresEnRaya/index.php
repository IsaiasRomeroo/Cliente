<!DOCTYPE html>
<html>
<head>
	<title>Tres en raya </title>
	<script type ="text/javascript" src="tresenraya.js"></script>
</head>
<body>
	<h1>El juego del tres en raya</h1>
<table border="2px solid black">
	<?php
        
        for ($i=1; $i <=9 ; $i++) { 
        	if(($i==1)||($i==4)||($i==7)){
        		echo "<tr>";
        	}
          
        	echo"\t\t\t".'<td><canvas id="c'.$i.'" width="100" height="100" onclick="pinta(c'.$i.','.($i-1).')"></canvas></td>'."\n";
        	if(($i==3)||($i==6)||($i==9)){
        		echo"\t\t<tr>\n";
        	}

        }

   			
     

	?>
	</table>
	<hr>
</body>
</html>
