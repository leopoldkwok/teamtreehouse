loop do 
	print "Enter a number greater than 10 to exit: "
	answer = gets.chomp.to_i
	break if answer > 10
end