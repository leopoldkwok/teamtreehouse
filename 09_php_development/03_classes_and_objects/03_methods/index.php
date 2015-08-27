<?php

class Product 
{
	//properties
	public $name = 'default_name';
	
	//methods
	public function getInfo() {
		return "Product Name: ". $this->name;
	}
}

$p = new Product();

echo $p->getInfo();

?>