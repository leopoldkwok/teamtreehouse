<?php

class Product 
{
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
}

$p = new Product();
$shirt = new Product("Space Juice T-shirt", 20,"Awesome Grey T-Shirt");
$soda = new Product("Space Juice Soda, 2, Grape Flavored Thirst Mutilator");
// echo $p->getInfo();

// echo $shirt->getInfo();
echo $soda->getInfo();

?>