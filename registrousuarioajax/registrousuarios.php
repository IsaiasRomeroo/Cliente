<?php

			//ficheros con la clase usuario y la clase ListaUsuario
			require 'usuario.php';
			require 'listausuarios.php';

			$persona=json_decode($_POST['usu']);


			//comprobar que s erecibe al usuario y la contraseña
			//son datos obligatorios

			if($persona->usuario!="" && $persona->contrasena!=""){
				//se han recibido los datos obligatorios
				registrarUsuario($persona);
			}else{
				//no se han recibido los parametros
				echo json_encode(false);
			}


			//funcion para registrara el usuario en el sistema
			function registrarUsuario($p) {


				//datos del fichero con usuarios

				$path='datos/';
				$fichUsu= 'usuario.dat';

				//datos de entrada para crear el usuario
				$nom = $p->usuario;
				$ape = $p->apellidos;
				$cor = $p->correo;
				$usu = $p->usuario;
				$password = $p->contrasena;


				//se crea el objeto "reg" que contiwene los datos del usuario

				$reg = new Usuario($nom,$ape,$cor,$usu,$password);

				//se crea el objeto listausu con la lista de 
				//usarios ya creados

				$listaUsu = new listaUsuarios($path,$fichUsu);



				//si el usuario existe no se crea
				if ($listaUsu->noExisteUsuario($reg->getUsu())){

				//el usuario no existe y se guarda su
				//informacion en el fichero

				$fu = fopen($path.$fichUsu,"a");
				fputs($fu,$reg->creeLineafichero()."\n");
				fclose($fu);
				$resp=true;
				 json_encode(true);
				}else{
				//el usuario ya existe y se informa del error
					$resp=false;
				echo json_encode(false);
			}
		}



