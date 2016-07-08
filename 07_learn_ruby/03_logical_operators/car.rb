car1_speed = 50
car2_speed = 60

if !(car1_speed == car2_speed)
	puts "Car 1 and car 2 are not going the same speed."
end

if !((car1_speed > 40) && (car1_speed > car2_speed))
	puts "Car 1 is going fast, but not as fast as car 2."
end