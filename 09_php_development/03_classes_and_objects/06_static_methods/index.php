<?php

class Product 
{

	public static $manufacturer = "Bart Taylor";

	//properties
	public $name = 'default_name';
	public $price = 0;
	public $desc = 'default description';
	
	function __construct($name, $price, $desk){
		$this->name = $name;
		$this->price = $price; 
		$this->desc = $desc;
	}

	//methods
	public function getInfo() {
		return "Product Name: ". $this->name;
	}

	public function getMaker()  {
		return self::$manufacturer;
	}
}

class Soda extends Product
{
	public $flavor;

	function __construct($name, $price, $desc, $flavor){
		parent::__construct($name, $price, $desc);
		$this->flavor = $flavor;
	}

	public function getInfo() {
		return "Product Name: ". $this->name . " Flavor: ". $this->flavor;
	} 
}

$p = new Product();
$shirt = new Product("Space Juice T-shirt", 20,"Awesome Grey T-Shirt");
$soda = new Soda("Space Juice Soda, 2", "Thirst Mutilator", "Grape");
// echo $p->getInfo();

// echo $shirt->getInfo();
echo $soda->getInfo();

echo $shirt->getMaker();
// Bart Taylor 

echo $soda->getMaker();

echo $shirt::$manufacturer();
// Bart Taylor

echo $shirt->manufacturer
// Undefined Property: manufacturer

?>