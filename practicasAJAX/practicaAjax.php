<?php

	if(isset($_REQUEST['opcion'],$_REQUEST['opcion2'])){
			switch($_REQUEST['opcion']){
				case 'A':
				echo "se recibio la letra A y" .$_REQUEST['opcion2'];
				break;
				case 'B':
				echo "se recibio la letra B y ".$_REQUEST['opcion2'];
				break;
				default:
				echo "se recibio otra cosa ";
				break;
			}
		}else{
		echo"no se recibio el parametro opcion";
	}
	



?>