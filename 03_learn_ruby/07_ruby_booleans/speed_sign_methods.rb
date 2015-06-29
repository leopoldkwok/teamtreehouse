def flash_car_speed(speed)
	10.times do 
		print "\r#{speed}"
		sleep 0.25
		print "\r "
		sleep 0.25
	end
	puts "\n"
end