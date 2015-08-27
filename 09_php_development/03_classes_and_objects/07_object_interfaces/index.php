<?php
interface Rideable
{
	public function howToRide();
}

class Skateboard implements Rideable
{
	public function howToRide() {
		$steps = array();
		$steps[] = "Balance your front foot on the board.";
		$steps[] = "Kick, then push with the other foot.";
		$steps[] = "Don't fall down!";
		return $steps;
	}
}
?>