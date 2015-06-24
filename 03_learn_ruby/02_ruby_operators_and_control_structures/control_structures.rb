print "Enter name: "
name = gets.chomp

if name == "Jason"
	puts "That's my name, too!"
else 
	puts "Hi #{name}!"
end	

print "Would you like to see your name backwards? (yes or no)"
answer = gets.chomp.downcase

if answer == "yes"
	puts "This is your name backwards:"
	puts name.reverse
else
	puts "Ok, maybe later."
end

# car1_speed = 500
# car2_speed = 300
# car2_speed += 300

# if car1_speed < car2_speed
# 	puts "Car 1 is slower than car 2."
# end

# if car2_speed > car1_speed
# 	puts "Car 2 is faster than car 2."
# end