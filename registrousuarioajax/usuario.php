<?php



	class Usuario{
	private $nombre;
	private $apellidos;
	private $correo;
	private $usu;
	private $pass;


	 function __construct($n,$a,$e,$u,$p){

 	$this ->nombre=$n;
 	$this ->apellidos=$a;
 	$this ->email=$e;
 	$this ->usu=$u;
 	$this ->pass=$p;

 	}
 		function creeLineaFichero(){
 		$sal =$this->nombre.";".$this->apellidos.";".$this->email.";".$this->usu.";".$this->pass;
 		return $sal;
 		}
 		function getUsu(){
 			return $this->usu;
 		}

		}


?>